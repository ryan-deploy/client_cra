import { Form, Button, Input } from "antd-mobile";
import { useState } from "react";

import "./login.css";
import { createUser } from "../../api/user";

export default function Login() {
  const [form] = Form.useForm<{ Email: string; VerificationCode: string }>();
  const onSubmit = () => {
    const values = form.getFieldsValue();
    createUser(values).catch((err) => {
      console.error(err);
    });
  };

  const validateMessages = {
    // eslint-disable-next-line no-template-curly-in-string
    required: "${name} is required ",
  };

  const [countdown, setCountdown] = useState(0);
  const handleSendCode = () => {
    const values = form.getFieldsValue();
    values.VerificationCode = "";
    createUser(values).catch((err) => {
      console.error(err);
    });
    if (countdown === 0) {
      setCountdown(60);
      const timer = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown === 1) clearInterval(timer);
          return prevCountdown - 1;
        });
      }, 1000);
    }
  };

  return (
    <Form
      form={form}
      validateMessages={validateMessages}
      layout="horizontal"
      style={{ "--prefix-width": "3em" }}
      footer={
        <Button onClick={onSubmit} block type="submit" color="primary">
          Login
        </Button>
      }
    >
      <Form.Item name="Email" label="Email" rules={[{ required: true }]}>
        <Input placeholder="Input your email adress" />
      </Form.Item>
      <Form.Item
        name="VerificationCode"
        label="Code"
        rules={[{ required: true }]}
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
