import Mock from 'mockjs'
import data from './data.json'
Mock.mock('/goods', data.goods)
Mock.mock('/info', data.info)
Mock.mock('/ratings', data.ratings)
