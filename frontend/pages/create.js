import { useRouter } from "next/router";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Form, Input, Button, Select, PageHeader, Space } from "antd";
import { FEGetAllLocations, FEAddItem } from "./api/api-calls";
const defaultItem = {
  title: "",
  description: "",
  location: "",
};
export async function getStaticProps() {
  const locationData = await FEGetAllLocations();
  const locations = Object.keys(locationData);
  return {
    props: { locations: locations }, // will be passed to the page component as props
  };
}
export default function Create({ locations }) {
  const router = useRouter();
  const { itemID } = router.query;
  const [itemInfo, setItemInfo] = useState(defaultItem);

  const changeItem = (key, value) => {
    const newItem = { ...itemInfo };
    newItem[key] = value;
    setItemInfo(newItem);
  };

  async function updateToDatabase() {
    FEAddItem({ ...itemInfo }).then(() => {
      window.location.href = "/";
    });
  }

  return (
    <>
      <Head>
        <title>Create Item</title>
      </Head>

      <PageHeader
        ghost={false}
        title="Create Item"
        subTitle="This is page will help you creaet items!"
      >
        {itemInfo != null && (
          <>
            <Form
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 14 }}
              layout="horizontal"
            >
              <Form.Item label="Item Title">
                <Input onChange={(e) => changeItem("title", e.target.value)} />
              </Form.Item>
              <Form.Item label="Item Description">
                <Input
                  onChange={(e) => changeItem("description", e.target.value)}
                />
              </Form.Item>
              <Form.Item label="Item Location">
                <Select onChange={(e) => changeItem("location", e)}>
                  {locations.map((val) => (
                    <Select.Option value={val}>{val}</Select.Option>
                  ))}
                </Select>
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
          </>
        )}
      </PageHeader>
    </>
  );
}
