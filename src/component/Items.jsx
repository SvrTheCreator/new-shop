import React from "react";
import { useContext } from "react";
import ShopContext from "../context/shop-context";
import Item from "./Item";
import { Row } from "antd";
import SortShopItems from "./utils/SortShopItems";

const row = {
  margin: "0% auto",
  padding: "20px",
  maxWidth: "70%",
  width: "100vw",
  textAlign: "start",
};

export default function Items(props) {
  const { currentItems } = useContext(ShopContext);

  return (
    <div style={row}>
      <SortShopItems />
      <Row gutter={[20, 20]}>
        {currentItems.map((element) => (
          <Item key={element.id} item={element} onAdd={props.onAdd} />
        ))}
      </Row>
    </div>
  );
}
