import React, { Component } from 'react';
import { Modal,Form,Input,Row,Col,DatePicker,Radio} from 'antd';
import moment from 'moment';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;


const success = (props) => {
    const {showSuccess,
        getFieldDecorator,
        validateFields,
    } = props;
    
    return(
        <div>
            <Col span={12}>
            操作成功！
            </Col>
        </div>
    ); 
};


function mapStateToProps({userModel}){
    debugger
    return {userModel}
}
export default success;