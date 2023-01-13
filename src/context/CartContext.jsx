import React from "react";

const CartCtx = React.createContext({
    items: [1, 2, 3]
})


const CartContextProvider = ({children}) => {
    const context = {
        items: [4, 5, 6]
    }

    return (
        <CartCtx.Provider value={context}>
            {children}
        </CartCtx.Provider>
    )
}

export {CartCtx}