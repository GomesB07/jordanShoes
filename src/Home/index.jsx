import React, { useEffect, useState } from "react";
import { Skeleton } from "@mui/material";

import bannerJordan from '../assets/banner/michael-jordan.svg'
import iconBanner from '../assets/banner/iconBanner.svg'
import ProductsData from "../api/productsData";
import CardProduct from "../Components/CardProduct";

const Home = () => {
    const [shoes, setShoes] = useState()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const getShoes = async () => {
          const {data} = await ProductsData()
          setShoes(data)
          setTimeout(() => {
            setIsLoading(true)
          }, 1000)
        } 

        getShoes()
    }, [])
    

    return (
        <div className="w-screen min-h-screen pb-5">
            <div className="w-full h-auto bg-[#F3F7FF] py-[19px]">
                <h2 className="text-center font-medium text-[#121214]">Frete grátis para todo o Brasil</h2>
            </div>
            <div className="w-full h-auto min-h-[30vh] flex items-center justify-center bg-cover bg-center pt-5 pb-5" style={{backgroundImage: `url(${bannerJordan})`}}>
                <div className="w-5/6 h-auto flex flex-col gap-5">
                    <div className="flex items-center w-auto h-auto gap-2">
                        <img className="w-auto" src={iconBanner} alt="jordan-logo" />
                        <p className="font-medium text-white text-base">JordanShoes</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="font-medium text-white text-2xl">A melhor loja de Jordan</h2>
                        <p className="font-normal text-white text-base">O tênis Jordan é fruto de uma velha e forte<br />
                        parceria entre a Nike e o jogador Michael  Jordan.</p>
                    </div>
                </div>
            </div>

            <div className="w-full h-auto flex justify-center items-center flex-col mt-8 lg1165:pl32 lg1165:pr-32 lg:pl-16 lg:pr-16 md:pl-12 md:pr-12 sm:p-0 sm:w-full">
                <div className="flex flex-col items-center gap-2 mt-2.5 w-full">
                    <h2 className="font-semibold text-2xl leading-8">Os Melhores em um só lugar</h2>
                    <p className="text-center text-sm sm:text-base">A marca Jordan na JordanShoes é a escolha certa para<br /> os amantes de sneakers que buscam estilo e conforto.</p>
                </div>

                <div className="w-full h-auto flex flex-wrap justify-center gap-5 mt-8">
                    {
                        shoes && shoes.map(shoe => (
                            isLoading ? (
                                <CardProduct shoe={shoe} />
                            ) : (
                                <div className="flex flex-col">
                                    <Skeleton variant="rounded" width={280} height={160} animation="wave" />
                                    <Skeleton variant="text" />
                                    <Skeleton variant="text" width="50%"/>
                                    <Skeleton variant="text" width="50%"/>
                                </div>
                            )
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Home