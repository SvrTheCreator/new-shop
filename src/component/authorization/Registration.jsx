import React from "react";
import { Button, Form, Input } from "antd";

const register = {
  marginTop: "30px",
  textAlign: "right",
  height: "100vh",
  maxWidth: "600",
  padding: "0 20px 0 20px",
};

export default function Registration() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Form
      // {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      style={register}
      scrollToFirstError
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="password confirm"
        label="Confirm Password"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The new password that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: "Please input your phone number!",
          },
        ]}
      >
        <Input
          //   addonBefore={prefixSelector}
          style={{
            width: "100%",
          }}
        />
      </Form.Item>

      {/* <Form.Item
        name="Date of Birth"
        label="Date of Birth"
        // label="DD.MM.YY"
        rules={[
          {
            required: true,
            message: "Please enter Date of Birth!",
          },
        ]}
      >
        <Input placeholder="DD.MM.YY" />
      </Form.Item> */}

      <Form.Item
      // {...tailFormItemLayout}
      >
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
}
