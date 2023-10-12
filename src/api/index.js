import request from '../plugins/request';

/**
 * 聚合查询用户信息 用户、菜单、默认项目ID
 */
 export function getHotList (params) {
    return request({
        url: '/api/bing',
        method: 'get',
        params
    })
}
export function aiChat (params) {
    return request({
        url: '/api/ai/chat',
        method: 'get',
        params
    })
}

export function baiduNews (type) {
    return request({
        url: `/api/hotlist?type=${type}`,
        method: 'get'
    })
}
export function doubanMovie () {
    return request({
        url: `/api/douban`,
        method: 'get'
    })
}
export function getinfo () {
    return request({
        url: `/api/getIpInfo`,
        method: 'get'
    })
}
export function weather (city) {
    return request({
        url: `/api/weather?city=${city}`,
        method: 'get'
    })
}
// 
export function starInfo (params) {
    return request({
        url: '/api/horoscope',
        method: 'get',
        params
    })
}
export function getList (params) {
    return request({
        url: '/user/list',
        method: 'get',
        params
    })
}
export function addList (params) {
    return request({
        url: '/user/add',
        method: 'get',
        params
    })
}

