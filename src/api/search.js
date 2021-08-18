 /**
     * 查询员工表
     * @param body
     * @return
     */
import request from '@/utils/request'
// const baseUrl ="http://192.168.166.124:8080/dd04-manage/api/v1"
export function search1(params) {
    return request({
      url: 'dd04-manage/api/v1/te/search',
      method: 'GET',
      params
      
    
    })
  }
  export function Adduser(data) {
    return request({
      url: 'dd04-manage/api/v1/te/add',
      method: 'POST',
       data
    })
  }
  export function deleteUser(data) {
    return request({
      url: 'dd04-manage/api/v1/te/delete',
      method: 'POST',
      params:data
    })
  }
  export function editUser(data) {
    return request({
      url: 'dd04-manage/api/v1/te/update',
      method: 'POST',
      data
    })
  }

