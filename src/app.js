import React from "react";
import ReactDOM  from "react-dom/client";
import foodvista_logo from "./public/resources/foodvista_logo.png";

const Header = () => {
    return(
        <>
        <div className="header">
            <div className="header-left">
                <img src={foodvista_logo} />
                <h1>FoodVista</h1>
            </div>
            <div className="header-right">
                <ul className="navlist">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
        </> 
    )
}

const fooditem = [
    {
        "info": 
        {
            "id": "20170",
            "name": "The Plush",
            "cloudinaryImageId": "afjgs3yfnidekxialmcz",
            "locality": "Ghodbunder Road",
            "areaName": "Thane Hiranandani Estate",
            "costForTwo": "₹450 for two",
            "cuisines": [
                "Mughlai",
                "North Indian",
                "Chinese",
                "Seafood",
                "Malwani"
            ],
            "avgRating": 4.3,
            "feeDetails": {
                "restaurantId": "20170",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3900
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3900
            },
            "parentId": "212717",
            "avgRatingString": "4.3",
            "totalRatingsString": "10K+",
            "promoted": true,
            "adTrackingId": "cid=9993607~p=1~eid=0000018c-764b-471e-2ff0-0cfa00930176~srvts=1702791694110~45995",
            "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 1.6,
                "serviceability": "SERVICEABLE",
                "slaString": "25 mins",
                "lastMileTravelString": "1.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-17 15:45:00",
                "opened": true
            },
            "badges": {
                
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                            
                    },
                    "textExtendedBadges": {
                            
                    },
                    "textBased": {
                        
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "30% OFF",
                "subHeader": "UPTO ₹75"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {
                        
                    },
                    "video": {
                        
                    }
                }
            },
            "reviewsSummary": {
                
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
                
            }
        },    
    },
    {
        "info": 
        {
            "id": "167187",
            "name": "Hotel Vanakkam - Simply Tamilian",
            "cloudinaryImageId": "kvznnzbpaq0adrhpjkhs",
            "locality": "KENORA SHOPPING CENTRE",
            "areaName": "Thane Hiranandani Estate",
            "costForTwo": "₹300 for two",
            "cuisines": [
              "South Indian"
            ],
            "avgRating": 4.5,
            "veg": true,
            "feeDetails": {
                "restaurantId": "167187",
                "fees": [
                    {
                    "name": "BASE_DISTANCE",
                    "fee": 3900
                    },
                    {
                    "name": "BASE_TIME"
                    },
                    {
                    "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3900
            },
            "parentId": "103234",
            "avgRatingString": "4.5",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 19,
                "lastMileTravel": 2.1,
                "serviceability": "SERVICEABLE",
                "slaString": "19 mins",
                "lastMileTravelString": "2.1 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-12-17 22:30:00",
              "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                    }
                ],
                "textExtendedBadges": [
                    {
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available",
                    "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {
              
            },
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textBased": {
                
                    },
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "description": "",
                                    "shortDescription": "options available",
                                    "fontColor": "#7E808C"
                                }
                            }
                        ]
                    }
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {
                  
                    },
                    "video": {
                  
                    }
                }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
        },    
    },
    {
        "info": 
        {
            "id": "642820",
            "name": "Tamizhan T Fun",
            "cloudinaryImageId": "uja7eskejyk5fivg7psj",
            "locality": "Vartaknagar",
            "areaName": "Thane Hiranandani Estate",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "South Indian"
            ],
            "avgRating": 4.5,
            "veg": true,
            "feeDetails": {
                "restaurantId": "642820",
                "fees": [
                    {
                    "name": "BASE_DISTANCE",
                    "fee": 3900
                    },
                    {
                    "name": "BASE_TIME"
                    },
                    {
                    "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3900
            },
            "parentId": "308960",
            "avgRatingString": "4.5",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 22,
                "lastMileTravel": 2.4,
                "serviceability": "SERVICEABLE",
                "slaString": "22 mins",
                "lastMileTravelString": "2.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-17 23:55:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                            "attributes": {
                                "description": "pureveg",
                                "imageId": "v1695133679/badges/Pure_Veg111.png"
                            }
                            }
                        ]
                    },
                    "textExtendedBadges": {
                    
                    },
                    "textBased": {
                    
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {
                  
                    },
                    "video": {
                  
                    }
                }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
        },
    },
    {
        "info": 
        {
            "id": "453162",
            "name": "Veggies",
            "cloudinaryImageId": "zzx5lqt8sgafnhuttexs",
            "locality": "Thane Hiranandani Estate",
            "areaName": "Kasarvadavli",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "North Indian",
                "South Indian",
                "Pizzas",
                "Snacks",
                "Juices",
                "Desserts"
            ],
            "avgRating": 4.3,
            "veg": true,
            "feeDetails": {
              "restaurantId": "453162",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 3900
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 3900
            },
            "parentId": "222450",
            "avgRatingString": "4.3",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 23,
              "lastMileTravel": 1.7,
              "serviceability": "SERVICEABLE",
              "slaString": "23 mins",
              "lastMileTravelString": "1.7 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-12-17 23:30:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textBased": {
                  
                    },
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textExtendedBadges": {
                    
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
              "header": "30% OFF",
              "subHeader": "UPTO ₹75"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {
                    
                    },
                    "video": {
                    
                    }
                }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
        }
    },
    {
        "info": 
        {
            "id": "62567",
            "name": "Dabba Garam (Homestyle,Combo, Thali & More)",
            "cloudinaryImageId": "62f56662108b93096dfe34b1fb4db0f3",
            "locality": "Kasarvadavli",
            "areaName": "Thane",
            "costForTwo": "₹150 for two",
            "cuisines": [
              "Home Food",
              "North Indian",
              "Thalis"
            ],
            "avgRating": 4.5,
            "veg": true,
            "feeDetails": {
              "restaurantId": "62567",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 3900
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 3900
            },
            "parentId": "67608",
            "avgRatingString": "4.5",
            "totalRatingsString": "10K+",
            "promoted": true,
            "adTrackingId": "cid=9993947~p=2~eid=0000018c-764b-471e-2ff0-0cfb0093027d~srvts=1702791694110~45995",
            "sla": {
              "deliveryTime": 24,
              "lastMileTravel": 2.1,
              "serviceability": "SERVICEABLE",
              "slaString": "24 mins",
              "lastMileTravelString": "2.1 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-12-17 22:50:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "pureveg",
                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                      }
                    }
                  ]
                },
                "textExtendedBadges": {
                  
                },
                "textBased": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "15% OFF",
              "subHeader": "UPTO ₹45"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
        }
    },
    {
        "info": 
        {
            "id": "749876",
            "name": "Mani's Cafe",
            "cloudinaryImageId": "651f79094d9e4a5a4bc335cad16b28c7",
            "locality": "Tikujiniwadi Road",
            "areaName": "Thane",
            "costForTwo": "₹100 for two",
            "cuisines": [
              "South Indian"
            ],
            "avgRating": 4.4,
            "veg": true,
            "feeDetails": {
              "restaurantId": "749876",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 5000
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 5000
            },
            "parentId": "131857",
            "avgRatingString": "4.4",
            "totalRatingsString": "500+",
            "sla": {
              "deliveryTime": 23,
              "lastMileTravel": 3.9,
              "serviceability": "SERVICEABLE",
              "slaString": "23 mins",
              "lastMileTravelString": "3.9 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-12-17 22:30:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {
              
            },
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "textBased": {
                  
                },
                "imageBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "isNewlyOnboarded": true,
            "restaurantOfferPresentationInfo": {
              
            }
        }
    }
];

const RestaurantList = ({cloudinaryImageId, name, cuisines, avgRating}) => {
    return(
        <>
            <div className="food-card">
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" + cloudinaryImageId} />
                <h2 className="truncate">{name}</h2>
                <p className="truncate">{cuisines.join(", ")}</p>
                <h3> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Green_star_41-108-41.svg/2153px-Green_star_41-108-41.svg.png"/>  {avgRating} </h3>
                
            </div>  
        </>
    )
}

const Body = () => {
    return(
        <>
            <div className="food-list">
                {
                    fooditem.map((res) => {
                        return <RestaurantList {...res.info}/>
                    })
                }
                
            </div>
        </>
    )
}


const AppLayout = () => {
    return(
        <>
        <Header />
        <Body />
        
        </>
    )
}
const display = ReactDOM.createRoot(document.getElementById("root"));
display.render(<AppLayout />);