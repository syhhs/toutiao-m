
import request from '@/utils/request'

export const login = data => {
  return request({
    method: 'POST',
    url: 'http://ttapi.research.itcast.cn/app/v1_0/authorizations',
    data
  })
}

export const sendSms = mobile => {
  return request({
    method: 'GET',
    url: `http://ttapi.research.itcast.cn/app/v1_0/sms/codes/${mobile}`
  })
}
