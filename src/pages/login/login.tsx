import { Form, Button, Input } from "antd-mobile";
import { useState } from "react";
import { createUser } from "../../api/user";

import "./login.css";

export default function Login() {
  const [form] = Form.useForm<{ Email: string; VerificationCode: string }>();
  const onFinish = () => {
    const values = form.getFieldsValue();
    createUser(values).catch((err) => {
      console.error(err);
    });
  };

  // 1. Validate the Email field
  // 2. Create account
  // 3. Countdown for disabled the "Send Code" button
  const [countdown, setCountdown] = useState(0);
  const handleSendCode = async () => {
    try {
      await form.validateFields(["Email"]);

      const values = form.getFieldsValue();
      values.VerificationCode = "";
      await createUser(values);

      if (countdown === 0) {
        setCountdown(60);
        const timer = setInterval(() => {
          setCountdown((prevCountdown) => {
            if (prevCountdown === 1) clearInterval(timer);
            return prevCountdown - 1;
          });
        }, 1000);
      }
    } catch (errors) {
      console.log(errors);
    }
  };

  return (
    <Form
      form={form}
      layout="horizontal"
      style={{ "--prefix-width": "3em" }}
      onFinish={onFinish}
      footer={
        <Button block type="submit" color="primary">
          Login
        </Button>
      }
    >
      <Form.Item
        name="Email"
        label="Email"
        rules={[
          {
            required: true,
            whitespace: false,
            message: "Input your email adress",
          },
        ]}
      >
        <Input placeholder="Input your email adress" />
      </Form.Item>
      <Form.Item
        name="VerificationCode"
        label="Code"
        rules={[
          {
            required: true,
            whitespace: false,
            message: "Input verification code",
          },
        ]}
        extra={
          <Button
            onClick={handleSendCode}
            className={countdown > 0 ? "disabled" : ""}
            fill="none"
            color="primary"
          >
            {countdown > 0 ? `Available after ${countdown} sec` : "Send Code"}
          </Button>
        }
      >
        <Input placeholder="Input verification code" />
      </Form.Item>
    </Form>
  );
}
