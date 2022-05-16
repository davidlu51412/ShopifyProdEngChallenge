import Head from "next/head";
import { useState } from "react";
import { Form, Input, Button, Space, PageHeader } from "antd";
import { FEAddLocation } from "./api/api-calls";

export default function AddLocation() {
  const [location, setLocation] = useState("");

  const changeItem = (value) => {
    setLocation(value);
  };

  async function updateToDatabase() {
    FEAddLocation(location).then(() => {
      window.location.href = "/";
    });
  }

  return (
    <>
      <Head>
        <title>Add Warehouse Location</title>
      </Head>

      <PageHeader
        ghost={false}
        title="Add Warehouse Location"
        subTitle="This is page will help you add a warehouse location!"
      >
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
        >
          <Form.Item label="Location Address">
            <Input onChange={(e) => changeItem(e.target.value)} />
          </Form.Item>
        </Form>
        <Space>
          <a href="/">
            <Button>Cancel</Button>
          </a>
          <Button type="primary" onClick={updateToDatabase}>
            Done
          </Button>
        </Space>
      </PageHeader>
    </>
  );
}
