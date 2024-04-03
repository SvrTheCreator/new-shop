import React from 'react'
import { Card, Col, Image, Button,Typography} from 'antd'
import { DeleteOutlined } from "@ant-design/icons";
// import { useContext } from 'react'
// import ShopContext from '../context/shop-context'
const { Title } = Typography;
const item = {
    minWidth: '100%',
    marginBottom:'15px'
  }
  const styleImage = {
    height: '50px',
    width: '50px',
    marginBottom: '20px'
  }

export default function Order(props) {
    // const { shoppingCart,setShoppingCart } = useContext(ShopContext)

// const removeFromCart = (id) => {
//     let del = shoppingCart.filter((e) => e.id !== id);
//     setShoppingCart(del);
// };

  return (
    <Col style={item} span={12}>
      <Card  >
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'10px'}}>
          <Image style={styleImage} preview={false} src={props.item.image}/>
          <p style={{ fontWeight: 'bold', fontSize: '12px', }}>{props.item.title}</p>
        </div>
        <Card>
        <Title level={5}>price: {props.item.price}$</Title>
        </Card>
        <Button style={{marginTop:'20px'}} title="Delete from cart" danger onClick={() => props.onDel(props.item.id)}>
            <DeleteOutlined />
        </Button>
      </Card>
    </Col>
  )
}
