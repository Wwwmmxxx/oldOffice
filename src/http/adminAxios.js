import instance from "./axios"

//-------------------------------请求申请列表--------------------------------
export function adminGetAllData(){
  return instance({
    url:'/submission',
    method:'GET'
  })
}

export function adminGetOneData(id){
  return instance({
    url:'/submission',
    method:'GET',
    params:{
      id
    }
  })
}