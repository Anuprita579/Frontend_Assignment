import {IMG_CDN_URL} from "../config"; 

const RestaurantList = ({cloudinaryImageId, name, cuisines, avgRating}) => {
    return(
        <>
            <div className="food-card">
                <img src={IMG_CDN_URL + cloudinaryImageId} />
                <h2 className="truncate">{name}</h2>
                <p className="truncate">{cuisines.join(", ")}</p>
                <h3> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Green_star_41-108-41.svg/2153px-Green_star_41-108-41.svg.pg"/>  {avgRating} </h3>
                
            </div>  
        </>
    )
}
export default RestaurantList;