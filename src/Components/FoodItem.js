import {IMG_CDN_URL} from "../config"; 

const FoodItem = ({name, category, price}) => {
    return(
        <>
            <div className="m-5 p-5 text-black shadow-2xl shadow-orange-100 w-5/6">
                <h2 className="truncate">{name}</h2>
                <h3 className="flex"> {category} </h3>
                <h3 className="flex"> &#8377; {price} </h3>

            </div>  
        </>
    )
}
export default FoodItem;