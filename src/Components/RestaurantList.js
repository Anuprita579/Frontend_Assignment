import {IMG_CDN_URL} from "../config"; 

const RestaurantList = ({cloudinaryImageId, name, cuisines, avgRating}) => {
    return(
        <>
            <div className="m-5 p-5 w-60 text-black shadow-2xl shadow-orange-100 hover:scale-105">
                <img src={IMG_CDN_URL + cloudinaryImageId} className="h-40 w-full rounded-xl "/>
                <h2 className="truncate">{name}</h2>
                <p className="truncate">{cuisines.join(", ")}</p>
                <h3 className="flex"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Green_star_41-108-41.svg/2153px-Green_star_41-108-41.svg.png" className="h-5 w-5"/>  {avgRating} </h3>
                
            </div>  
        </>
    )
}
export default RestaurantList;