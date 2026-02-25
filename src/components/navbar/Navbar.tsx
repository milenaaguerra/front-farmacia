import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-[#092b5a] text-white'>
            
                <div className="container flex justify-between text-lg mx-8">
                    <Link to='/home' className="text-2xl font-bold">VIVA+</Link>

                    <div className='flex gap-4'>
                        Produtos
                        <Link to='/categorias' className='hover:underline'>Categorias</Link>
                        <Link to='/cadastrarCategoria' className='hover:underline'>Cadastrar Categoria</Link>
                        Sair
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar