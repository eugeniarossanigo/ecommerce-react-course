import { Link as Linkrouter} from "react-router-dom"

export default function CartWidget() {
    return (
        <>
            <Linkrouter to={`/cart`} >
                <div className="flex self-end hover:-translate-y-2">
                    <img className="w-5 h-5" src="./shopping-bag.png" alt="cart"></img>
                    {/* http://drive.google.com/uc?export=view&id=1n8kQy_gjafUrRz48jpJg9Be6EiY81ATc */}
                    <p className="bg-white-mh text-xs rounded-xl px-1 self-center -translate-x-2 -translate-y-2">8</p>
                </div>
            </Linkrouter>
        </>
    )
}