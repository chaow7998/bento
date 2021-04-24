// 直接更新state的多个方法对象
import {
    RECIEVE_ADDRESS, RECIEVE_CATEGORYS, RECIEVE_LOGOUT, RECIEVE_GOODS, RECIEVE_INFO, RECIEVE_RATINGS, RECIEVE_SHOPS, RECIEVE_USERINFO
} from './mutation-types'
export default {
    [RECIEVE_ADDRESS](state, { address }) {
        state.address = address
    },
    [RECIEVE_CATEGORYS](state, { categorys }) {
        state.categorys = categorys
    },
    [RECIEVE_SHOPS](state, { shops }) {
        state.shops = shops
    },
    [RECIEVE_USERINFO](state, { userInfo }) {
        state.userInfo = userInfo
    },
    [RECIEVE_LOGOUT](state, { userInfo }) {
        state.userInfo = userInfo
    },
    [RECIEVE_GOODS](state, { goods }) {
        state.goods = goods
    },
    [RECIEVE_INFO](state, { info }) {
        state.info = info
    },
    [RECIEVE_RATINGS](state, { ratings }) {
        state.ratings = ratings
    }
}
