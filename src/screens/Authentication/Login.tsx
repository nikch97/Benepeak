import { useContext, useEffect, useState } from 'react';
import {
  Form, Input, Button, Checkbox, Radio,
} from 'antd';
import { UserOutlined, LockOutlined, UploadOutlined } from '@ant-design/icons';
import { UserContext } from '../../store/contexts/UserContext';


const onFinish = (values: any) => {
  console.log('Received values of form: ', values);
}

const normFile = (e: any) => {
  console.log('Upload event:', e);

  if (Array.isArray(e)) {
    return e;
  }

  return e && e.fileList;
};



const LoginView = () => {
  const { setActions } = useContext(UserContext);
  const [form, setForm] = useState({
    username: '',
    password: '',
  });
  // useEffect(() => {
  //   actions.userRequest();
  // }, [])


  const handleChange = (e: React.ChangeEvent<any>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  
  const onClick = () => {
    setActions.userSetRequest(form);
  }

  return (
    <div className="container px-5 py-24 mx-auto">
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input name="username" onChange={handleChange} prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
            onChange={handleChange}
            name="password"
          />
        </Form.Item>      
        <Form.Item
          wrapperCol={{
            span: 12,
            offset: 6,
          }}
        >
          <Form.Item
            name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a href="#">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            span: 12,
            offset: 6,
          }}
        >
          <Button type="primary" htmlType="submit" onClick={onClick}>
            Log in
          </Button>
                Or <a href="#">register now!</a>
        </Form.Item>
      </Form>
    </div>
  )
}

export default LoginView;