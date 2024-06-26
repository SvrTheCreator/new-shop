import React from "react";
import { ShoppingOutlined, StarFilled } from "@ant-design/icons";
import { Card, Col, Image, Button, Typography } from "antd";
import { useContext } from "react";
import ShopContext from "../context/shop-context";

const { Title } = Typography;
const item = {
  height: "100%",
  width: "100%",
  textAlign: "-webkit-center",
};
const styleImage = {
  height: "100px",
  width: "100px",
  marginBottom: "20px",
  cursor: "pointer",
};
const fromItemsLayout = {
  xs: {
    span: 24,
  },
  sm: {
    span: 24,
  },
  md: {
    span: 12,
  },
  lg: {
    span: 12,
  },
  xl: {
    span: 8,
  },
  xxl: {
    span: 8,
  },
};

export default function Item(props) {
  const { currentItems, onShowItem } = useContext(ShopContext);
  return (
    <Col {...fromItemsLayout}>
      <Card style={item}>
        <Image
          onClick={() => onShowItem(props.item)}
          style={styleImage}
          preview={false}
          src={props.item.image}
        />
        <Card>
          <p style={{ fontWeight: "bold", fontSize: "18px" }}>
            {props.item.title}
          </p>
          <Title level={4}>Price: {props.item.price}$</Title>
          <Title
            level={5}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "20px",
            }}
          >
            {props.item.rating.rate}
            <StarFilled style={{ color: "orange" }} />
          </Title>
        </Card>
        {/* <p>
          <Button
            style={{ color: "#3f8600", marginTop: "20px" }}
            type="text"
            size="large"
            onClick={() => props.addToShoppingCart(props.item)}
          >
            <ShoppingOutlined style={{ fontSize: "25px" }} />
            Add
          </Button>
        </p> */}
      </Card>
    </Col>
  );
}

