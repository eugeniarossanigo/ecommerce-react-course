import { Link as Linkrouter} from "react-router-dom"

export default function ItemCard({product}) {

    return (
        <>
            <div className="w-[18rem] flex flex-col shadow-lg font-nunito rounded-lg">
                <img className="h-[10rem] self-center" src={product.img} alt="product"/>
                <div className="h-[10rem] flex flex-col items-center justify-between">
                    <h6 className="text-xs uppercase text-dark-grey pt-3">{product.type}</h6>
                    <div className="flex flex-col items-center">
                        <h4 className="text-base font-bold">{product.name}</h4>
                        <p className="text-xl font-extrabold">${product.price}</p>
                    </div>
                    <Linkrouter to={`/item/${product.id}`} className="w-full bg-green-mh text-white-mh flex justify-center p-2 rounded-b-lg font-bold uppercase">Ver detalles</Linkrouter>
                </div>
            </div>
        </>
    )
}

