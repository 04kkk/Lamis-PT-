import Svg from "../../assets/PageHeader/svg hero.svg"
export default function PageHeader() {


    return (
        <>
            <section className="page  ">
                <div
                    className=" relative w-full  mx-auto  min-h-100 pt-35   bg-center bg-cover bg-no-repeat  "
                    style={{ 
                        backgroundImage: `url(${Svg})`,

                     }}
                >


                    <div className="container  max-w-313 mx-auto ">
                        <div className="page__content  ">
                            <div className="page__breadcrumbs">
                                <div className="page__breadcrumbs-list flex gap-2 text-[12px] font-normal text-white ">
                                    <a href="#" className="bread__link">Главная</a>
                                    <p>→</p>
                                    <a href="#" className="bread__link">Каталог</a>
                                </div>
                            </div>
                            <h1 className="page__hero font-bold text-[64px] text-white mt-9  ">Каталог товаров</h1>
                            <div className="page_image">
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>

    )
}