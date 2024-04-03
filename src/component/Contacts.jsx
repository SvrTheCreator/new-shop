import React from 'react'
import { Typography } from 'antd'
import { GithubOutlined, WhatsAppOutlined } from '@ant-design/icons'

const contacts = {
  margin: '0% auto',
  marginTop: '50px',
  marginBottom: '50px',
  maxWidth: '70%',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  gap: '20px'
}
const footerImg = {
  height: '100px',
  margin: '20px',
  cursor: 'pointer'
  
}
const contactsItem = {
  padding: '20px',
}


const { Title } = Typography

export default function Contacts() {
  return (
    <div style={contacts}>
      <Title> Our contacts</Title>
      <div>
        {/* <img 
        href='https://api.whatsapp.com/send?phone=79508641767'
        target='blank'
        style={footerImg} src={process.env.PUBLIC_URL + '/images/icon-telegram.png'} alt="" />
        <img 
        href='https://api.whatsapp.com/send?phone=79508641767'
        target='blank'
        style={footerImg} src={process.env.PUBLIC_URL + '/images/icon-whatsapp.png'} alt="" /> */}
        <a
          style={contactsItem}
          href='https://api.whatsapp.com/send?phone=79508641767'
          target='blank'
        >
          <WhatsAppOutlined style={{ fontSize: '100px' }} />
        </a>
        <a
          style={contactsItem}
          href='https://github.com/SvrTheCreator?tab=repositories'
          target='blank'
        >
          <GithubOutlined style={{ fontSize: '100px' }} />
        </a>
      </div>
    </div>
  )
}
