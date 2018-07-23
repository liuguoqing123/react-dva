import React, { Component } from 'react';
import { Button} from 'antd';
import styles from './search.css';


const userToolbar = (props) => {

    const {addSave,batchDelete} = props;
    //返回工具栏新增
    return(
        <div>
            <Button type="primary" size="default" icon="plus" className={styles.search} onClick={addSave}>新增</Button>
            {/* <Button type="primary" size="default" icon="delete" className={styles.search} onClick={batchDelete}>批量删除</Button> */}
        </div>
    )
}
export default userToolbar;//()=><div>user model</div>;