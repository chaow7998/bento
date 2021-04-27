import Vue from 'vue'
// 直接更新state的多个方法对象
import {
    RECIEVE_ADDRESS, RECIEVE_CATEGORYS, RECIEVE_LOGOUT, RECEIVE_SEARCH_SHOPS, CLEAR_CART, INCREMENT_FOOD_COUNT, DECREMENT_FOOD_COUNT, RECIEVE_GOODS, RECIEVE_INFO, RECIEVE_RATINGS, RECIEVE_SHOPS, RECIEVE_USERINFO
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
    },
    [INCREMENT_FOOD_COUNT](state, { food }) {
        if (!food.count) { // 第一次增加
            // food.count = 1  // 新增属性(没有数据绑定)
            /*
            对象
            属性名
            属性值
             */
            Vue.set(food, 'count', 1) // 让新增的属性也有数据绑定
            // 将food添加到cartFoods中
            state.cartFoods.push(food)
        } else {
            food.count++
        }
    },
    [DECREMENT_FOOD_COUNT](state, { food }) {
        if (food.count) {// 只有有值才去减
            food.count--
            if (food.count === 0) {
                // 将food从cartFoods中移除
                state.cartFoods.splice(state.cartFoods.indexOf(food), 1)
            }
        }
    },

    [CLEAR_CART](state) {

        // 清除food中的count
        state.cartFoods.forEach(food => food.count = 0)
        // 移除购物车中所有购物项
        state.cartFoods = []
    },

    [RECEIVE_SEARCH_SHOPS](state, { searchShops }) {
        state.searchShops = searchShops
    },
}
