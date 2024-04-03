import React from 'react'
import { useContext } from 'react'
import ShopContext from '../context/shop-context'
import Item from './Item'
import { Row } from 'antd'
import { render } from '@testing-library/react'

const row = {
    margin: '0% auto',
    marginTop: '50px',
    marginBottom: '50px',
    maxWidth: '70%',
    width: '100vw',
    textAlign: 'center',
  }

export default function Items(props) {
    const { 
      // data
      currentItems
      } = useContext(ShopContext)
    // const allItems = data
    
    

  return(
    
    <div>
        <Row style={row} gutter={[5, 5]}>
            {currentItems.map(element=>(
                <Item 
                 key={element.id} 
                 item={element}
                 onAdd={props.onAdd}
                 />
            ))}
        </Row>
    </div> 
    )
}

