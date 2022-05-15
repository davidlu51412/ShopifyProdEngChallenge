import Head from "next/head";
import { useState } from "react";
import { Form, Input, Button, Select, PageHeader } from "antd";
const defaultItem = {
  title: "",
  description: "",
  location: "",
};
export async function getStaticProps() {
  const cityRes = await fetch("http://localhost:3001/cities");
  const cityData = await cityRes.json();
  const weatherRes = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?lat={40}&lon={40}&appid={9a3d21f206257e662f7dfa6c83318936}"
  );
  const weatherData = await weatherRes.json();

  return {
    props: { cities: cityData }, // will be passed to the page component as props
  };
}
export default function ImportantID({ cities }) {
  const [itemInfo, setItemInfo] = useState(defaultItem);

  const changeItem = (key, value) => {
    const newItem = { ...itemInfo };
    newItem[key] = value;
    setItemInfo(newItem);
  };

  async function updateToDatabase() {
    console.log(itemInfo);
    window.location.href = "/";
  }

  return (
    <>
      <Head>
        <title>Item Page</title>
      </Head>

      <PageHeader
        ghost={false}
        title="Create Item"
        subTitle="This is page will help you create an item!"
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
                  {cities.map((val) => (
                    <Select.Option value={val.label}>{val.label}</Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Form>
            <a href="/">
              <Button>Cancel</Button>
            </a>
            <Button onClick={updateToDatabase}>Create</Button>
          </>
        )}
      </PageHeader>
    </>
  );
}
