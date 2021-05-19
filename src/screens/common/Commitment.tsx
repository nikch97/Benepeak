import { useContext, useEffect, useState } from 'react';
import {
  Form, Input, Button, Checkbox, Radio,
  Select,
  Cascader, DatePicker,
  InputNumber,
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



const CommitmentView = () => {
  const { state, actions, setActions } = useContext(UserContext);
  const [form, setForm] = useState({
    username: '',
    password: '',
    select: '',
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
        <Form.Item label="Name">
          <Select onChange={handleSelect}>
            <Select.Option name='select' value="HSA">HSA</Select.Option>
            <Select.Option name='select' value="WSA">WSA</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Parent ID">
          <Select onChange={handleSelect}>
            <Select.Option name='select' value="1">1</Select.Option>
            <Select.Option name='select' value="2">2</Select.Option>
          </Select>
        </Form.Item>       
        <Form.Item label="ID">
          <Select onChange={handleSelect}>
            <Select.Option name='select' value="Dental">Dental</Select.Option>
            <Select.Option name='select' value="Vision">Vision</Select.Option>
          </Select>
        </Form.Item>         
        <Form.Item
          wrapperCol={{
            span: 14,
            offset: 4,        
          }}
        >
          <Button 
          style={{width:'100%'}}
          type="primary" htmlType="submit" onClick={onClick}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default CommitmentView;