import { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { products } from "../../Mock/products";
import { DarkModeCtx } from "../../context/DarkModeContext";

export default function ItemDetailContainer() {
    const { id } = useParams()
    const [item, setItem] = useState({})
    console.log(item.img)
    const darkMode = useContext(DarkModeCtx)

    useEffect(() => {
        getItem().then(res => {
            setItem(res)
        })
    }, [id])

    const getItem = () => {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res(products.find(p => p.id == id))
            }, 2000);
        })
    }

    return (
        <>
            <main className="min-h-[86vh] flex flex-col items-center text-dark-mh py-10">
                <ItemDetail item={item}/>
                {/* <p>{darkMode ? "light" : "dark"}</p> */}
            </main>
        </>
    )
}

