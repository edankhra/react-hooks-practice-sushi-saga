import React from "react";

function Sushi({sushi, onEatSushi}) {
 
  const {name, img_url, price, isEaten} = sushi

  function handleSushiClick(){
    if(!isEaten){
      onEatSushi(sushi)
    }else(
      alert("There must be sushi on the plate")
    )
  }
  return (
    <div className="sushi">
      <div className="plate" onClick={handleSushiClick}>
        {/* Tell me if this sushi has been eaten! */}
       
        {isEaten ? null : (
          <img src={img_url} alt={name} width="100%"/>
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
