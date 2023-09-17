import request from '@/utils/request'
import type { InfoType, IsbuyType } from './types/buy'
//是否购买   course/course/is-buy/null
export const getIsbuy = () => {
  return request<IsbuyType>('course/course/is-buy/null', 'GET')
}
//图片标题 course/api/course/null
export const getInfo = () => {
  return request<InfoType>('course/api/course/null', 'GET')
}
