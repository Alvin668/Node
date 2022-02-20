const {
    default: axios
} = require('axios');
const Router = require('koa-router')
const HttpCode = require('../utils/HttpCode')
const router = new Router();
const {
    MY_COOKIE
} = require('../utils/config')

const baseUrl = 'https://api.juejin.cn/growth_api/v1/'
aid = 2608,
    uuid = '7050641888232212007';
const recommandUrl = 'https://api.juejin.cn/recommend_api/v1/article/',
    userApi = 'https://api.juejin.cn/user_api/v1/author/',
    interactApi = 'https://api.juejin.cn/interact_api/v1/digg/'

router.get('/category', async (ctx, next) => {
    const {
        data
    } = await axios.get(`https://api.juejin.cn/tag_api/v1/query_category_briefs?aid=${aid}&uuid=${uuid}`);
    ctx.body = data
    next()
})

router.get('/today-status', async (ctx, next) => {
    const {
        data
    } = await axios.get(`${baseUrl}get_today_status?aid=${aid}&uuid=${uuid}`, {
        headers: {
            cookie: MY_COOKIE
        }
    });
    ctx.body = data;
    next()
})

router.get('/get-month', async (ctx, next) => {
    const {
        data
    } = await axios.get(`${baseUrl}get_by_month?aid=${aid}&uuid=${uuid}`, {
        headers: {
            cookie: MY_COOKIE
        }
    });
    ctx.body = data;
    next()
})
router.get('/get-count', async (ctx, next) => {
    const {
        data
    } = await axios.get(`${baseUrl}get_counts?aid=${aid}&uuid=${uuid}`, {
        headers: {
            cookie: MY_COOKIE
        }
    });
    ctx.body = data;
    next()
})

router.get('/get-point', async (ctx, next) => {
    const {
        data
    } = await axios.get(`${baseUrl}get_cur_point?aid=${aid}&uuid=${uuid}`, {
        headers: {
            cookie: MY_COOKIE
        }
    });
    ctx.body = data;
    next()
})

router.get('/get_cur_supp', async (ctx, next) => {
    const {
        data
    } = await axios.get(`${baseUrl}get_cur_supp?aid=${aid}&uuid=${uuid}`, {
        headers: {
            cookie: MY_COOKIE
        }
    });
    ctx.body = data;
    next()
})

router.get('/get_calendar', async (ctx, next) => {
    const {
        data
    } = await axios.get(`${baseUrl}get_coder_calendar?aid=${aid}&uuid=${uuid}`, {
        headers: {
            cookie: MY_COOKIE
        }
    });
    ctx.body = data;
    next()
})

router.get('/get_rules_text', async (ctx, next) => {
    const {
        data
    } = await axios.get(`${baseUrl}get_rules_text?aid=${aid}&uuid=${uuid}`, {
        headers: {
            cookie: MY_COOKIE
        }
    });
    ctx.body = data;
    next()
})

router.get('/get_luck', async (ctx, next) => {
    const {
        data
    } = await axios.get(`${baseUrl}lottery_config/get?aid=${aid}&uuid=${uuid}`, {
        headers: {
            cookie: MY_COOKIE
        }
    });
    ctx.body = data;
    next()
})

router.get('/get_luck_rules', async (ctx, next) => {
    const {
        data
    } = await axios.get(`${baseUrl}lottery_config/rules_text?aid=${aid}&uuid=${uuid}`, {
        headers: {
            cookie: MY_COOKIE
        }
    });
    ctx.body = data;
    next()
})

router.post('/checkin', async (ctx, next) => {
    const {
        data
    } = await axios({
        url: `${baseUrl}check_in`,
        method: 'post',
        headers: {
            cookie: MY_COOKIE
        }
    });
    ctx.body = data;
    next()
})
router.post('/draw_free', async (ctx, next) => {
    const {
        data
    } = await axios({
        url: `${baseUrl}lottery/draw`,
        method: 'post',
        headers: {
            cookie: MY_COOKIE
        }
    });
    ctx.body = data;
    next()
})
router.post('/draw_1', async (ctx, next) => {
    const {
        data
    } = await axios({
        url: `${baseUrl}lottery/draw?aid=${aid}&uuid=${uuid}&_signature=_02B4Z6wo00901AeXZ.wAAIDAh5WdvONNGHwHg2NAAGAh1NQgc0JyBSawyZDUOKZbJecYCaCbN8zIiwLH9.JGMl3pbU0I7IBGIDAEPkN4MKe4ZEHljUN1NxSGFXerjQaUVJBrejkYNo13LxVK1f`,
        method: 'post',
        headers: {
            cookie: MY_COOKIE
        }
    });
    ctx.body = data;
    next()
})
router.post('/ten_draw', async (ctx, next) => {
    const {
        data
    } = await axios({
        url: `${baseUrl}lottery/ten_draw?aid=${aid}&uuid=${uuid}`,
        method: 'post',
        headers: {
            cookie: MY_COOKIE
        }
    });
    ctx.body = data;
    next()
})
router.post('/my_luck', async (ctx, next) => {
    const {
        data
    } = await axios({
        url: `${baseUrl}lottery_lucky/my_lucky?aid=${aid}&uuid=${uuid}`,
        method: 'post',
        headers: {
            cookie: MY_COOKIE
        }
    });
    ctx.body = data;
    next()
})

router.post('/global_big', async (ctx, next) => {
    const {
        pageNo,
        pageSize
    } = ctx.request.body;
    const {
        data
    } = await axios({
        url: `${baseUrl}lottery_history/global_big?aid=${aid}&uuid=${uuid}`,
        method: 'post',
        headers: {
            cookie: MY_COOKIE
        },
        data: {
            page_no: pageNo,
            page_size: pageSize
        }
    });
    ctx.body = data;
    next()
})

router.post('/global_small', async (ctx, next) => {
    const {
        data
    } = await axios({
        url: `${baseUrl}lottery_history/global_small?aid=${aid}&uuid=${uuid}`,
        method: 'post',
        headers: {
            cookie: MY_COOKIE
        },
        data: {
            page_no: 20
            // page_size: 5
        }
    });
    ctx.body = data;
    next()
})

router.post('/recommend_all_feed', async (ctx, next) => {
    const {
        cursor,
        limit,
        sortType
    } = ctx.request.body;
    const {
        data
    } = await axios({
        url: `${recommandUrl}recommend_all_feed?aid=${aid}&uuid=${uuid}`,
        method: 'post',
        headers: {
            cookie: MY_COOKIE
        },
        data: {
            client_type: 2608,
            cursor: cursor + '',
            id_type: 2,
            limit: limit,
            sort_type: sortType
        }
    });
    ctx.body = data;
    next()
})

router.post('/recommend', async (ctx, next) => {
    let {
        limit,
        cate_id,
        cursor
    } = ctx.request.body
    cate_id = cate_id == -999 ? '' : cate_id;
    const {
        data
    } = await axios.get(`${userApi}recommend?aid=${aid}&uuid=${uuid}&category_id=${cate_id}&cursor=${cursor}&limit=${limit}`, {
        headers: {
            cookie: MY_COOKIE
        }
    });
    ctx.body = data;
    next()
})

router.post('/recommend_follow_feed', async (ctx, next) => {
    const {
        cursor
    } = ctx.request.body;
    const {
        data
    } = await axios({
        url: `${recommandUrl}recommend_follow_feed?aid=${aid}&uuid=${uuid}`,
        method: 'post',
        headers: {
            cookie: MY_COOKIE
        },
        data: {
            cursor: cursor + '',
            id_type: 2,
        }
    });
    ctx.body = data;
    next()
})
router.post('/save_digg', async (ctx, next) => {
    const {
        itemid
    } = ctx.request.body;
    const {
        data
    } = await axios({
        url: `${interactApi}save?aid=${aid}&uuid=${uuid}`,
        method: 'post',
        headers: {
            cookie: MY_COOKIE
        },
        data: {
            client_type: 2608,
            item_id: itemid,
            item_type: 2
        }
    });
    ctx.body = data;
    next()
})
router.post('/cancel_digg', async (ctx, next) => {
    const {
        itemid
    } = ctx.request.body;
    const {
        data
    } = await axios({
        url: `${interactApi}cancel?aid=${aid}&uuid=${uuid}`,
        method: 'post',
        headers: {
            cookie: MY_COOKIE
        },
        data: {
            client_type: 2608,
            item_id: itemid,
            item_type: 2
        }
    });
    ctx.body = data;
    next()
})

router.post('/recommend_cate_feed', async (ctx, next) => {
    const {
        cateId,
        cursor,
        limit,
        sortType
    } = ctx.request.body;
    const {
        data
    } = await axios({
        url: `${recommandUrl}recommend_cate_feed?aid=${aid}&uuid=${uuid}`,
        method: 'post',
        headers: {
            cookie: MY_COOKIE
        },
        data: {
            cursor: cursor + '',
            id_type: 2,
            cate_id: cateId,
            limit: limit,
            sort_type: sortType
        }
    });
    ctx.body = data;
    next()
})

router.post('/recommend_tag_list', async (ctx, next) => {
    const {
        cateId,
    } = ctx.request.body;
    const {
        data
    } = await axios({
        url: `https://api.juejin.cn/recommend_api/v1/tag/recommend_tag_list?aid=${aid}&uuid=${uuid}`,
        method: 'post',
        headers: {
            cookie: MY_COOKIE
        },
        data: {
            cate_id: cateId,
        }
    });
    ctx.body = data;
    next()
})
router.post('/do', async (ctx, next) => {
    const {
        userId,
    } = ctx.request.body;
    const {
        data
    } = await axios({
        url: `https://api.juejin.cn/interact_api/v1/follow/do?aid=${aid}&uuid=${uuid}`,
        method: 'post',
        headers: {
            cookie: MY_COOKIE
        },
        data: {
            id: userId,
            type: 1
        }
    });
    ctx.body = data;
    next()
})

router.post('/undo', async (ctx, next) => {
    const {
        userId,
    } = ctx.request.body;
    const {
        data
    } = await axios({
        url: `https://api.juejin.cn/interact_api/v1/follow/undo?aid=${aid}&uuid=${uuid}`,
        method: 'post',
        headers: {
            cookie: MY_COOKIE
        },
        data: {
            id: userId,
            type: 1
        }
    });
    ctx.body = data;
    next()
})

module.exports = router;