import React from "react";

function MenuCard({ menuData }) {
  return (
    <div>
      <div className="main-card--cointainer">

        {menuData.map((current) => {
          const {id, image, name, category, price, description} = current;
          return (
            <>
            <div className="card-container" key={id}>
              <div className="card">
                <div className="card-body">
                  <span className="card-number card-circle subtle">{id}</span>
                  <span className="card-author subtle"> {category}</span>
                  <h2 className="card-title">{name}</h2>
                  <span className="card-description subtle">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nobis ariatur a perferendis assumenda, natus laudantium
                    quibusdam modi alias cumque velit error illum culpa
                    inventore dolor atque autem non fugit rem animi nam harum.
                  </span>
                  <div className="card-read">Read</div>
                  
                </div>
                <img src={image} alt="image" className="card-media" />
                <span className="card-tag subtle">Order Now</span>
              </div>
            </div>
            </>
          );
        })}

      </div>
    </div>
  );
}

export default MenuCard;
