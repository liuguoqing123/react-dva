import React, { Component } from 'react';
import { Modal,Form,Input,Row,Col,DatePicker,Radio} from 'antd';
import moment from 'moment';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

const userModelConmponents = (props) => {
    debugger
    const {item = {},visible,title,onSave,updateData,onCancel,showModel,hideModel,form:{
        getFieldDecorator,
        validateFields,
    }} = props;
    
    //格式化form元素样式
    const formItemLayout = {
        labelCol:{span:8},
        wrapperCol:{span:16},
    };
    //点击确定按钮 出发事件 通过id 判断是新增还是修改
    const onOk = () => {
        validateFields((err,values) => {
            debugger
            console.log(values)
            const {id} = values;
            if(id == undefined){
                onSave(values);
            }else{
                updateData(values);
            }
            hideModel();
        });
    };

    const radioOptions = [
        {label: '男',value:'男'},
        {label: '女',value:'女'}
    ];

    debugger
    //返回新增/修改model 
    return(
        <div>
            <Modal 
                visible = {visible}
                title = {title}
                okText = "保存"
                onCancel = {onCancel}
                onOk = {onOk}
                width = {800}
                destroyOnClose = {true}
            >
            <Form>
                <Row gutter={0} align="center">
                <FormItem>
                {getFieldDecorator('id',{initialValue: item.id})(<Input type = "hidden"/>)}
            </FormItem>
            <Col span={12}>
                <FormItem  hasFeedback {...formItemLayout} label="姓名">
                {getFieldDecorator('userName',{initialValue:item.userName,
                rules:[{required:true, message:'请输入姓名'}]
                })(<Input/>)}
                </FormItem>
            </Col>

            <Col span={12}>
                <FormItem  hasFeedback {...formItemLayout} label="姓别">
                {getFieldDecorator('userSex',{initialValue:item.userSex,
                rules:[{required:true, message:'请输入姓别'}]})
                (<RadioGroup options={radioOptions}/>)}
                </FormItem>
            </Col>

            <Col span={12}>
                <FormItem  hasFeedback {...formItemLayout} label="电话">
                {getFieldDecorator('userTel',{initialValue:item.userTel,
                rules:[{required:true, message:'请输入电话'}]
                })(<Input/>)}
                </FormItem>
            </Col>

            <Col span={12}>
                <FormItem  hasFeedback {...formItemLayout} label="地址">
                {getFieldDecorator('userAddr',{initialValue:item.userAddr,
                rules:[{required:true, message:'请输入地址'}]
                })(<Input/>)}
                </FormItem>
            </Col>

            <Col span={12}>
                <FormItem  hasFeedback {...formItemLayout} label="备注">
                {getFieldDecorator('userRemark',{initialValue:item.userRemark,
                rules:[{required:true, message:'请输入备注'}]
                })(<Input/>)}
                </FormItem>
            </Col>
                </Row>
            </Form>
            </Modal>
        </div>
    );

}

export default Form.create()(userModelConmponents);
//export default ()=><div>user modal</div>;