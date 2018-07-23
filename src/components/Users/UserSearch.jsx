import React, { Component } from 'react';
import {Form, Icon,Input, Button} from 'antd';
import styles from './search.css';


const FormItem = Form.Item;
const Search = Input.Search;

//从props 获取传过来的参数
const UsersSearch = (props) => {
    const {param, dispatch, onSearch, filter, form:{
        getFieldDecorator,
        getFieldsValue,
        setFieldsValue,
    }} = props;
    //条件查询
    const handleSubmit = () => {
        let fields = getFieldsValue()
        onSearch(fields)
    }
    //清空搜索框
    const handleReset = () => {
        const fields = getFieldsValue();
        for(let item of Object.keys(fields)){
            if({}.hasOwnProperty.call(fields,item)){
            if(fields[item] instanceof Array){
                fields[item] = [];
            } else {
                fields[item] = undefined;
            }
        }
    }
    setFieldsValue(fields);
    //handleSubmit();
}   
    //从filter中获取参数 
    const {userName, userTel, type, status} = filter;
    //返回搜索框栏
    return(
        <Form layout="inline" onSubmit={handleSubmit}>
            <FormItem className={styles.serInput} label="姓名">
            {getFieldDecorator('userName',{initialValue:userName})
            (<Search id="userName" placeholder="姓名" size="default" onSearch={handleSubmit}/>)}
            </FormItem>
            <FormItem  label="电话">
            {getFieldDecorator('userTel',{initialValue:userTel})
            (<Search id="userTel" placeholder="电话" size="default" onSearch={handleSubmit}/>)}
            </FormItem>
            <FormItem>
                <Button type="primary" size="default" htmlType="submit" Icon="search" className={styles.search}>查询</Button>
                <Button type="default" size="default"  Icon="reload" className={styles.reset} onClick={handleReset}>清空</Button>
            </FormItem>   
        </Form>
    );
};

export default Form.create()(UsersSearch);