import request from '@/utils/request'
import type { Articlereq, Articleres, BannerType, CategoryType, Questionreq, Questionres, SearchReq, SearchType } from './types/home'
//获取首页轮播图
export const getBanner = () => {
  return request<BannerType[]>('article/api/advert/show/1', 'GET')
}
//导航
export const getCategory = () => {
  return request<CategoryType[]>('article/api/category/label/list', 'GET')
}
//list 数据
export const getSearchlist = (data: SearchReq) => {
  return request<SearchType>('course/api/course/search', 'POST', data)
}
//阅读
export const getArticle = (data: Articlereq) => {
  return request<Articleres>('article/api/article/search', 'POST', data)
}
//问答  question/api/question/hot
export const getQuestion = (kwd:string,data: Questionreq) => {
  return request<Questionres>('question/api/question/'+ kwd, 'POST', data)
}
