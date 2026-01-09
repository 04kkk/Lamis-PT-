import Star from "../../assets/Cards/star.svg"
import Like from "../../assets/Cards/like.svg"

import "./data.js"
import { cardsData } from "./data.js"
import { useState } from "react"
export default function Cards() {
    const data = cardsData()
    const [hidden, setHidden] = useState(8)
    return (
        <section className="cards" >
            <div className="container  max-w-313 mx-auto">
                <div className="cards__content">
                    <div className="cards__filters mt-12 ">
                        <div className="cards__sistems flex max-w-312.5 flex-wrap gap-3.75 ">
                            {["Смесители для ванной", "Душевые системы", "Аксессуары для душа", "Смесители для кухни","Мойки","Аксессуары для кухни", "Санитарный фарфор и сиденья", "Инсталляции и клавиши", "Мебель и зеркала"].map((word) => (
                                <div 
                                    key={word}
                                    className="  font-medium text-[14px] py-1 px-6 hover:bg-[#009B3E] hover:border-white hover:text-white duration-350 cursor-pointer border border-black/15 rounded-full "
                                >
                                    {word}
                                </div>
                            ))}
                        </div>
                        <div className="cards__default flex gap-3.5 mt-8 font-medium text-[14px] ">
                            <p className="cards__text  py-1 px-6 hover:bg-[#009B3E] hover:border-white hover:text-white duration-350 cursor-pointer border border-black/15 rounded-full ">По умолчанию</p>
                            <p className="cards__text  py-1 px-6 hover:bg-[#009B3E] hover:border-white hover:text-white duration-350 cursor-pointer border border-black/15 rounded-full ">Цвет изделий</p>
                        </div>
                    </div>
                    <div className="cards__blocks mt-15.25 grid grid-cols-4 gap-5 ">

                        {data.slice(0, hidden).map((item) => (
                            <div className="cards__wrap  " key={item.id} >
                                <div className="cards__list w-full relative grid gap-8.5   ">
                                    {item.new && (

                                        <div className="cards__new absolute mt-2.5 ml-2.5 px-1.5 rounded-[25px] py-1 text-white text-[12px] font-normal gap-1.75 bg-[#E0398D] flex items-center ">
                                            <img src={Star} alt="icon" className="w-3 " />
                                            <p>Новинка</p>
                                        </div>
                                    )}
                                    <div className="cards__image flex justify-center items-center p-9.5  ">
                                        <img src={item.pic} alt="picture" className="w-55" />

                                    </div>
                                    <div className="cards__title  leading-5  ">
                                        <p className=" font-medium text-[16px] text-[#B8B8B9] " >{item.brand}</p>
                                        <p className=" font-medium text-[16px] text-[#1D1D1D] " > {item.name} </p>

                                        <div className="flex justify-between items-center " >
                                            <p className=" font-medium text-[20px] text-[#1D1D1D]  " > {item.price} </p>
                                            {item.like && (
                                                <img src={Like} alt="icon" />
                                            )}
                                        </div>


                                    </div>
                                </div>
                            </div>
                        ))}





                    </div>
                    <div className="cards__pagintation mt-15 flex item-center justify-between">
                        
                        <div className="cards__numbers flex gap-2.5 text-[14px] font-medium  ">
                            {[1, 2, 3, 4, 5].map((num) => (
                                <div
                                    key={num}
                                    className='flex w-12 h-12 items-center justify-center
                                     rounded-full border-black/50 border
                                      hover:bg-[#009B3E] hover:text-white
                                       cursor-pointer duration-350 hover:border-none '
                                >
                                    {num}
                                </div>
                            ))}
                        </div>
                        <div className="cards__more">
                            <button
                                className="  rounded-4xl px-11.75 py-3.5 font-medium text-[14px] border border-black/50 hover:bg-black duration-350 cursor-pointer hover:text-white "
                                onClick={() => setHidden(hidden === 8 ? 12 : 8)}>
                                {hidden === 8 ? "Показать еще" : "Скрыть"}
                            </button>
                        </div>
                        <div className="cards__morefix flex text-[14px] font-medium items-center cursor-pointer justify-between border border-black/50 rounded-full px-[27.5px] gap-2 py-3 duration-350 hover:bg-black hover:text-white  ">
                            <button>Показать по 12</button>
                            <input type="radio" />
                        </div>
                    </div>

                </div>

            </div>



        </section>

    )
}