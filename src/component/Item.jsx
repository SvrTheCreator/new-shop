import React from 'react'
import { ShoppingOutlined } from '@ant-design/icons'
import { Card, Col, Image, Button,Typography } from 'antd'

const { Title } = Typography;
const item = {
  height: '100%',
  width: '100%',
  textAlign: '-webkit-center',
}
const styleImage = {
  height: '200px',
  width: '200px',
  marginBottom: '20px',
}


export default function Item(props) {
  return (
    <Col  span={12}>
      <Card style={item}>
        <div>
          <Image style={styleImage} preview={false} src={props.item.image} />
        </div>
        <Card>
          <p style={{ fontWeight: 'bold', fontSize: '18px' }}>{props.item.title}</p>
          <Title level={4}>price: {props.item.price}$</Title>
          <p>description: {props.item.description}</p>
          <p>
            <Button
              style={{ color: '#3f8600' }}
              type='text'
              size='large'
              onClick={()=>props.onAdd(props.item)}
            >
              <ShoppingOutlined style={{ fontSize: '25px' }} />
              Add
            </Button>
          </p>
        </Card>
      </Card>
    </Col>
  )
}
