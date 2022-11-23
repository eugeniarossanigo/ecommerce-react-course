import CartWidget from "./CartWidget";

export default function NavBar() {
    return (
        <>
            <div className="bg-green-mh">
                <div className="flex justify-around items-center py-4">
                    <div className="flex items-end">
                        <img className="w-20 h-20" src="./logo-v-w.png" alt="logo"></img>
                        <h1 className="text-white-mh text-3xl font-semibold px-2">SHOP</h1>
                    </div>
                    <div className="text-white-mh font-medium gap-x-2.5 self-end">
                        <a className="p-3 hover:bg-dark-mh rounded-xl">INICIO</a>
                        <a className="p-3 hover:bg-dark-mh rounded-xl">PRODUCTOS</a>
                        <a className="p-3 hover:bg-dark-mh rounded-xl">CONTACTO</a>
                    </div>
                    <CartWidget />
                </div>
            </div>
        </>
    )
}