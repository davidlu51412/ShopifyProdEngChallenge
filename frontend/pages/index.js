import Head from "next/head";
import { PageHeader, Button, Space, Table, Modal } from "antd";
import {
  FEGetAllItems,
  FEGetAllLocations,
  FEDeleteItem,
} from "./api/api-calls";
import { useState } from "react";
export async function getStaticProps() {
  const allItems = await FEGetAllItems();

  const locationData = await FEGetAllLocations();

  allItems.forEach((item) => {
    item["weather"] = locationData[item.location].weather;
  });

  return {
    props: { allItems: allItems, locations: Object.keys(locationData) }, // will be passed to the page component as props
  };
}

export default function Home({ allItems, locations }) {
  const [itemDisplay, setItemDisplay] = useState(allItems);
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
        return (
          <Space size="middle">
            <a href={`/edit?itemID=${record.itemID}`}>Edit</a>
            <Button
              danger
              onClick={() =>
                FEDeleteItem(record.itemID).then(() => {
                  const newItemDisplay = [...itemDisplay];
                  newItemDisplay.splice(i, 1);
                  setItemDisplay(newItemDisplay);
                })
              }
            >
              Delete{" "}
            </Button>
          </Space>
        );
      },
    },
  ];

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

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
          <Button type="primary" onClick={showModal}>
            Show Warehouse Locations
          </Button>,
          <a href="/add-location">
            <Button type="primary">+ Add Warehouse Location</Button>
          </a>,
        ]}
      >
        <Table dataSource={itemDisplay} columns={columns} />;
      </PageHeader>

      <Modal
        title="Warehouse Locations"
        visible={isModalVisible}
        footer={null}
        onCancel={handleCancel}
      >
        {locations && locations.map((loc) => <p>{loc}</p>)}
      </Modal>
    </>
  );
}
