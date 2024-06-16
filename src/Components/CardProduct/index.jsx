import React from "react";




const CardProduct = ({shoe}) => {

    console.log(shoe)


    return (
        <>
      <p>{shoe.name}</p>
      <img src={shoe.image} alt={shoe.name} />
      </>
    )
}

export default CardProduct