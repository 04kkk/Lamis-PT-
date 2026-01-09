import Insta from "../../assets/Footer/insta.svg"
import Tg from "../../assets/Footer/tg.svg"
import Yt from "../../assets/Footer/yt.svg"


export default function Footer() {
    return (
        <footer className="footer bg-[#272B2B] mt-50 " >
            <div className="container   max-w-313 mx-auto ">
                <div className="footer__content pt-24 ">
                    <div className="footer__main flex  justify-between items-start text-white">
                        <div className="footer__lamis grid gap-3.5 ">
                            <p className=" font-bold text-[40px] " >LAMIS</p>
                            <div className="footer__social flex items-center gap-2.75 " >
                                <img src={Insta} alt="icon" />
                                <img src={Tg} alt="icon" />
                                <img src={Yt} alt="icon" />
                            </div>
                            <p className="font-medium text-[13px] " >info@lamis.kg</p>
                        </div>



                        <div className="footer__texts flex mr-26.25 gap-5 max-w-154 ">
                            <nav className=" " >
                                <p className="mb-4 text-[17px] font-bold">Продукция</p>
                                <ul className="space-y-2 text-[12px] font-medium grid gap-2.5 opacity-90">
                                    <li><a href="#">Мебель для ванны</a></li>
                                    <li><a href="#">Раковины</a></li>
                                    <li><a href="#">Ванны</a></li>
                                    <li><a href="#">Смесители</a></li>
                                    <li><a href="#">Водонагреватели</a></li>
                                    <li><a href="#">Каталоги</a></li>
                                    <li><a href="#">Сертификаты качества</a></li>
                                </ul>
                            </nav>

                            {/* ПРОФЕССИОНАЛАМ */}
                            <nav>
                                <p className="mb-4 text-[17px] font-bold">Профессионалам</p>
                                <ul className="space-y-2 grid gap-2.5 text-[12px] font-medium opacity-90">
                                    <li><a href="#">Установка мебели</a></li>
                                    <li><a href="#">Установка раковины</a></li>
                                    <li><a href="#">Установка ванн</a></li>
                                    <li><a href="#">Установка смесителей</a></li>
                                    <li><a href="#">Установка водонагревателей</a></li>
                                </ul>
                            </nav>

                            {/* ИНФОРМАЦИЯ */}
                            <nav>
                                <p className="mb-4 text-[17px] font-bold">Информация</p>
                                <ul className="space-y-2  grid gap-2.5 text-[12px] font-medium opacity-90">
                                    <li><a href="#">О нас</a></li>
                                    <li><a href="#">Где купить</a></li>
                                    <li><a href="#">Сервисный центр</a></li>
                                    <li><a href="#">Станьте нашим партнером</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="footer__bottom mt-25 " >
                        {/* <span className=" absolute h-px w-screen bg-white/10 right-1/2 translate-1/2 " /> */}
                        <span className="pointer-events-none absolute inset-x-0 h-px bg-white/10" />

                        <div className="footer__copy flex text-[#878787] justify-between py-6 text-[13px] font-medium ">
                            <a href="#" >Copyright 2025. LAMIS</a>
                            <a href="#">Политика использования файлов Cookie</a>
                            <a href="#">Политика конфиденциальности</a>
                        </div>
                        <span className="pointer-events-none absolute inset-x-0 h-px bg-white/10" />


                        <div className="footer__end text-[12px] font-medium mt-3.5 pb-5 text-[#878787] text-center ">Производитель оставляет за собой право в любой момент вносить изменения в комплектацию, дизайн и характеристики товара, не ухудшающие его качество.,<br />Актуальная информация о продукции LAMIS ® – на сайте бренда lamis.kg</div>
                    </div>
                </div>
            </div>



        </footer>
    )
}