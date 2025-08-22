import { Button, Input, Modal, Form, type FormProps } from "antd";
import { memo, useState } from "react";

type FieldType = {
  username?: string;
  password?: string;
  address?: string;
};

const Lorem = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
    handleCancel()
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };


  return (
    <div className="container mx-auto">
      <h2>Lorem</h2>
      <Button onClick={showModal}>See more</Button>
      <Button type="primary">See more</Button>
      <Button type="text">See more</Button>
      <Input placeholder="Search..." />

      <Modal
        title="Login Form"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
        centered
      >
        <Form
          name="basic"
          layout="vertical"
          initialValues={{}}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Ismingiz"
            name="username"
            rules={[{ required: true, message: "Ismingizni kiriting!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item<FieldType>
            label="Manzil"
            name="address"
            rules={[{ required: false, message: "Please input your password!" }]}
          >
            <Input />
          </Form.Item>


          <Form.Item label={null}>
            <Button className="w-full" type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default memo(Lorem);
