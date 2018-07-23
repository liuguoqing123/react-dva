
//import { create, remove, update, query } from '../services/users';
//import { query, getListData } from '../services/users';
import * as usersService from '../services/users';
import config from '../config';

// 处理异步请求
// import request from '../utils/request';
// import qs from 'qs';
// async function query(params) {
//   return request(`/api/users?${qs.stringify(params)}`);
// }

export default {
  //定义路由调用model的命名空间
  namespace: 'userModel',
  //定义model数据属性
  state: {
    list: [],
    total: null,
    loading: false, // 控制加载状态
    current: null, // 当前分页信息
    page:null,
    pageSize:null,
    currentItem: {}, // 当前操作的用户对象
    modalVisible: false, // 弹出窗的显示状态
    modalType: 'create', // 弹出窗的类型（添加用户，编辑用户）
  },
  //更改model 属性方法集, reducer 是一个函数，接受 state 和 action，返回老的或新的 state 。即：(state, action) => state
   reducers: {
    //显示modal 框
    showModel(state,{payload}){
      console.log(payload)
      debugger
      return {...state, ...payload, modalVisible:true};
    }, // 控制 Modal 显示状态的 reducer

   //隐藏 modal 框
    hideModel(state){
      return {...state,modalVisible:false,modalType:'create'};
    },
    //更新当前model的属性值
    updateState(state,{payload}){
      debugger
      return{
        ...state,
        ...payload,
      }
    },
  },
    // showLoading(state, action){
    //   return { ...state, loading: true };
    // }, // 控制加载状态的 reducer
   
    // // 使用静态数据返回
    //  querySuccess(state,action){
    //   debugger
    //    return {...state, ...action.payload, loading: false};
    //  },
    // },
    //更新当前model 数据属性的数据源方法集 put:用于触发 action。 call:用于调用异步逻辑，支持 promise。 select:用于从 state 里获取数据。
     effects: {
       //获取数据列表
      *getListData({payload:{page=1,total=10,params}},{call,put}){
        debugger
        const userParams = params === undefined ? {} : params;
        console.log(userParams)
        //异步调用service 方法获取
        const data  = yield call(usersService.getListData,{pagination:{currentpage:page,pageSize:total},userParams});
        //const data = yield call(usersService.getListData,{page,total,params});
        console.log(JSON.stringify(data))
        console.log(data.data.usersList)
        console.log(data.data.total)
        //调用更新model 数据属性方法
        if(data){
          //dva 的 effects 是通过 generator 组织的。Generator 返回的是迭代器，通过 yield 关键字实现暂停功能。
          yield put({
            type :'updateState',
            payload:{
              list: data.data.usersList,
              total:data.data.total,//parseInt(5,10),
              page:page,//parseInt(1,10),
              pageSize:total,
              //selectedRowKeys:[],
              //selectedRow:{}
            },
          });
        } 
      },
      //新增数剧
      *onSave({payload:params},{put,call}){
        debugger
        yield call(usersService.saveData, params);
        yield put({
          type:'getListData',
          payload:{}
        });
       },
       //更改数据
       *onUpdate({payload:params},{put,call}){
        yield call(usersService.updateData, params);
        yield put({
          type:'getListData',
          payload:{}
        });
       },
       //删除数据
       *onDelete({payload:id},{put,call}){
        debugger
        console.log(id)
        yield call(usersService.deleteData, id);
        yield put({
          type:'getListData',
          payload:{}
        });
       },
       //批量删除
       *batchDelete({payload:ids},{put,call}){
        yield call(usersService.batchDelete, ids);
        yield put({
          type:'getListData',
          payload:{}
        });
       }
    },

  // 发布订阅 监听 监听到http请求包含/users 时处罚
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname === '/users') {
          dispatch({
            type: 'getListData',
            payload: {}
          });
        }
      });
    },
  }, 
}
