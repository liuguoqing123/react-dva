import React, { Component} from 'react';
import {PropTypes} from 'prop-types';
// 引入 connect 工具函数
import { connect } from 'dva';
import Styles from '../utils/index.css';

// Users 的 Presentational Component
import UserList from '../components/Users/UserList';
import UserSearch from '../components/Users/UserSearch';
import UserModelConmponents from '../components/Users/UserModel';
import UserPagination from '../components/Users/userPagination';
import UserToolbar from '../components/Users/userToolbar';


// 引入对应的样式
// 可以暂时新建一个空的
import styles from './Users.less';
//数据处理在 React 中是非常重要的概念之一，分别可以通过 props, state 和 context 来处理数据。而在 dva 应用里，你只需关心 props 。
const usersPage = (props) =>{
  //获取model 传递过来的参数
  const {location, dispatch, userModel} = props;
  //拿到users里的值 
  const {list, total,loading,current,page,pagesize,selectedRowKeys,selectedRows} = userModel;
  //查询组件props
  const searchProps = {
    dispatch,
    onSearch,
    filter:{
      ...location.query
    }
  }
  //模态窗口props
  const modalProps = {
    item: userModel.modalType === 'create' ? {} : userModel.currentItem,
    visible : userModel.modalVisible,
    title: getTitl(userModel.modalType),
    wrapClassName:'vertical-left-modal',
    onSave,
    addSave,
    updateData,
    onCancel,
    showModel,
    hideModel,
    batchDelete
  }
  //工具条
  const toolbarProps = {
    addSave,
    batchDelete
  }
  //列表props
  const showListProps = {
    total,
    current,
    loading,
    dataSource:list,
    onDelete,
    onEdit,
    rowSelection:{
      selectedRowKeys,
      selectedRows,
      onChange:(keys) => {
        dispatch({
          type:'userModel/querySuccess',
          payload:{
            selectedRows:selectedRows,
            selectedRowKeys:keys,
          },
        })
      },
    }
  };
  //分页
  const paginationProps = {
    total,
    page,
    pagesize,
    onPageChange,
    userModel,
    onShowSizeChange,
    showTotal
  }
  //获取Modal 框标题 ，通过modalType:'update'
  function getTitl(type){
    debugger
    switch(type){
      case 'create': return "新增用户"; break;
      case 'update': return "修改用户"; break;
      case 'show': return "查看用户"; break;
    }
  }
  //新增数据保存
  function onSave(values){
    debugger
    dispatch({
      type:'userModel/onSave',
      payload:values
    });
  }
  //新增按钮显示增加表单框
  function addSave(values){
    debugger
    dispatch({
      type:'userModel/showModel',
    })
  }
  //编辑按钮显示编辑表单框  （编辑表单和新增公用一个modal ）
  function onEdit(item){
    debugger
    console.log(item)
    dispatch({
      type:'userModel/showModel',
      payload:{
        modalType:'update',
        currentItem :item,
      }
    });
  }
  //编辑比表单调用update 方法
  function updateData(values){
    debugger
    dispatch({
      type:'userModel/onUpdate',
      payload:values
    });
  }
  //点击取消按钮 隐藏modal框
  function onCancel(){
    dispatch({
      type:'userModel/hideModel',
    });
  }
  //显示modal框 modalVisible:true 由false 改为 true 
  function showModel(values){
    dispatch({
      type:'userModel/showModel',
      payload:values
    })
  }
  //隐藏modal框
  function hideModel(){
    dispatch({
      type:'userModel/hideModel',
    });
  }
  //点击搜索，传递搜索项的值
  function onSearch(params){
    location.query = params;

    let{userName,userTel} = params;
    for(let item of Object.keys(params)){
      if(params[item]==""){
        params[item] = undefined
      }
    }

    dispatch({
      type:'userModel/getListData',
      payload:{
        params:params
      }
    });
  }
  //点击删除按钮  传递id 
  function onDelete(id){
    debugger
    dispatch({
      type:'userModel/onDelete',
      payload:id
    });
  }
  //批量阐述 传递一个数组ids  暂时没有实现
  function batchDelete(){
    dispatch({
      type:'userModel/batchDelete',
      payload:selectedRowKeys
    });
  }
  //列表翻页
  function onPageChange(page, total){
    const {query:params} = location;
    dispatch({
      type:'userModel/getListData',
      payload:{
        page,
        total,
        ...params
      }
    });
  }
  //改变页面显示的条数  暂时未启用
  function onShowSizeChange(current, total){
    const {query:params} = location;
    dispatch({
      type:'userModel/getListData',
      payload:{
        total,
        ...params
      }
    });
  }
  // 显示列表分页
  function showTotal(total,range){
    // return `总页数 ${range[0]}-${range[1]} of Total ${total}`;
    debugger
    console.log(total)
    return `总记录数 :  ${total},  总页数 :  ${Math.ceil(total/10)}` ;
  }
  //返回视图模板
      return (
      <div className={styles.normal}>
        {/* 用户筛选搜索框 */}
        <UserSearch {...searchProps} />
        {/* 用户信息展示列表 */}
        <UserModelConmponents {...modalProps}/>
        {/* 导入工具栏 */}
        <UserToolbar {...toolbarProps} />
        {/* 导入列表显示组件 */}
        <UserList {...showListProps} />
        {/* 导入分页组件 */}
        <UserPagination {...paginationProps} />
      </div>
    );
}
  //对传入的modal 进行效验
  //JavaScript 是弱类型语言，所以请尽量声明 propTypes 对 props 进行校验，以减少不必要的问题。
  usersPage.PropTypes = {
    userModel: PropTypes.object,
  }
  //将需要的state 的项注入到与此视图数据相关的组件props 上
  function mapStateToProps({userModel}){
    return {userModel}
  }
  //将model 与视图组件关联
  export default connect(mapStateToProps)(usersPage)
// function Users({ location, dispatch, users }) {
//     const {
//       loading, list, total, current,
//       currentItem, modalVisible, modalType
//       } = users;
//     const userSearchProps={};
//     const userListProps={
//       dataSource: list,
//       total,
//       loading,
//       current,
//     };
//     const userModalProps={};
//     console.log('lewistestRoutes')
//     return (
//       <div className={styles.normal}>
//         {/* 用户筛选搜索框 */}
//         <UserSearch {...userSearchProps} />
//         {/* 用户信息展示列表 */}
//         <UserList {...userListProps} />
//         {/* 添加用户 & 修改用户弹出的浮层 */}
//         <UserModal {...userModalProps} />
//       </div>
//     );
//   }
//   Users.propTypes = {
//     users: PropTypes.object,
//   };
//   // 指定订阅数据，这里关联了 users
//   function mapStateToProps({ users }) {
//     return {users};
//   }
//   // 建立数据关联关系
//   export default connect(mapStateToProps)(Users);