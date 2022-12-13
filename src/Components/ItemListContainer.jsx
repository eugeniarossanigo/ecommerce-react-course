import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { products } from "../Mock/products"
import Item from "./Item"

export default function ItemListContainer() {
    const { id } = useParams()
    const [productsList, setProductsList] = useState([])

    useEffect(() => {
        if (id) {
            getProducts()
            .then(res => {setProductsList(res.filter(p => p.category === id))})
            .catch(error => console.error(error))
        } else {
            getProducts()
            .then(res => {setProductsList(res)})
            .catch(error => console.error(error))
        }
        return () => setProductsList([])
    }, [id])

    const getProducts = () => {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res(products)
            }, 3000);
        })
    }
   
    return (
        <>
            <main className="min-h-[80vh] flex flex-col items-center text-dark-mh py-10">
                <div className="w-4/5 flex justify-center flex-wrap pt-10 gap-10">
                    {productsList.map(product => <Item key={product.id} product={product} />)}
                </div>
            </main>
        </>
    )
}