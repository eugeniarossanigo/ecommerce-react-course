import { useState, useEffect } from "react"

export default function ItemCount({stock, initial}) {
    const [count, setCount] = useState(initial)
    
    const handlerAdd = () =>{
        if (count < stock) {
            setCount(count+1)
        }
    }

    const handlerRemove = () =>{
        if (count > 0) {
            setCount(count-1)
        }
    }

    return (
        <>
            <div className="w-[8rem] text-xl flex justify-between font-bold uppercase">
                <button onClick={handlerRemove} className="btn bg-green-mh rounded-lg text-white-mh px-4">-</button>
                <p className="btn">{count}</p>
                <button onClick={handlerAdd} className="btn bg-green-mh rounded-lg text-white-mh px-4">+</button>
            </div>
        </>
    )
}