import React from "react";


const CardProduct = ({shoe}) => {

    
  return (
    <div className="w-[280px] h-60 cursor-pointer lg1371:w-[350px]">
      <div className="w-full h-4/6 bg-[#F3F7FF] flex items-center justify-center overflow-hidden">
        <img className="transition-transform duration-300 ease-in-out transform hover:scale-125" src={shoe.image} alt={shoe.name} />
      </div>

      <div className="w-full h-2/6 flex flex-col gap-1 py-1">
        <h2 className="font-medium text-[14px] leading-5 text-[#121214]">{shoe.name}</h2>
        <p className="text-sm leading-4 font-medium text-[#7CA2F4] hover:text-[#3e5ea3]">{shoe.group}</p>
        <h3 className="font-medium text-base leading-6 text-[#121214] mt-1">R$ {shoe.price}</h3>
      </div>
      
    </div>
  )

    
}

export default CardProduct