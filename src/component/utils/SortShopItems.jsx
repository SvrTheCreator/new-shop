import React, { useContext } from "react";
import {
  CaretUpOutlined,
  CaretDownOutlined,
  FilterOutlined,
} from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import ShopContext from "../../context/shop-context";

const sortShop = {
  paddingBottom: "30px",
  cursor: "pointer",
  margin: "0% auto",
  maxWidth: "70%",
  width: "100vw",
};

export default function SortShopItems() {
  const { currentItems, setCurrentItems } = useContext(ShopContext);

  const sortDataUpPrice = () => {
    setCurrentItems([...currentItems.sort((a, b) => b.price - a.price)]);
    console.log("up");
  };
  const sortDataDownPrice = () => {
    setCurrentItems([...currentItems.sort((a, b) => a.price - b.price)]);
    console.log("down");
  };

  const items = [
    {
      label: (
        <div onClick={sortDataUpPrice}>
          price
          <CaretUpOutlined />
        </div>
      ),
      key: "sort-up",
    },
    {
      label: (
        <div onClick={sortDataDownPrice}>
          price
          <CaretDownOutlined />
        </div>
      ),
      key: "sort-down",
    },
    {
      type: "divider",
    },
  ];

  return (
    <Dropdown
      menu={{
        items,
      }}
    >
      <Space style={sortShop}>
        Sort
        <FilterOutlined />
      </Space>
    </Dropdown>
  );
}
