export default function CartWidget() {
    return (
        <>
            <div className="flex self-end hover:-translate-y-2">
                <img className="w-7 h-7" src="./shopping-bag.png" alt="cart"></img>
                <p className="bg-white-mh text-sm rounded-xl px-1 self-center -translate-x-3 -translate-y-3">8</p>
            </div>
        </> 
    )
}