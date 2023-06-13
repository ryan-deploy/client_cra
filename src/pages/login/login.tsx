import { Form, Button, Input } from "antd-mobile";
import { useState } from "react";

import "./login.css";

export default function Login() {
  const validateMessages = {
    // eslint-disable-next-line no-template-curly-in-string
    required: "${name} is required ",
  };

  const [countdown, setCountdown] = useState(0);
  const handleSendCode = () => {
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
      validateMessages={validateMessages}
      layout="horizontal"
      style={{ "--prefix-width": "3em" }}
      footer={
        <Button block type="submit" color="primary">
          Login
        </Button>
      }
    >
      <Form.Item name="Email" label="Email" rules={[{ required: true }]}>
        <Input placeholder="Input your email adress" />
      </Form.Item>
      <Form.Item
        name="Code"
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
