import React, { Component, useState } from 'react'
import { Menu, Segment } from 'semantic-ui-react'

export default function Header(){
  const [ activeItem, setActiveItem ] = useState("메인")
 
  const handleItemClick = (e, { name }) => {
    setActiveItem( name );
  }

  return (
    <div className="header inner">
      <Menu pointing secondary style={{innerWidth:"1024px"}}>
        <Menu.Item
          name='메인'
          active={activeItem === '메인'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='경험들'
          active={activeItem === '경험들'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='클래스'
          active={activeItem === '클래스'}
          onClick={handleItemClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item
            name='로그인'
            active={activeItem === '로그인'}
            onClick={handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    </div>
  )
}

