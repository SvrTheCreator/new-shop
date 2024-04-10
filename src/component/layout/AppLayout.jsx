import { Layout, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useContext } from "react";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import ShopContext from "../../context/shop-context";
import { Routes, Route } from "react-router-dom";
import AppContent from "./AppContent";
import ContactsNav from "../Contacts";
import Items from "../Items";
import Authorization from "../Authorization";
import Login from "../authorization/Login";
import Registration from "../authorization/Registration";
import ShowFullItem from "../ShowFullItem";

const layoutStyle = {
  minHeight: "100vh",
};
const contentStyle = {
  margin: "0% auto",
  maxWidth: "70%",
  width: "100vw",
  textAlign: "center",
};

export default function Applayout() {
  const {
    loading,
    showFullItem,
    fullItem,
    setShowFullItem,
    isModalSoloItemOpen,
    setIsModalSoloItemOpen,
    onShowItem,
    shoppingCart,
    setShoppingCart,
  } = useContext(ShopContext);

  if (loading) {
    return (
      <Spin
        fullscreen
        indicator={
          <LoadingOutlined
            style={{
              fontSize: 300,
            }}
            spin
          />
        }
      />
    );
  }

  const deleteFromShoppingCart = (id) => {
    let del = shoppingCart.filter((e) => e.id !== id);
    setShoppingCart(del);
  };

  const addToShoppingCart = (item) => {
    let isInCart = false;
    shoppingCart.forEach((el) => {
      if (el.id === item.id) isInCart = true;
      setShowFullItem(!showFullItem);
      setIsModalSoloItemOpen(!isModalSoloItemOpen);
    });
    if (!isInCart) {
      setShoppingCart([item, ...shoppingCart]);
      setShowFullItem(!showFullItem);
      setIsModalSoloItemOpen(!isModalSoloItemOpen);
    }
  };
  return (
    <Layout style={layoutStyle}>
      <AppHeader onDel={deleteFromShoppingCart} />
      {showFullItem && (
        <ShowFullItem
          onShowItem={onShowItem}
          onAdd={addToShoppingCart}
          item={fullItem}
        />
      )}
      <Routes style={contentStyle}>
        <Route path="/" element={<AppContent />} />
        <Route
          path="/all"
          element={<Items onShowItem={onShowItem} onAdd={addToShoppingCart} />}
        />
        <Route
          path="/man"
          element={<Items onShowItem={onShowItem} onAdd={addToShoppingCart} />}
        />
        <Route
          path="/jewelery"
          element={<Items onShowItem={onShowItem} onAdd={addToShoppingCart} />}
        />
        <Route
          path="/electronics"
          element={<Items onShowItem={onShowItem} onAdd={addToShoppingCart} />}
        />
        <Route path="/contacts" element={<ContactsNav />} />
        <Route path="/authorization" element={<Authorization />}>
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
        </Route>
      </Routes>

      <AppFooter />
    </Layout>
  );
}
