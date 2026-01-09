export default function Likes({ card, closeModal }) {
    if (!card) return null
    const handleBack = (e) => {
        if (e.target === e.currentTarget) {
            closeModal()
        }
    }
    return (
        <section>
            <div onClick={handleBack} className="fixed inset-0 bg-black/60 z-50 flex justify-center items-start pt-10 overflow-auto">
                <div className="bg-white w-[500px] max-w-full p-6 rounded-xl flex flex-col relative">

                    <button
                        onClick={closeModal}
                        className="absolute top-4 right-4 text-xl"
                    >
                        ✕
                    </button>

                    <h3 className="text-xl mb-4">Корзина</h3>

                    {card.length === 0 && <p>Пусто</p>}

                    <div className="grid gap-3">
                        {card.map((item, index) => (
                            <div key={index} className="border p-3 rounded flex gap-3 items-center">
                                {item.id && <img src={item.pic} alt={item.name} className="w-16" />}
                                <div className="flex flex-col">
                                    <p className="font-medium">{item.brand}</p>
                                    <p>{item.name}</p>
                                    <p className="font-semibold">{item.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}