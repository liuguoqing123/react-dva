import React from 'react';
import { Pagination} from 'antd';



const userPagination = (props) => {
    const {total, page, pageSize, onPageChange,userModel, onShowSizeChange, showTotal} = props;
    
    return(
        <div>
            <Pagination
            className = "ant-table-pagination"
            showQuickJumper
            //showSizeChanger = {true}
            onShowSizeChange={onShowSizeChange}
            //pageSizeOptions = {['5','10','20','50','100']}
            total = {total}
            //current = {page}
            //pageSize = {pageSize}
            onChange = {onPageChange}
            showTotal = {showTotal}
            />
        </div>
    ); 
};


function mapStateToProps({userModel}){
    debugger
    return {userModel}
}

userPagination.propTypes = {};
export default userPagination;
//export default ()=><div>user modal</div>;