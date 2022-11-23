import CartWidget from "./CartWidget";

export default function NavBar() {
    return (
        <>
            <div className="bg-green-mh">
                <div className="flex justify-around items-center py-4">
                    <div className="flex items-end">
                        <img className="w-20 h-20" src="./logo-v-w.png" alt="logo"></img>
                        <h1 className="text-white-mh text-2xl font-semibold px-2">SHOP</h1>
                    </div>
                    <div className="text-white-mh font-semibold gap-x-2.5 self-end">
                        <a className="px-2">INICIO</a>
                        <a className="px-2">PRODUCTOS</a>
                        <a className="px-2">CONTACTO</a>
                    </div>
                    <CartWidget />
                </div>
            </div>
        </>
    )
}