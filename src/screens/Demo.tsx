import { useContext, useEffect, useState } from 'react';
import {
  Form, Input, Button, Checkbox, Radio,
  Select,
  Cascader, DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Upload,
} from 'antd';
import { UserOutlined, LockOutlined, UploadOutlined } from '@ant-design/icons';
import { UserContext } from '../store/contexts/UserContext';


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
  const { state, actions, setActions } = useContext(UserContext);
  const [form, setForm] = useState({
    username: '',
    password: '',
    select: '',
    date: ''
  });
  // useEffect(() => {
  //   actions.userRequest();
  // }, [])

  // console.log(state, actions);
  const handleChange = (e: React.ChangeEvent<any>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const handleSelect = (value: any) => {
    setForm({ ...form, select: value as string });
  };
  const handleDate = (value: any) => {
    setForm({ ...form, date: value._d as string });
  };

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
        <Form.Item label="Province">
          <Select onChange={handleSelect}>
            <Select.Option name='select' value="Vancouver">Vancouver</Select.Option>
            <Select.Option name='select' value="Calgary">Calgary</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="TreeSelect">
          <TreeSelect
            treeData={[
              {
                title: 'Light',
                value: 'light',
                children: [
                  {
                    title: 'Bamboo',
                    value: 'bamboo',
                  },
                ],
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="Cascader">
          <Cascader
            options={[
              {
                value: 'zhejiang',
                label: 'Zhejiang',
                children: [
                  {
                    value: 'hangzhou',
                    label: 'Hangzhou',
                  },
                ],
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="DatePicker">
          <DatePicker name="date" onChange={handleDate} />
        </Form.Item>
        <Form.Item label="InputNumber">
          <InputNumber />
        </Form.Item>
        <Form.Item
          name="upload"
          label="Upload"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          extra="File Upload"
        >
          <Upload name="logo" action="/" listType="picture">
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
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