import React from 'react';
// 采用antd的UI组件
import { Table, Popconfirm, Icon } from 'antd';

const userList = (props) => {
//从传递过来的 props 中获取参数
const {loading, dataSource, onDelete, onEdit, rowSelection, onPageChange,userModel} = props;
//数据列表 
const columns = [{
      title: '姓名',
      dataIndex: 'userName',
      key: 'userName',
      render: (text) => <a href="#">{text}</a>,
      }, {
      title: '性别',
      dataIndex: 'userSex',
      key: 'userSex',
      filters: [{
        text: '男',
        value: '男'
      },{
        text: '女',
        value: '女'
      }],
      onFilter:(value,record) => record.userSex.indexOf(value) === 0
    }, {
      title: '电话',
      dataIndex: 'userTel',
      key: 'userTel',
    }, {
      title: '地址',
      dataIndex: 'userAddr',
      key: 'userAddr',
    }, {
      title: '备注',
      dataIndex: 'userRemark',
      key: 'userRemark',
    },{
      title: '操作',
      key : 'operation',
      render:(text, record) => (
        <span>
          <a onClick = {e => onEdit(record,e)}><Icon type = "edit" style = {{color:'#08c'}}/></a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Popconfirm title = "确定删除吗?" onConfirm={onDelete.bind(null,record.id)}>
          <a onClick = {() => {}}><Icon type = "delete" style = {{color:'red'}}></Icon></a>
          </Popconfirm>
        </span>
      )
    }
];
  //返回数据列表及分页
  return (
    <div>
      <Table
        //rowSelection = {rowSelection}
        columns={columns}
        dataSource={dataSource}
        bordered
        loading={loading}
        rowKey={record => record.id}
        pagination={false}
      />
      
    </div>
  );
};

// 采用 stateless 的写法
// const UserList = ({
//     list,
//     loading,
//     total,
//     page,
//     onPageChange,
//     onDelete,
//     onUpdate,
//     onShow,
//     current,
//     dataSource,
// }) => {
//   const columns = [{
//     title: '姓名',
//     dataIndex: 'userName',
//     key: 'userName',
//     render: (text) => <a href="#">{text}</a>,
//   }, {
//     title: '性别',
//     dataIndex: 'userSex',
//     key: 'userSex',
//   }, {
//     title: '电话',
//     dataIndex: 'userTel',
//     key: 'userTel',
//   }, {
//     title: '地址',
//     dataIndex: 'userAddr',
//     key: 'userAddr',
//   }, {
//     title: '备注',
//     dataIndex: 'adduserRemarkress',
//     key: 'userRemark',
//   }, {
//     title: '操作',
//     key: 'operation',
//     render: (text, record) => (
//       <p>
//         <a onClick={()=>{}}>编辑</a>
//         &nbsp;
//         <Popconfirm title="确定要删除吗？" onConfirm={()=>{}}>
//           <a>删除</a>
//         </Popconfirm>
//       </p>
//     ),
//   }];

	// 定义分页对象
  // const pagination = {
  //   total,
  //   current,
  //   pageSize: 10,
  //   onChange: ()=>{},
  // };

  // return (
  //   <div>
  //     <Table
  //       columns={columns}
  //       dataSource={dataSource}
  //       loading={loading}
  //       rowKey={record => record.id}
  //       pagination={pagination}
  //     />
      
  //   </div>
  // );
//   return (
//     <div>
//       <Table 
//         rowSelection = {rowSelection}
//         columns  {columns}
//       />
//     </div>
//   )
// }
//将当前组件和model 绑定
function mapStateToProps({userModel}){
  debugger
  return {userModel}
}
//导出当前组件
export default userList;