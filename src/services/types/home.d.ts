//轮播图
export type BannerType = {
  advertUrl: string
  background: string
  id: string | number
  imageUrl: string
  title: string
}

//nav导航栏
export type CategoryType = {
  id: string | number
  labelList: LabelListType[]
  name: string
}
export type LabelListType = {
  id: string | number
  name: string
}

//list信息
export type SearchReq = {
  current: string | number
  size: number
  sort?: 'new' | 'hot'
  isFree?: 0 | 1
}

export type SearchType = {
  records: SearchItemType[]
  total: number
}
export type SearchItemType = {
  id: string | number
  userId: string | number
  nickName: string
  userImage: string
  title: string
  totalTime: string
  studyTotal: number
  commTotal: number
  mainImage: string
  isFree: 0 | 1
  priceOriginal: number
  priceDiscount: number
}
//阅读请求
export type Articlereq = {
  current: number
  size: number
  categoryId?: string | number
}
//阅读响应
export type Articleres ={
  total: number
  records: ArticleType[]
}
//阅读数据
export type ArticleType = {
  id: string | number
  imageUrl: string
  nickName: string
  summary: string
  thumhup:number
  title:string
  updateDate:string
  userId:string |number
  viewCount :number
}
