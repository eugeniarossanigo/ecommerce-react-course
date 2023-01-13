import ItemCount from "./ItemCount";

export default function ItemDetail({item}) {

    return (
        <>
            <div key={item.id} className="w-3/5 h-[30rem] flex shadow-lg font-nunito rounded-lg">
                <img className="w-2/5 self-center" src={item.img} alt="product"/>
                <div className="w-3/5 flex flex-col items-center justify-evenly py-10">
                    <h6 className="text-xs uppercase text-dark-grey">{item.type}</h6>
                    <h4 className="text-base font-bold">{item.name}</h4>
                    <div className="flex flex-col items-center gap-3">
                        <h5 className="text-base">Stock: {item.stock}</h5>
                        <p className="text-xl font-extrabold">${item.price}</p>
                        <ItemCount stock={item.stock} initial={0}/>
                        <button className="btn border-green-mh border-2 rounded-lg px-4 py-2">Agregar</button>
                    </div>
                </div>
            </div>
        </>
    )
}

