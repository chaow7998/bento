import {
    RECIEVE_ADDRESS, RECIEVE_CATEGORYS, RECIEVE_SHOPS, RECIEVE_GOODS, RECIEVE_INFO, RECIEVE_RATINGS, RECIEVE_USERINFO, RECIEVE_LOGOUT
} from './mutation-types'
import {
    reqAddress, reqCategorys, reqLogout, reqShopInfo,
    reqShopRatings,
    reqShopGoods, reqShops, reqUserInfo
} from '../api'
export default {
    async getAddress({ commit, state }) {
        // 发送异步请求
        const geohash = state.latitude + ',' + state.longitude
        const result = await reqAddress(geohash)
        //提交一个mutation
        if (result.code === 0) {
            const address = result.data
            commit(RECIEVE_ADDRESS, { address })
        }
    },
    async getCategorys({ commit }) {
        // 发送异步请求
        const result = await reqCategorys()
        //提交一个mutation
        if (result.code === 0) {
            const categorys = result.data
            commit(RECIEVE_CATEGORYS, { categorys })
        }
    },
    async getShops({ commit, state }) {
        // 发送异步请求
        const { longitude, latitude } = state
        const result = await reqShops({ longitude, latitude })
        //提交一个mutation
        if (result.code === 0) {
            const shops = result.data
            commit(RECIEVE_SHOPS, { shops })
        }
    },
    //同步记录用户信息
    recordUser({ commit }, userInfo) {
        commit(RECIEVE_USERINFO, { userInfo })
    },
    //异步获取userInfo
    async getUserInfo({ commit }) {
        const result = await reqUserInfo()
        if (result.code === 0) {
            const userInfo = result.data
            commit(RECIEVE_USERINFO, { userInfo })
        }
    },
    async reqLogout({ commit }) {
        const result = await reqLogout()
        if (result.code === 0) {
            const userInfo = {}
            commit(RECIEVE_LOGOUT, { userInfo })
        }
    },
    async getGoods({ commit }) {
        const result = await reqShopGoods()
        if (result.code === 0) {
            const goods = result.data
            commit(RECIEVE_GOODS, { goods })
        }
    },
    async getInfo({ commit }) {
        const result = await reqShopInfo()
        if (result.code === 0) {
            const info = result.data
            commit(RECIEVE_INFO, { info })
        }
    },
    async getRatings({ commit }) {
        const result = await reqShopRatings()
        if (result.code === 0) {
            const ratings = result.data
            commit(RECIEVE_RATINGS, { ratings })
        }
    },
}