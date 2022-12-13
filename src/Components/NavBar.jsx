import CartWidget from "./CartWidget";
import { Link as Linkrouter} from "react-router-dom"

export default function NavBar() {
    return (
        <>
            <div className="h-[12vh] bg-green-mh">
                <div className="flex justify-around items-center py-4">
                    <div className="flex items-end">
                        <img className="w-20 h-20" src="http://drive.google.com/uc?export=view&id=1rrj_kCB5boCGur3y47m5tuqt8cqeS7vs" alt="logo"></img>
                        <h1 className="text-white-mh text-3xl font-semibold px-2">SHOP</h1>
                    </div>
                    <div className="text-white-mh font-medium gap-x-2.5 self-end">
                        <Linkrouter to="/" className="p-3 hover:bg-dark-mh rounded-xl">INICIO</Linkrouter>
                        <Linkrouter to="category/clothes" className="p-3 hover:bg-dark-mh rounded-xl">ROPA</Linkrouter>
                        <Linkrouter to="category/accessories" className="p-3 hover:bg-dark-mh rounded-xl">ACCESORIOS</Linkrouter>
                    </div>
                    <CartWidget />
                </div>
            </div>
        </>
    )
}