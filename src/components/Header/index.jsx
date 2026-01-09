import Lamis from "../../assets/Header/LAMIS 1.svg"
import Like from "../../assets/Header/like.svg"
import Search from "../../assets/Header/search.svg"

export default function Header() {
    return (
        <header className="header absolute top-0 left-0 z-50 w-full ">
            <div className="container  max-w-313 mx-auto ">
                <div className="header__content  ">
                    <div className="header__title">
                        <div className="header__title-about flex justify-between items-center ">
                            <div className="header-title-list flex gap-8 text-[13.3px] text-white/70 font-medium ">
                                <a href="#" className="header__title-links">О нас</a>
                                <a href="#" className="header__title-links">Instagram</a>
                                <a href="#" className="header__title-links">Контакты</a>
                            </div>
                            <div className="header__title-service flex bg-[#009B3E] ">
                                <a href="#" className="  px-4 py-1.75 text-[13px] font-medium text-[white] " >Сервисный центр</a>
                            </div>
                        </div>
                    </div>

                        <span className="pointer-events-none absolute inset-x-0 b-0 h-px   bg-white/25" />
                    <div className="header__main relative flex justify-between items-center py-7.25 ">


                        <div className="header__main-logo flex gap-17.25 ">
                            <img src={Lamis} alt="Lamis logo" className=" w-39.5 h-8 " />
                            <div className="header__main-list font-bold text-[14px]  flex items-center text-[white]  gap-[31.8px]  ">
                                <a href="#" className="header__main-links">Продукция</a>
                                <a href="#" className="header__main-links">Колекции</a>
                                <a href="#" className="header__main-links  ">Готовые решения</a>
                                <a href="#" className="header__main-links">Новинки</a>
                                <a href="#" className="header__main-links">Скидки</a>
                            </div>
                        </div>
                        <div className="header__main-seacrh flex items-center gap-[10.5px] ">
                            <img src={Search} alt="Search logo" className=" w-4.75 cursor-pointer " />
                            <input id="name" type="text" placeholder="Поиск" className="w-20 h-[24] text-[13px] font-medium text-white/70 outline-none " />
                            <img src={Like} alt="Search logo" className="w-4.75 cursor-pointer " />
                        </div>


                    </div>
                        <span className="pointer-events-none absolute t-0 inset-x-0 h-px bg-white/25" />

                </div>
            </div>
        </header>
    )
}