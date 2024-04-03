import React from 'react'
import { useContext } from 'react'
import ShopContext from '../context/shop-context'
import { Menu } from 'antd'

export default function Category(props) {
    const { category} = useContext(ShopContext)
  return (
    // <Menu
    // mode='horizontal'
    // // items={category}
    // >
      <div>{category.map(el=>(
          <div key={el.key} 
          onClick={()=>props.chooseCategory(el.key)}
          >
            {el.label}</div>
      ))}</div>
      
    // </Menu>
  )
}
