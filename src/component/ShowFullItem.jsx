import React, { useContext } from "react";
import { ShoppingOutlined, StarFilled } from "@ant-design/icons";
import { Card, Image, Button, Typography, Col, Modal } from "antd";
import ShopContext from "../context/shop-context";
const { Title } = Typography;
const soloItem = {
  height: "100%",
  width: "100%",
  textAlign: "-webkit-center",
};
const styleImage = {
  height: "50%",
  width: "50%",
  marginBottom: "20px",
  cursor: "pointer",
};

export default function ShowFullItem(props) {
  const { isModalSoloItemOpen, handleCancelOnSoloItem } =
    useContext(ShopContext);
  return (
    <Modal
      style={{ height: "100%", width: "100%" }}
      centered={true}
      footer={null}
      open={isModalSoloItemOpen}
      onCancel={handleCancelOnSoloItem}
    >
      <Card style={soloItem}>
        <div>
          <Image
            onClick={() => props.onShowItem(props.item)}
            style={styleImage}
            preview={false}
            src={props.item.image}
          />
          {/* {console.log(props.item.image)} */}
        </div>
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
          <Title level={5}>Description: {props.item.description}</Title>
        </Card>
        <p>
          <Button
            style={{ color: "#3f8600", marginTop: "20px" }}
            type="text"
            size="large"
            onClick={() => props.onAdd(props.item)}
          >
            <ShoppingOutlined style={{ fontSize: "25px" }} />
            Add
          </Button>
        </p>
      </Card>
    </Modal>
  );
}
