/**
 * 
 * @param {api} params 
 * @returns 
 */
import request from '@/utils/request'
// 页面登录
export function login(data) {
    return request({
      url: 'dd04-manage/login',
      method: 'POST',
      data
    })
}

export function logout(data) {
  return request({
    url: 'dd04-manage/logout',
    method: 'DELETE',
    data
  })
}