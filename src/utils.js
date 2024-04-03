import { Card, Col, Image, Button,Dropdown, Space } from 'antd'
import { ShoppingOutlined,FilterOutlined,CaretUpOutlined,CaretDownOutlined } from '@ant-design/icons'
import { Row,Typography } from 'antd'
import { useContext } from 'react'
import ShopContext from './context/shop-context'

const { Title } = Typography;

const sortShop = {
  cursor: 'pointer',
  margin: '0% auto',
  maxWidth: '70%',
  width: '100vw',
  textAlign: 'center',
}

export function SortShopItems(props) {

  const sortDataUpPrice = () =>{
    props.argument.sort((a,b)=>a.price - b.price);
    console.log('up')
  }
  const sortDataDownPrice = () =>{
    props.argument.sort((a,b)=>b.price - a.price);
    console.log('down')
  }

  const items = [
    {
      label: (
        <div
        onClick={sortDataUpPrice} 
        >
          price
          <CaretUpOutlined />
        </div>
      ),
      key: 'sort-up',
    },
    {
      label: (
        <div
        onClick={sortDataDownPrice} 
        >
          price
          <CaretDownOutlined />
        </div>
      ),
      key: 'sort-down',
    },
    {
      type: 'divider',
    },
    // {
    //   label: '3rd menu item（disabled）',
    //   key: '3',
    //   disabled: true,
    // },
  ];

  return(
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
  )
}

const totalPriceCart = {
  margin:'50px 0 50px 0px',
  display: 'flex',
  justifyContent: 'center',
}

export default function TotalPriceCart(props) {
  let getSumPrice = []
  let getCart = []
  let totalPrice = ''
  if(props.argument.length===0){
    getCart = 0
    totalPrice = `Start shopping`
  }

  if(props.argument.length>0){
   getSumPrice = props.argument.map((el)=>el.price)
   getCart = getSumPrice.reduce(
     (accumulator, currentValue) => accumulator + currentValue
   )
   totalPrice = `Your cart amount: ${getCart.toFixed(2)}$`
  }

  return (
    <>
      <Title style={totalPriceCart} level={3}>{totalPrice}</Title>
    </>
  )
}

