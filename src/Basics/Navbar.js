import React from 'react'

function Navbar({filterItem, menuList}) {
  return (
    <div>
        <nav className="navbar">
            <div className="btn-group">
                

            {
              menuList.map((current) =>{
                return (
                  <button className="btn-group__item" onClick={()=>filterItem(current)}>{current}</button>
            
                );
              })
            }
            </div>
        </nav>


    </div>
  )
}

export default Navbar