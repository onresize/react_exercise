import React, { useState } from 'react'
import { Button, Checkbox, Form, Input, message } from 'antd';
import { createBrowserHistory } from 'history'


const history = createBrowserHistory()

export default () => {
  const onFinish = (values) => {
    console.log('表单值:', values);
    if (values.password == '123' && values.username == 'admin') {
      history.push('/')
      window.location.reload()
      window.localStorage.setItem('login', JSON.stringify(values))
    } else {
      message.warning('账号或密码不正确');
    }
  };


  return (
    <>
      <div className="h-screen flex justify-center items-center loginBox" >
        {/* 自定义颜色  bg-[#FFCC99]*/}
        <div className="w-530px h-300px  rounded-2xl flex items-center loginFromBox">
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              username: 'admin',
              password: 123,
              remember: true,
            }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="账号"
              name="username"
              className="w-430px"
            >
              <Input placeholder='请输入账号' defaultValue='admin' />
            </Form.Item>

            <Form.Item
              label="密码"
              name="password"
              className="w-430px"
            >
              <Input.Password placeholder='请输入密码' defaultValue='123' />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox>记住密码 <span className="text-[#fff] ml-11">账号：admin 密码：123</span></Checkbox>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button htmlType="submit">
                提交
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  )

}
