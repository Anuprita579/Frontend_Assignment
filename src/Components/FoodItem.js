import { useDispatch } from "react-redux";
import {IMG_CDN_URL} from "../config"; 
import { decrementItem, incrementItem } from "../utils/cartSlice";

const FoodItem = ({id, name, category, price, quantity}) => {
    const dispatch = useDispatch();
    const handleIncrement =() =>{
        dispatch(incrementItem({id}));
    }
    const handleDecrement = () => {
        dispatch(decrementItem({id}));
    }
    return(
        <>
            <div className="m-5 p-5 text-black shadow-2xl shadow-orange-100 w-4/6 flex">
                <div className="w-60">
                    <img src={IMG_CDN_URL+id} alt="food" className="h-40 rounded-2xl w-full"/>
                </div>
                <div className="ml-10 flex flex-col justify-center">
                    <h2 className="truncate font-bold"> {name}</h2>
                    <h3 className="flex italic text-slate-600"> {category} </h3>
                    <h3 className="flex"> &#8377; {price} </h3>
                    <div className="flex border-2 border-orange-600 max-w-20">
                        <button onClick={handleIncrement} className='w-7 py-2 bg-orange-600 text-white font-bold'>+</button>
                        <h3 className="bg-white p-2">{quantity}</h3>
                        <button onClick={handleDecrement} className='w-7 py-2 bg-orange-600 text-white font-bold'>-</button>
                    </div>
                    
                </div>
            </div>  
        </>
    )
}
export default FoodItem;