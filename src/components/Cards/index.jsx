import Star from "../../assets/Cards/star.svg"
import Like from "../../assets/Cards/like.svg"
import { cardsData } from "./data.js"
import { useState, useMemo } from "react"

export default function Cards({ addCard, query }) {


    const data = useMemo(() => cardsData(), []);
    const [sort, setSort] = useState('default')
    const [category, setCategory] = useState('all')
    const [color, setColor] = useState('all')
    // const [query, setQuery] = useState("");


    //сорт по цветам
    const colors = useMemo(() => {
        const set = new Set(data.map(col => col.color).filter(Boolean))
        return ['all', ...Array.from(set)]
    }, [data])

    //сорт по категориям
    const categories = useMemo(() => {
        const set = new Set(data.map(item => item.category))
        return ['all', ...Array.from(set)]
    }, [data])



    const sortedProduct = useMemo(() => {
        let arr = [...data]

        if (category !== 'all') {
            arr = arr.filter(item => item.category == category)
        }
        if (color !== 'all') {
            arr = arr.filter(item => item.color == color)
        }
        
        const p = query.trim().toLowerCase()
        if (p) {
            arr = arr.filter(item => {
                const h = `${item.name} `.toLowerCase()
                return h.includes(p)
            })
        }


        //дороже/дешевле
        if (sort === "priceAsc") arr.sort((a, b) => a.price - b.price)
        if (sort === "priceDesc") arr.sort((a, b) => b.price - a.price)
        return arr
    }, [data, sort, color, category, query])




    const [hidden, setHidden] = useState(8)
    const [liked, setLiked] = useState([])

    const handleLike = (item) => {
        if (!liked.includes(item.id)) {
            setLiked(prev => [...prev, item.id])
            addCard(item)
        }
    }

    const isLiked = (id) => liked.includes(id)

    return (
        <section className="cards" >
            <div className="container  max-w-313 mx-auto">
                <div className="cards__content">
                    <div className="cards__filters mt-12 ">
                        <div className="cards__sistems flex max-w-312.5 flex-wrap gap-3.75 ">
                            {categories.map((cat) => (
                                <div
                                    key={cat}
                                    onClick={() => setCategory(cat)}
                                    className={`font-medium text-[14px] py-1 px-6 hover:bg-[#009B3E] hover:border-white hover:text-white duration-350 cursor-pointer border border-black/15 rounded-full
      ${category === cat ? "bg-[#009B3E] border-white text-white" : ""}`}
                                >
                                    {cat === "all" ? "Все" : cat}
                                </div>
                            ))}
                        </div>
                        <div className="cards__default flex gap-3.5 mt-8 font-medium text-[14px] ">
                            {/* <p className="cards__text  py-1 px-6 hover:bg-[#009B3E] hover:border-white hover:text-white duration-350 cursor-pointer border border-black/15 rounded-full ">По умолчанию</p> */}
                            <select
                                id="sortPrice"
                                className="py-1 px-4 outline-none hover:bg-[#009B3E] hover:border-white hover:text-white duration-350 cursor-pointer border border-black/15 rounded-full"
                                onChange={(e) => setSort(e.target.value)}
                                value={sort}>
                                <option value="default">По умолчанию</option>
                                <option value="priceAsc" >Цена ↑(По возрастанию)</option>
                                <option value="priceDesc" >Цена ↓(По снижению)</option>
                            </select>
                            <select className="cards__text  py-1 px-6 hover:bg-[#009B3E] hover:border-white hover:text-white duration-350 cursor-pointer border border-black/15 rounded-full "
                                id="filteredColor"
                                value={color}
                                onChange={(e) => setColor(e.target.value)}
                            >
                                <option value="all">Цвет изделий</option>
                                {colors.filter(col => col !== 'all').map(col => (<option key={col} value={col}>{col}</option>))}

                            </select>
                        </div>
                    </div>
                    <div className="cards__blocks mt-15.25 grid grid-cols-4 gap-5 ">

                        {sortedProduct.slice(0, hidden).map((item) => (
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
                                            <p className=" font-medium text-[20px] text-[#1D1D1D]  " > {item.price} <span className="underline " > C</span> </p>
                                            {item.like && (
                                                <button onClick={() => handleLike(item)}
                                                    className={`transition ${isLiked(item.id) ? "opacity-100" : "opacity-20"} cursor-pointer `}  >
                                                    <img src={Like} alt="icon" />

                                                </button>
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
