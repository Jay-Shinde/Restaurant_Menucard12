// rafce 
// is a shortcut to get
// react arrow functional compo. with export
import React, { useState } from 'react'
import "./style.css";
import Menu from './menuApi';
import MenuCard from './MenuCard';
import Navbar from './Navbar';

const uniquelist = [...new Set( Menu.map((current)=>{
    return current.category;
})),"all"];





const Resturant = () => {
    // const style = {color: 'blue'}
    const [menuList, setmenuList] = useState(uniquelist);
    const [menuData, setmenuData] = useState(Menu);
   
    
    
    const filterItem = (category)=>{
        const updatedList = Menu.filter((current)=>{
            if(category === "all"){return current.category;}
            else{return current.category === category;}
        });
        setmenuData(updatedList);
     };

    
  return (
    

    <div>
        {/* <h1 style={style}>hello</h1> */}
        {/* <h1 style={{color: 'red'}}>hello</h1> */}


        <Navbar filterItem = {filterItem} menuList = {menuList}/>
        <MenuCard menuData={menuData}/>
        
         



    </div>
  )
}

export default Resturant 