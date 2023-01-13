import CartWidget from "./CartWidget";
import { Link as Linkrouter} from "react-router-dom"

export default function NavBar() {
    return (
        <>
            <div className="h-[8vh] font-poppins text-sm bg-green-mh">
                <div className="flex justify-around items-center">
                    <div className="flex items-center">
                        <img className="w-10 h-10" src="./logo-v-w.png" alt="logo"></img>
                        {/* http://drive.google.com/uc?export=view&id=1rrj_kCB5boCGur3y47m5tuqt8cqeS7vs */}
                        <h1 className="text-white-mh font-[600] text-lg px-2">TIENDA</h1>
                    </div>
                    <div className="text-white-mh font-medium gap-x-2.5 self-end">
                        <Linkrouter to="/" className="p-3 hover:bg-dark-mh rounded-xl">Inicio</Linkrouter>
                        <Linkrouter to="category/clothes" className="p-3 hover:bg-dark-mh rounded-xl">Ropa</Linkrouter>
                        <Linkrouter to="category/accessories" className="p-3 hover:bg-dark-mh rounded-xl">Accesorios</Linkrouter>
                    </div>
                    <CartWidget />
                </div>
            </div>
        </>
    )
}