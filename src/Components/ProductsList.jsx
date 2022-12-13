// export default function ProductsList(){
//     const [products, setProducts] = useState([])

//     useEffect(() => {
//         getProducts().then(res => {
//             console.log(res)
//             setProducts(res)
//         })
//     }, [])

//     const getProducts = () => {
//         return new Promise((res, rej) => {
//             setTimeout(() => {
//                 res(allProducts)
//             }, 3000);
//         })
//     }

//     // const getProducts = () => {
//     //     const newPromise = new Promise((res, rej) => {
//     //         res('ok, resuelta')
//     //         rej('noouuuu')
//     //     })
//     //     newPromise.then((res) => {
//     //         console.log(res)
//     //     }).catch((err) => {
//     //         console.log(err)
//     //     })
//     // }
    
//     return (
//         <>
//             <div>PRODUCT LIST</div>
//             <div className="w-4/5 flex justify-center flex-wrap pt-10 gap-10">
//                 {products.map(product => <Item product={product} />)}
//             </div>
//         </>
//     )
// }