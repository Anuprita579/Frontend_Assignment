import {fooditem} from "../config";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link as ReactRouterLink } from "react-router-dom";
import useOnline from "../utils/useOnline";
import Banner from "./Banner";
import SectionHeader from "./SectionHeader";
import SectionA from "./SectionA";
import SectionB from "./SectionB";
import FAQ from "./FAQ";
import Feedback from "./Feedback";
import Testimonials from "./Testimonial";
import Doctors from "./Doctors";
import Hospitals from "./Hospitals";
import ContactUs from "./ContactUs";
import Footer from "./Footer";

function filterData(searchText, restaurantDisplay){
    const filterData = restaurantDisplay.filter((res)=>res?.info?.name?.toLowerCase().includes(searchText.toLowerCase()));
    return filterData;
}

const Body = () => {
    const [allRestaurant, setAllRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    const isOnline = useOnline();
    

    useEffect(()=>{
        //API call
        getRestaurants();
    }, []);

    async function getRestaurants(){
        //const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2622342&lng=72.9735531&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        //const json = await data.json();
        //console.log(json);
        //setAllRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        //setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setAllRestaurant(fooditem);
        setFilteredRestaurant(fooditem);
    }

    if (!isOnline){
        return(
            <div className='error-page'>
            <div className='error-box'>
                <h1>Offline</h1>
                <h2>Check your internet connection!</h2>
            </div>
        </div>

        )    
    }

    //Early return
    if(!allRestaurant) return null;

    //Not found
    //if(filteredRestaurant?.length === 0) return <h1>Not Found</h1>

    return (allRestaurant?.length === 0)? <Shimmer /> : (
        <>
            <Banner />
            <SectionHeader />
            <SectionA />
            <div className="flex w-full">
                <div className="w-2/3">
                    <SectionB title="Eligibility for Treatment"/>
                    <SectionB title="Preparation before Treatment"/>
                    <SectionB title="About Treatment"/>
                    <SectionB title="Post-Treatment Care"/>
                    <SectionB title="Treatment Recovery Tips"/>
                </div>
                <div className="w-1/3">
                    <Feedback />
                </div>
                
            </div>
            <FAQ />
            <Testimonials />
            <Doctors />
            <Hospitals />
            <ContactUs />
            <Footer />
        </>
    )
}
export default Body;