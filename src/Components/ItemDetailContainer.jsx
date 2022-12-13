import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { products } from "../Mock/products";

export default function ItemDetailContainer() {
    const { id } = useParams()
    const [item, setItem] = useState({})
    console.log(item.img)

    useEffect(() => {
        getItem().then(res => {
            setItem(res)
        })
    }, [])

    const getItem = () => {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res(products.find(p => p.id == id))
            }, 2000);
        })
    }

    return (
        <>
            <main className="min-h-[80vh] flex flex-col items-center text-dark-mh py-10">
                <ItemDetail item={item}/>
            </main>
        </>
    )
}

