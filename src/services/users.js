// request 是我们封装的一个网络请求库
import request from '../utils/request';
import qs from 'qs';
import config from '../config';

export async function query(params) {
  return request(`/api/users?${qs.stringify(params)}`);
}

export function getListData1(page,params){
    return request('http://localhost:8762/list?page=1&rows=2',{method:'post',body:{current_page:page,size:config.PAGE_SIZE,...params}});
}

// export function getListData(page,params){
//     debugger
//     console.log(`${config.api.getListData}`)
//     let i = request('post',`${config.api.getListData}`,{current_page:page,size:config.PAGE_SIZE,...params},true);
//     debugger
//     console.log('lewistestService')
//     return i; 
// }

// export function getListData(page,params){
//     debugger
//     console.log(`${config.api.getListData}`)
//     let i = request(`${config.api.getListData}`,{current_page:page,size:config.PAGE_SIZE,...params},true);
//     debugger
//     console.log('lewistestService')
//     return i; 
// }

// export function getListData({pagination:{currentpage:page,pageSize:total},params}){
//     debugger
//     console.log(`${config.api.getListData}`)
//     console.log(page)
//     console.log(total)
//     console.log(params)
//     return request(`${config.api.getListData}`,{method:'post',body:JSON.stringify({pagination:{currentPage:page,pageSize:total},params})});
// }

// export function getListData({page,total,params}) {
//     debugger
//     console.log(page)
//     console.log(total)
//     console.log(JSON.stringify(params))
//     return request(`${config.api.getListData}/list?page=${page}&rows=${total}`, {
//       method: 'POST',
//       body:JSON.stringify(params)
//     });
//   }

export function getListData({pagination:{currentpage:page,pageSize:total},userParams}){
    debugger
    console.log(page)
    console.log(total)
    console.log(JSON.stringify(userParams))
    return request(`${config.api.getListData}?page=${page}&rows=${total}`, {
      method: 'POST',
      body:JSON.stringify(userParams)
    });
  }

export function saveData(params){
    debugger
    console.log(JSON.stringify(params))
    console.log(JSON.stringify(`${config.api.saveData}`))
    return request(`${config.api.saveData}`,{
        method:'post',
        body:JSON.stringify(params)});
}

export function deleteData(id){
    debugger
    console.log(`${config.api.deleteData}`)
    console.log(JSON.stringify(id))
    return request(`${config.api.deleteData}?id=${id}`,{
        method:'GET'
    });
}

export function batchDelete(ids){
    debugger
    console.log(`${config.api.batchDelete}`)
    console.log(JSON.stringify(ids))
    return request(`${config.api.batchDelete}?id=${ids}`,{
        method:'GET'
    });
}

export function updateData(params){
    debugger
    console.log(`${config.api.updateDate}`)
    console.log(JSON.stringify(params))
    return request(`${config.api.updateDate}`,{method:'post',body:JSON.stringify(params)});
}



