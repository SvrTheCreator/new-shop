import { useState, useEffect, createContext, useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import {
  ShoppingCartOutlined,
  UserOutlined,
  HomeOutlined,
} from "@ant-design/icons";

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
  const [isModalCartOpen, setIsModalCartOpen] = useState(false);
  const [currentItems, setCurrentItems] = useState([]);
  const [showFullItem, setShowFullItem] = useState(false);
  const [fullItem, setFullItem] = useState({});
  const [isModalForItemOpen, setIsModaForItemlOpen] = useState(false);
  const [isModalSoloItemOpen, setIsModalSoloItemOpen] = useState(false);

  const showModalCart = () => {
    setIsModalCartOpen(true);
  };
  const handleOk = () => {
    setIsModalCartOpen(false);
  };
  const handleCancel = () => {
    setIsModalCartOpen(false);
  };
  // const deleteFromShoppingCart = (id) => {
  //   let del = shoppingCart.filter((e) => e.id !== id);
  //   setShoppingCart(del);
  // };

  // const addToShoppingCart = (item) => {
  //   let isInCart = false;
  //   shoppingCart.forEach((el) => {
  //     if (el.id === item.id) isInCart = true;
  //     setShowFullItem(!showFullItem);
  //     setIsModalSoloItemOpen(!isModalSoloItemOpen);
  //   });
  //   if (!isInCart) {
  //     setShoppingCart([item, ...shoppingCart]);
  //     setShowFullItem(!showFullItem);
  //     setIsModalSoloItemOpen(!isModalSoloItemOpen);
  //   }
  // };
  const handleCancelOnSoloItem = () => {
    setShowFullItem(!showFullItem);
    setIsModalSoloItemOpen(!isModalSoloItemOpen);
  };
  const onShowItem = (item) => {
    setFullItem(item);
    setShowFullItem(!showFullItem);
    setIsModalSoloItemOpen(!isModalSoloItemOpen);
    handleCancelOnSoloItem(!isModalSoloItemOpen);
  };

  const category = [
    {
      label: (
        <Link to="/">
          <HomeOutlined style={{ fontSize: "20px" }} />
        </Link>
      ),
      key: "/",
    },
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
          <Button onClick={showModalCart} type="default" size="large">
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
        isModalCartOpen,
        handleOk,
        handleCancel,
        category,
        currentItems,
        setCurrentItems,
        showFullItem,
        setShowFullItem,
        fullItem,
        setFullItem,
        isModalForItemOpen,
        setIsModaForItemlOpen,
        isModalSoloItemOpen,
        setIsModalSoloItemOpen,
        // deleteFromShoppingCart,
        // addToShoppingCart,
        onShowItem,
        handleCancelOnSoloItem,
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
