import { Header } from 'antd/es/layout/layout'
import React from 'react'
import { Menu, Button,Modal,Typography } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { useState,useContext } from 'react'
import ShopContext from "../../context/shop-context"
import Order from '../Order'
import TotalPriceCart from '../../utils'
import ContactsNav from '../Contacts'
import { Routes, Route } from 'react-router-dom'

const headerStyle = {
  height: '100%',
  width: '100%',
  backgroundColor: 'white',
  display: 'flex',
  // justifyContent: 'space-between',
  justifyContent: 'space-around',
  alignItems: 'center',
  position: 'sticky',
  top: '0',
  zIndex: '5',
}
const { Title } = Typography;


export default function AppHeader(props) {
  const { shoppingCart,data,
    category,
    isModalOpen,
    handleOk,
    handleCancel,
    setCurrentItems
  } = useContext(ShopContext)


  const showCart = () =>{
    return (
      <div>
        {shoppingCart.map(el =>(
      <Order onDel={props.onDel} key={el.id} item={el}/>
        ))}
        <TotalPriceCart argument={shoppingCart}/>
      </div>
    )
  }
  const showNothing = () =>{
    return <Title level={3}>Start shopping</Title>
  }
  const onClickMenu = (category) => { 
    if(category.key === 'all'){
      setCurrentItems([...data])
      return
    }
    setCurrentItems([...data.filter(el=>el.category===category.key)
    ])
  };


  return (
    <Header   style={headerStyle}>
      <Modal 
      style={{textAlign:'center',
      alignItems:'center'}} 
      title="Your cart" 
      open={isModalOpen} 
      onOk={handleOk} 
      onCancel={handleCancel}>
        {shoppingCart.length >0 ?
        showCart(shoppingCart): showNothing()}
      </Modal>
      <Menu
      onClick={onClickMenu} 
      // selectedKeys={[current]}
        disabledOverflow={true}
        mode='horizontal'
        items={category}
      />
    </Header>
  )
}
