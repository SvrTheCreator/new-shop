import { Header } from "antd/es/layout/layout";
import React, { useState } from "react";
import { Menu, Modal, Typography, Button, Drawer, Space } from "antd";
import { MenuOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { useContext } from "react";
import ShopContext from "../../context/shop-context";
import Order from "../Order";
import TotalPriceCart from "../utils/TotalPriceCart";

const headerStyle = {
  height: "100%",
  width: "100%",
  backgroundColor: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  position: "sticky",
  top: "0",
  zIndex: "5",
};
const { Title } = Typography;

export default function AppHeader(props) {
  const {
    shoppingCart,
    data,
    category,
    isModalCartOpen,
    handleOk,
    handleCancel,
    setCurrentItems,
  } = useContext(ShopContext);
  const [open, setOpen] = useState(false);

  const showCart = () => {
    return (
      <div>
        {shoppingCart.map((el) => (
          <Order onDel={props.onDel} key={el.id} item={el} />
        ))}
        <TotalPriceCart argument={shoppingCart} />
      </div>
    );
  };
  const showNothing = () => {
    return <Title level={3}>Start shopping</Title>;
  };
  const onClickMenu = (category) => {
    if (category.key === "all") {
      setCurrentItems([...data]);
      return;
    }
    setCurrentItems([...data.filter((el) => el.category === category.key)]);
  };
  const onClickMenuBurger = (category) => {
    if (category.key === "all") {
      setCurrentItems([...data]);
      setOpen(false);
      return;
    }
    setCurrentItems([...data.filter((el) => el.category === category.key)]);
    setOpen(false);
  };
  const showDrawer = () => {
    setOpen(true);
  };
  const onCloseDrawer = () => {
    setOpen(false);
  };

  return (
    <Header style={headerStyle}>
      <div className="burger-menu">
        <Space>
          <Button type="default" onClick={showDrawer}>
            <MenuOutlined />
          </Button>
        </Space>
        <Drawer
          placement="left"
          closable={false}
          onClose={onCloseDrawer}
          open={open}
        >
          <Menu
            onClick={onClickMenuBurger}
            disabledOverflow={true}
            mode="vertical"
            items={category}
          />
          <Button style={{ marginLeft: "20px" }} onClick={onCloseDrawer}>
            <CloseCircleOutlined />
          </Button>
        </Drawer>
      </div>
      <Modal
        okText={"Buy"}
        style={{
          textAlign: "center",
          alignItems: "center",
        }}
        title="Your cart"
        open={isModalCartOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelButtonProps={{ style: { display: "none" } }}
      >
        {shoppingCart.length > 0 ? showCart(shoppingCart) : showNothing()}
      </Modal>
      <Menu
        className="header-menu"
        onClick={onClickMenu}
        disabledOverflow={true}
        mode="horizontal"
        items={category}
      />
    </Header>
  );
}
