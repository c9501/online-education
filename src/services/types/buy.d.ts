//是否购买
export type IsbuyType = {
  isBuy:boolean
}
//图片
export type InfoType = {
  detailUrls:string[],
  goodRate:string,
  id:number,
  isFree:0|1,
  mainImage:string,
  nickName:string,
  priceDiscount:number,
  priceOriginal:number,
  studyTotal:number,
  title:string,
  totalTime:string,
  userId:number,
  userImage:string,
  }
