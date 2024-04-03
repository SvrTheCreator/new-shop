import { Layout, Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import { useContext } from 'react'
import AppHeader from './AppHeader'
import AppFooter from './AppFooter'
import ShopContext from '../../context/shop-context'
import { Routes, Route } from 'react-router-dom'
import AppContent from './AppContent'
import ContactsNav from '../Contacts'
import Items from '../Items'


const layoutStyle = {
  minHeight: '100vh',
}
const contentStyle = {
  margin: '0% auto',
  maxWidth: '70%',
  width: '100vw',
  // minHeight: '100vh',
  textAlign: 'center',
}

export default function Applayout() {
  const { loading ,shoppingCart, setShoppingCart,
    currentItems,
    setCurrentItems,
    // category
  } = useContext(ShopContext)

  if (loading) {
    return (
      <Spin
        fullscreen
        indicator={
          <LoadingOutlined
            style={{
              fontSize: 80,
            }}
            spin
          />
        }
      />
    )
  }
  const deleteFromShoppingCart = (id) => {
    let del = shoppingCart.filter((e) => e.id !== id);
    setShoppingCart(del);
  };

  const addToShoppingCart=(item)=>{
    let isInCart = false
    shoppingCart.forEach(el=>{
      if(el.id === item.id)
      isInCart = true
    })
    if(!isInCart){
      setShoppingCart([item,...shoppingCart])
    }
  }


  return (
    <Layout style={layoutStyle}>
      <AppHeader onDel={deleteFromShoppingCart}/>
        <Routes style={contentStyle}>
            <Route path='/' element={<AppContent />} />
            <Route path='/all' element={<Items onAdd={addToShoppingCart} />}/>
            <Route path='/man' element={<Items onAdd={addToShoppingCart} />}/>
            <Route path='/jewelery' element={<Items onAdd={addToShoppingCart} />}/>
            <Route path='/electronics' element={<Items onAdd={addToShoppingCart} />}/>
            <Route path='/contacts' element={<ContactsNav />} />
        </Routes>
      <AppFooter />
    </Layout>
  )
    
}
