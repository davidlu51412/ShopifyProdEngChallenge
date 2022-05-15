import Head from "next/head";
import { useState } from "react";
import { PageHeader, Button, Space, Table } from "antd";
import { useCollection } from "react-firebase-hooks/firestore";

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

const dataSource = [
  {
    key: "1",
    title: "Item Title",
    itemID: "XFA3D",
    description: "this is the description",
    location: "New York City, NY",
    weather: "weather desc",
  },
];

const columns = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Item ID",
    dataIndex: "itemID",
    key: "itemID",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Location",
    dataIndex: "location",
    key: "location",
  },

  {
    title: "Weather",
    dataIndex: "weather",
    key: "weather",
  },

  {
    title: "Actions",
    dataIndex: "actions",
    key: "actions",
    render: (x, record, i) => {
      console.log(record);

      return (
        <Space size="middle">
          <a href={`/edit?itemID=${record.itemID}`}>Edit</a>
          <Button danger>Delete </Button>
        </Space>
      );
    },
  },
];

export default function Home({ cities }) {
  return (
    <>
      <Head>
        <title>Inventory App</title>
        <meta name="description" content="Inventory App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageHeader
        ghost={false}
        title="Inventory Tracker"
        subTitle="This is application will help you track items in your inventory!"
        extra={[
          <a href="/create">
            <Button>Create New Item</Button>
          </a>,
        ]}
      >
        <Table dataSource={dataSource} columns={columns} />;
      </PageHeader>
    </>
  );
}
