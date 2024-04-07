import React, { useContext } from "react";
import {
  CaretUpOutlined,
  CaretDownOutlined,
  FilterOutlined,
  SortAscendingOutlined,
  SortDescendingOutlined,
} from "@ant-design/icons";
import { Dropdown, Space, Typography } from "antd";
import ShopContext from "../../context/shop-context";
const { Title } = Typography;

const sortShop = {
  cursor: "pointer",
  marginBottom: "20px",
};

export default function SortShopItems() {
  const { currentItems, setCurrentItems } = useContext(ShopContext);

  const sortDataUpPrice = () => {
    setCurrentItems([...currentItems.sort((a, b) => b.price - a.price)]);
  };
  const sortDataDownPrice = () => {
    setCurrentItems([...currentItems.sort((a, b) => a.price - b.price)]);
  };
  const sortDataUpRating = () => {
    setCurrentItems([
      ...currentItems.sort((a, b) => b.rating.rate - a.rating.rate),
    ]);
  };
  const sortDataDownRating = () => {
    setCurrentItems([
      ...currentItems.sort((a, b) => a.rating.rate - b.rating.rate),
    ]);
  };
  const sortDataUpAlphabetically = () => {
    setCurrentItems([
      ...currentItems.sort((a, b) => {
        if (a.title > b.title) {
          return -1;
        }
        if (a.title < b.title) {
          return 1;
        }
      }),
    ]);
  };
  const sortDataDownAlphabetically = () => {
    setCurrentItems([
      ...currentItems.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
      }),
    ]);
  };

  const items = [
    {
      label: (
        <div onClick={sortDataUpPrice}>
          Price
          <CaretUpOutlined style={{ color: "green", marginLeft: "5px" }} />
        </div>
      ),
      key: "sort-up-price",
    },
    {
      label: (
        <div onClick={sortDataDownPrice}>
          Price
          <CaretDownOutlined style={{ color: "red", marginLeft: "5px" }} />
        </div>
      ),
      key: "sort-down-price",
    },
    {
      label: (
        <div onClick={sortDataUpRating}>
          Rating
          <CaretUpOutlined style={{ color: "green", marginLeft: "5px" }} />
        </div>
      ),
      key: "sort-up-rating",
    },
    {
      label: (
        <div onClick={sortDataDownRating}>
          Rating
          <CaretDownOutlined style={{ color: "red", marginLeft: "5px" }} />
        </div>
      ),
      key: "sort-down-rating",
    },
    {
      label: (
        <div onClick={sortDataDownAlphabetically}>
          <SortDescendingOutlined style={{ color: "green" }} />
        </div>
      ),
      key: "sort-up-title",
    },
    {
      label: (
        <div onClick={sortDataUpAlphabetically}>
          <SortAscendingOutlined style={{ color: "red" }} />
        </div>
      ),
      key: "sort-down-title",
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
        <Title style={{ margin: "0" }} level={5}>
          Sort
        </Title>
        <FilterOutlined />
      </Space>
    </Dropdown>
  );
}
