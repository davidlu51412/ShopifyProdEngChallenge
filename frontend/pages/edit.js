import { useRouter } from "next/router";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Form, Input, Button, Select, PageHeader, Space } from "antd";
import { FEGetAllLocations, FEGetItem, FEUpdateItem } from "./api/api-calls";

export async function getStaticProps() {
  const locationData = await FEGetAllLocations();
  const locations = Object.keys(locationData);
  return {
    props: { locations: locations }, // will be passed to the page component as props
  };
}
export default function Edit({ locations }) {
  const router = useRouter();
  const { itemID } = router.query;
  const [itemInfo, setItemInfo] = useState(null);

  if (itemID !== null && itemInfo == null) {
    FEGetItem(itemID).then((data) => {
      setItemInfo(data);
    });
  }

  const changeItem = (key, value) => {
    const newItem = { ...itemInfo };
    newItem[key] = value;
    setItemInfo(newItem);
  };

  async function updateToDatabase() {
    FEUpdateItem(itemID, { ...itemInfo }).then(() => {
      window.location.href = "/";
    });
  }

  return (
    <>
      <Head>
        <title>Edit Item</title>
      </Head>

      <PageHeader
        ghost={false}
        title="Edit Item"
        subTitle="This is page will help you edit items!"
      >
        {itemInfo != null && (
          <>
            <Form
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 14 }}
              layout="horizontal"
            >
              <Form.Item label="Item Title">
                <Input
                  defaultValue={itemInfo.title}
                  onChange={(e) => changeItem("title", e.target.value)}
                />
              </Form.Item>
              <Form.Item label="Item Description">
                <Input
                  defaultValue={itemInfo.description}
                  onChange={(e) => changeItem("description", e.target.value)}
                />
              </Form.Item>
              <Form.Item label="Item Location">
                <Select
                  defaultValue={itemInfo.location}
                  onChange={(e) => changeItem("location", e)}
                >
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
