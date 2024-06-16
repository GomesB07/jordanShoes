import React, { useState } from "react";

import bannerJordan from '../assets/banner/michael-jordan.svg'
import iconBanner from '../assets/banner/iconBanner.svg'
import CardProduct from "../Components/CardProduct";

import products from '../products.json'


const Home = () => {

    const [shoes, setShoes] = useState(products)
    

    return (
        <div className="w-screen h-screen min-h-screen bg-blue-500">
            <div className="w-full h-auto bg-[#F3F7FF] py-[19px]">
                <h2 className="text-center font-medium text-[#121214]">Frete grátis para todo o Brasil</h2>
            </div>
            <div className="w-full h-2/5 bg-cover flex items-center" style={{backgroundImage: `url(${bannerJordan})`}}>
                <div className="w-full h-auto flex flex-col gap-5 pl-36">
                    <div className="flex items-center w-auto h-auto gap-2">
                        <img src={iconBanner} alt="jordan-logo" />
                        <p className="font-medium text-white text-base">JordanShoes</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="font-medium text-white text-2xl">A melhor loja de Jordan</h2>
                        <p className="font-normal text-white text-base">O tênis Jordan é fruto de uma velha e forte
                        parceria entre a Nike e o jogador Michael  Jordan.</p>
                    </div>
                </div>
            </div>

            <div className="w-full h-auto bg-green-500 flex justify-center flex-col pl-36 pr-36">
                <div className="bg-yellow-500 flex flex-col items-center gap-2 mt-2.5">
                    <h2 className="font-semibold text-2xl leading-8">Os Melhores em um só lugar</h2>
                    <p className="text-base w-[53%] text-center">A marca Jordan na JordanShoes é a escolha certa para os amantes de sneakers que buscam estilo e conforto.</p>
                </div>

                <div className="bg-red-500 w-full h-screen">
                    {
                        shoes && shoes.map(shoe => (
                            <CardProduct shoe={shoe} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Home