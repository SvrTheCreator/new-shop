import { useState, useEffect, createContext, useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";

const ShopContext = createContext({
  data: [],
  loading: false,
  shoppingCart: [],
  category: [],
  currentItems: [],
});

export function ShopContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentItems, setCurrentItems] = useState([]);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const category = [
    {
      label: <Link to="/all">All</Link>,
      key: "all",
    },
    {
      label: <Link to="/man">Man</Link>,
      key: `men's clothing`,
    },
    {
      label: <Link to="/jewelery">Jewelery</Link>,
      key: "jewelery",
    },
    {
      label: <Link to="/electronics">Electronics</Link>,
      key: "electronics",
    },
    {
      label: <Link to="/contacts">Contacts</Link>,
      key: "contacts",
    },
    {
      label: (
        <Link to="/">
          <Button onClick={showModal} type="default" size="large">
            <ShoppingCartOutlined style={{ fontSize: "20px" }} />
          </Button>
        </Link>
      ),
      key: "shopping-cart ",
    },
    {
      label: (
        <Link to="/authorization">
          <UserOutlined style={{ fontSize: "20px" }} />
        </Link>
      ),
      key: "authorization",
    },
  ];

  useEffect(() => {
    async function preload() {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products").then(
        (response) => response.json()
      );
      setData(response);
      setCurrentItems(response);
      setLoading(false);
    }
    preload();
  }, []);

  return (
    <ShopContext.Provider
      value={{
        loading,
        data,
        setData,
        shoppingCart,
        setShoppingCart,
        isModalOpen,
        handleOk,
        handleCancel,
        category,
        currentItems,
        setCurrentItems,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}

export default ShopContext;

export function useShop() {
  return useContext(ShopContext);
}
