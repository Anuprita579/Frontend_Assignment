import React from "react";
import ReactDOM  from "react-dom/client";
import foodvista_logo from "/public/resources/foodvista_logo.png";

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
    },
    {
        "info": 
        {
            "id": "124510",
            "name": "Dadi Ka Khazana",
            "cloudinaryImageId": "oi1jjmbplrq20laffynk",
            "locality": "thane west",
            "areaName": "Thane Hiranandani",
            "costForTwo": "₹250 for two",
            "cuisines": [
              "North Indian",
              "Rajasthani",
              "Thalis",
              "Home Food",
              "Healthy Food",
              "Biryani"
            ],
            "avgRating": 4.1,
            "veg": true,
            "feeDetails": {
              "restaurantId": "124510",
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
            "parentId": "6958",
            "avgRatingString": "4.1",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 25,
              "lastMileTravel": 0.8,
              "serviceability": "SERVICEABLE",
              "slaString": "25 mins",
              "lastMileTravelString": "0.8 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-12-17 15:30:00",
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
            "aggregatedDiscountInfoV3": {
              "header": "20% OFF",
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
            "id": "299968",
            "name": "Bala Dosa Plaza",
            "cloudinaryImageId": "co6lvkimournlhxktdj3",
            "locality": "Tulsidham Road",
            "areaName": "Tulsi Dham",
            "costForTwo": "₹200 for two",
            "cuisines": [
              "South Indian"
            ],
            "avgRating": 4.6,
            "veg": true,
            "feeDetails": {
              "restaurantId": "299968",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 6000
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 6000
            },
            "parentId": "40486",
            "avgRatingString": "4.6",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 23,
              "lastMileTravel": 5,
              "serviceability": "SERVICEABLE",
              "slaString": "23 mins",
              "lastMileTravelString": "5.0 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-12-17 14:00:00",
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
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                      }
                    }
                  ]
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
            "restaurantOfferPresentationInfo": {
              
            }
        }
    },
    {
        "info": 
        {
            "id": "562872",
            "name": "Taco Bell",
            "cloudinaryImageId": "d3b3db238b6448c3f297c851e9d0b96b",
            "locality": "Thane West",
            "areaName": "Thane West",
            "costForTwo": "₹300 for two",
            "cuisines": [
              "Mexican"
            ],
            "avgRating": 4.1,
            "feeDetails": {
              "restaurantId": "562872",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 4400
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 4400
            },
            "parentId": "1557",
            "avgRatingString": "4.1",
            "totalRatingsString": "1K+",
            "promoted": true,
            "adTrackingId": "cid=9817359~p=3~eid=0000018c-764b-471e-2ff0-0cfc0093034c~srvts=1702791694110~45995",
            "sla": {
              "deliveryTime": 27,
              "lastMileTravel": 2.3,
              "serviceability": "SERVICEABLE",
              "slaString": "27 mins",
              "lastMileTravelString": "2.3 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-12-18 02:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
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
            "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "UPTO ₹100"
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
            "id": "487628",
            "name": "Poetry By Love & Cheesecake",
            "cloudinaryImageId": "d63c7c51ff0962f22d30957ba3f1ff74",
            "locality": "Hiranandani Estate",
            "areaName": "Hiranandani Estate",
            "costForTwo": "₹900 for two",
            "cuisines": [
              "Desserts"
            ],
            "avgRating": 4.4,
            "feeDetails": {
              "restaurantId": "487628",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 4400
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 4400
            },
            "parentId": "11330",
            "avgRatingString": "4.4",
            "totalRatingsString": "100+",
            "sla": {
              "deliveryTime": 26,
              "lastMileTravel": 2.3,
              "serviceability": "SERVICEABLE",
              "slaString": "26 mins",
              "lastMileTravelString": "2.3 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-12-17 23:30:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "v1669879258/GFF_logo_new_xbycg6.png",
                  "description": "gourmet"
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
                        "description": "gourmet",
                        "imageId": "v1669879258/GFF_logo_new_xbycg6.png"
                      }
                    }
                  ]
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
            "restaurantOfferPresentationInfo": {
              
            }
        }
    },
    {
        "info": 
        {
            "id": "379826",
            "name": "Gaurav Sweets and Namkeen",
            "cloudinaryImageId": "a4ab60c4539d2cccfda10ab2f9359bcf",
            "locality": "Wagbil Road",
            "areaName": "Waghbil",
            "costForTwo": "₹200 for two",
            "cuisines": [
              "Desserts",
              "Sweets"
            ],
            "avgRating": 4.5,
            "veg": true,
            "feeDetails": {
              "restaurantId": "379826",
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
            "parentId": "86624",
            "avgRatingString": "4.5",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 13,
              "lastMileTravel": 0.8,
              "serviceability": "SERVICEABLE",
              "slaString": "13 mins",
              "lastMileTravelString": "0.8 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-12-17 21:30:00",
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
        }
    },
    {
        "info": 
        {
            "id": "236178",
            "name": "Swamy - South Indian Food Express",
            "cloudinaryImageId": "mt6mhfey6rita3fpss9b",
            "locality": "Next To Hakone",
            "areaName": "Thane Hiranandani Estate",
            "costForTwo": "₹150 for two",
            "cuisines": [
              "Indian",
              "South Indian"
            ],
            "avgRating": 4.3,
            "feeDetails": {
              "restaurantId": "236178",
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
            "parentId": "22054",
            "avgRatingString": "4.3",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 22,
              "lastMileTravel": 2.1,
              "serviceability": "SERVICEABLE",
              "slaString": "22 mins",
              "lastMileTravelString": "2.1 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-12-17 22:00:00",
              "opened": true
            },
            "badges": {
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
                "textExtendedBadges": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "shortDescription": "options available",
                        "fontColor": "#7E808C",
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "description": ""
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "imageBased": {
                  
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
        }
    },
    {
        "info": 
        {
            "id": "10002",
            "name": "Subway",
            "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
            "locality": "Hypercity, Thane(W)",
            "areaName": "Thane Hiranandani Estate",
            "costForTwo": "₹350 for two",
            "cuisines": [
              "Salads",
              "Snacks",
              "Desserts",
              "Beverages"
            ],
            "avgRating": 4.2,
            "feeDetails": {
              "restaurantId": "10002",
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
            "parentId": "2",
            "avgRatingString": "4.2",
            "totalRatingsString": "10K+",
            "promoted": true,
            "adTrackingId": "cid=9981816~p=4~eid=0000018c-764b-471e-2ff0-0cfd0093044a~srvts=1702791694110~45995",
            "sla": {
              "deliveryTime": 19,
              "lastMileTravel": 1.9,
              "serviceability": "SERVICEABLE",
              "slaString": "19 mins",
              "lastMileTravelString": "1.9 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-12-17 23:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
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
            "aggregatedDiscountInfoV3": {
              "header": "40% OFF",
              "subHeader": "UPTO ₹80"
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
            "id": "389789",
            "name": "Praja Snacks Veg",
            "cloudinaryImageId": "76a81538ebefd44b392c2e33e0328670",
            "locality": "Majiwada",
            "areaName": "Thane West",
            "costForTwo": "₹100 for two",
            "cuisines": [
              "South Indian",
              "Maharashtrian",
              "Fast Food",
              "Street Food",
              "Snacks"
            ],
            "avgRating": 4.1,
            "veg": true,
            "feeDetails": {
              "restaurantId": "389789",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 7300
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 7300
            },
            "parentId": "252881",
            "avgRatingString": "4.1",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 28,
              "lastMileTravel": 6,
              "serviceability": "SERVICEABLE",
              "slaString": "28 mins",
              "lastMileTravelString": "6.0 km",
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
              ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {
              
            },
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
            "id": "41581",
            "name": "Hangout Cakes & More",
            "cloudinaryImageId": "ea4af98c511f7f4fd2f860cb10d67d2b",
            "locality": "Opposite Shri Maa School, Patlipada",
            "areaName": "Thane Hiranandani Estate",
            "costForTwo": "₹150 for two",
            "cuisines": [
              "Desserts",
              "Bakery"
            ],
            "avgRating": 4.3,
            "veg": true,
            "feeDetails": {
              "restaurantId": "41581",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 5700
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 5700
            },
            "parentId": "4508",
            "avgRatingString": "4.3",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 19,
              "lastMileTravel": 3.8,
              "serviceability": "SERVICEABLE",
              "slaString": "19 mins",
              "lastMileTravelString": "3.8 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-12-17 23:59:00",
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
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                      }
                    }
                  ]
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹120"
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
            "id": "746229",
            "name": "Punjab Sind Premium Dairy",
            "cloudinaryImageId": "1aa2148e2a8abd14b7a21fe239685d5b",
            "locality": "Silverlink Chs Ltd",
            "areaName": "Thane",
            "costForTwo": "₹300 for two",
            "cuisines": [
              "Beverages"
            ],
            "avgRating": 4.7,
            "veg": true,
            "feeDetails": {
              "restaurantId": "746229",
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
            "parentId": "415074",
            "avgRatingString": "4.7",
            "totalRatingsString": "20+",
            "sla": {
              "deliveryTime": 17,
              "lastMileTravel": 2.6,
              "serviceability": "SERVICEABLE",
              "slaString": "17 mins",
              "lastMileTravelString": "2.6 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-12-17 21:00:00",
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