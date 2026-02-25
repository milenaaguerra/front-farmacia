import imgHome from "../../assets/img_home.png"

function Home() {
    return (
        <>
            <div className="bg-[#092b5a] flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Seja Bem Vindo! VIVA+
                        </h2>
                        <p className='text-xl'>
                            Cuidando da sua saúde com qualidade e confiança.
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className='rounded text-white 
                                            border-white border-solid border-2 py-2 px-4'
                                >
                                Ver Produtos
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img src={imgHome} alt="Imagem da home" className="w-96" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home