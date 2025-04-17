
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const Header = () => {
    return (
        <div className="header">
        <div className="logo-container"> 
            <img className="logo" src="https://png.pngtree.com/png-vector/20220623/ourmid/pngtree-food-logo-png-image_5297921.png" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );  
};


const Restaurantcard = (props) => {
    const {resData} = props; 
  return(
    <div className = "res-card" style = {{ backgroundColor : "#f0f0f0"}}>
<img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId} alt="res-logo" />
        <h3>{resData.info.name}</h3>
        <h4>{(resData.info.cuisines || []).join(", ")}</h4>

        <h4>{resData.info.locality}</h4>
        <h4>{resData.info.areaName}</h4>    
        <h4>{resData.info.costForTwo}</h4>  
        <h4>{resData.info.avgRating} stars</h4>
  
               </div>
  );
};


const resList =[
   
    {

    "info": {
    "id": "215110",
    "name": "The Thali Walla",
    "cloudinaryImageId": "xlalylarxahhdpvu72nc",
    "locality": "Makarwali Road",
    "areaName": "Vaishali Nagar",
    "costForTwo": "₹250 for two",
    "cuisines": [
    "Thalis",
    "Chinese",
    "Italian",
    "North Indian",
    "Pastas",
    "Beverages",
    "Punjabi",
    "Rajasthani",
    "Thali"
    ],
    "avgRating": 4,
    "veg": true,
    "parentId": "214755",
    "avgRatingString": "4.0",
    "totalRatingsString": "898",
    "sla": {
    "deliveryTime": 23,
    "lastMileTravel": 5,
    "serviceability": "SERVICEABLE",
    "slaString": "20-25 mins",
    "lastMileTravelString": "5.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-04-17 23:30:00",
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
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹150 OFF",
    "subHeader": "ABOVE ₹349",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-be1cc38f-88a5-4f70-b320-c291d743c75d"
    },
    "cta": {
    "link": "https://www.swiggy.com/city/ajmer/the-thali-walla-makarwali-road-vaishali-nagar-rest215110",
    "type": "WEBLINK"
    }
    },

    {
    "info": {
    "id": "814926",
    "name": "Subway",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/a7270d6c-c6c6-4700-9d58-75082984178a_814926.JPG",
    "locality": "Ajmer",
    "areaName": "Mittal Mall",
    "costForTwo": "₹350 for two",
    "cuisines": [
    "sandwich",
    "Salads",
    "wrap",
    "Healthy Food"
    ],
    "avgRating": 3.8,
    "parentId": "2",
    "avgRatingString": "3.8",
    "totalRatingsString": "377",
    "sla": {
    "deliveryTime": 18,
    "lastMileTravel": 2.3,
    "serviceability": "SERVICEABLE",
    "slaString": "15-20 mins",
    "lastMileTravelString": "2.3 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-04-17 23:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "40% OFF",
    "subHeader": "UPTO ₹80"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-be1cc38f-88a5-4f70-b320-c291d743c75d"
    },
    "cta": {
    "link": "https://www.swiggy.com/city/ajmer/subway-mittal-mall-rest814926",
    "type": "WEBLINK"
    }
    },

    {
    "info": {
    "id": "490848",
    "name": "Grameen Kulfi",
    "cloudinaryImageId": "bvohaqddwlzaercuyltu",
    "locality": "Mali Mohalla",
    "areaName": "Christian Gunj Road",
    "costForTwo": "₹120 for two",
    "cuisines": [
    "Ice Cream",
    "Desserts"
    ],
    "avgRating": 4.8,
    "veg": true,
    "parentId": "12175",
    "avgRatingString": "4.8",
    "totalRatingsString": "250",
    "sla": {
    "deliveryTime": 25,
    "lastMileTravel": 5.8,
    "serviceability": "SERVICEABLE",
    "slaString": "25-30 mins",
    "lastMileTravelString": "5.8 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-04-17 23:00:00",
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
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "60% OFF",
    "subHeader": "UPTO ₹120"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-be1cc38f-88a5-4f70-b320-c291d743c75d"
    },
    "cta": {
    "link": "https://www.swiggy.com/city/ajmer/grameen-kulfi-mali-mohalla-christian-gunj-road-rest490848",
    "type": "WEBLINK"
    }
    },

    {
    "info": {
    "id": "809934",
    "name": "KFC",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/20d6c6a0-0ec1-4c51-bf94-8ab92f0b13fb_809934.JPG",
    "locality": "Arya Nagar",
    "areaName": "Soni colony",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "Burgers",
    "Fast Food",
    "Rolls & Wraps"
    ],
    "avgRating": 4,
    "parentId": "547",
    "avgRatingString": "4.0",
    "totalRatingsString": "577",
    "sla": {
    "deliveryTime": 23,
    "lastMileTravel": 4.3,
    "serviceability": "SERVICEABLE",
    "slaString": "20-25 mins",
    "lastMileTravelString": "4.3 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-04-17 23:59:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "ITEMS",
    "subHeader": "AT ₹59"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "4.1",
    "ratingCount": "267"
    },
    "source": "GOOGLE",
    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-be1cc38f-88a5-4f70-b320-c291d743c75d"
    },
    "cta": {
    "link": "https://www.swiggy.com/city/ajmer/kfc-arya-nagar-soni-colony-rest809934",
    "type": "WEBLINK"
    }
    },

    {
    "info": {
    "id": "97235",
    "name": "Domino's Pizza",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/13/437d427a-b383-4c40-9d9e-6fb65ea0da37_97235.JPG",
    "locality": "Vega The Mall",
    "areaName": "Pal Bhichala",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "Pizzas",
    "Italian",
    "Pastas",
    "Desserts"
    ],
    "avgRating": 4,
    "parentId": "2456",
    "avgRatingString": "4.0",
    "totalRatingsString": "2.0K+",
    "sla": {
    "deliveryTime": 25,
    "lastMileTravel": 2.2,
    "serviceability": "SERVICEABLE",
    "slaString": "20-25 mins",
    "lastMileTravelString": "2.2 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-04-17 23:59:00",
    "opened": true
    },
    "badges": {
    "textExtendedBadges": [
    {
    "iconId": "Ratnesh_Badges/free%20del%20icon.png",
    "shortDescription": "Free Delivery",
    "fontColor": "#7E808C"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {
    "badgeObject": [
    {
    "attributes": {
    "description": "",
    "fontColor": "#7E808C",
    "iconId": "Ratnesh_Badges/free%20del%20icon.png",
    "shortDescription": "Free Delivery"
    }
    }
    ]
    }
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "ITEMS",
    "subHeader": "AT ₹209"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-be1cc38f-88a5-4f70-b320-c291d743c75d"
    },
    "cta": {
    "link": "https://www.swiggy.com/city/ajmer/dominos-pizza-vega-the-mall-pal-bhichala-rest97235",
    "type": "WEBLINK"
    }
    },

    {
    "info": {
    "id": "552042",
    "name": "La Pino'z Pizza",
    "cloudinaryImageId": "d20fdc8c86aa8bd0638f47dd013d46f9",
    "locality": "Arya Nagar",
    "areaName": "Ana Sagar Lake",
    "costForTwo": "₹500 for two",
    "cuisines": [
    "Pizzas",
    "Pastas",
    "Italian",
    "Desserts",
    "Beverages"
    ],
    "avgRating": 4.2,
    "parentId": "4961",
    "avgRatingString": "4.2",
    "totalRatingsString": "1.4K+",
    "sla": {
    "deliveryTime": 26,
    "lastMileTravel": 4.5,
    "serviceability": "SERVICEABLE",
    "slaString": "25-30 mins",
    "lastMileTravelString": "4.5 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-04-17 23:59:00",
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
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "ITEMS",
    "subHeader": "AT ₹99"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "4.4",
    "ratingCount": "951"
    },
    "source": "GOOGLE",
    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-be1cc38f-88a5-4f70-b320-c291d743c75d"
    },
    "cta": {
    "link": "https://www.swiggy.com/city/ajmer/la-pinoz-pizza-arya-nagar-ana-sagar-lake-rest552042",
    "type": "WEBLINK"
    }
    },

    {
    "info": {
    "id": "490847",
    "name": "NIC Ice Creams",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/22/e6216002-dce3-45bf-8828-e4d895d4d4cc_490847.jpg",
    "locality": "Mali Mohalla",
    "areaName": "Ana Sagar Lake",
    "costForTwo": "₹120 for two",
    "cuisines": [
    "Ice Cream",
    "Desserts"
    ],
    "avgRating": 4.6,
    "veg": true,
    "parentId": "6249",
    "avgRatingString": "4.6",
    "totalRatingsString": "1.0K+",
    "sla": {
    "deliveryTime": 25,
    "lastMileTravel": 5.7,
    "serviceability": "SERVICEABLE",
    "slaString": "25-30 mins",
    "lastMileTravelString": "5.7 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-04-17 23:00:00",
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
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "ITEMS",
    "subHeader": "AT ₹179"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-be1cc38f-88a5-4f70-b320-c291d743c75d"
    },
    "cta": {
    "link": "https://www.swiggy.com/city/ajmer/nic-ice-creams-mali-mohalla-ana-sagar-lake-rest490847",
    "type": "WEBLINK"
    }
    },
    
    {
    "info": {
    "id": "381593",
    "name": "Taj Hotel",
    "cloudinaryImageId": "ixyyu68xtgi8ahfrjbqi",
    "locality": "Cinema Road",
    "areaName": "South Ajmer",
    "costForTwo": "₹200 for two",
    "cuisines": [
    "North Indian",
    "Biryani"
    ],
    "avgRating": 3.7,
    "parentId": "21656",
    "avgRatingString": "3.7",
    "totalRatingsString": "606",
    "sla": {
    "deliveryTime": 14,
    "lastMileTravel": 1.5,
    "serviceability": "SERVICEABLE",
    "slaString": "10-15 mins",
    "lastMileTravelString": "1.5 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-04-17 23:59:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "bolt/bolt%206.png",
    "description": "bolt!"
    }
    ],
    "textExtendedBadges": [
    {
    "iconId": "Akash/Listing%20badge.png",
    "shortDescription": "Price Match Promise",
    "fontColor": "#7E808C"
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
    "description": "bolt!",
    "imageId": "bolt/bolt%206.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {
    "badgeObject": [
    {
    "attributes": {
    "description": "",
    "fontColor": "#7E808C",
    "iconId": "Akash/Listing%20badge.png",
    "shortDescription": "Price Match Promise"
    }
    }
    ]
    }
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "ITEMS",
    "subHeader": "AT ₹59"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-be1cc38f-88a5-4f70-b320-c291d743c75d"
    },
    "cta": {
    "link": "https://www.swiggy.com/city/ajmer/taj-hotel-cinema-road-south-ajmer-rest381593",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "494441",
    "name": "Sher-E-Punjab",
    "cloudinaryImageId": "qzjyx7p1r6jji5rx5pgo",
    "locality": "Apna Bazar",
    "areaName": "North Ajmer",
    "costForTwo": "₹300 for two",
    "cuisines": [
    "North Indian",
    "Mughlai",
    "Punjabi"
    ],
    "avgRating": 3.8,
    "parentId": "840",
    "avgRatingString": "3.8",
    "totalRatingsString": "1.3K+",
    "sla": {
    "deliveryTime": 13,
    "lastMileTravel": 1.5,
    "serviceability": "SERVICEABLE",
    "slaString": "10-15 mins",
    "lastMileTravelString": "1.5 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-04-17 23:59:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "bolt/bolt%206.png",
    "description": "bolt!"
    }
    ],
    "textExtendedBadges": [
    {
    "iconId": "Akash/Listing%20badge.png",
    "shortDescription": "Price Match Promise",
    "fontColor": "#7E808C"
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
    "description": "bolt!",
    "imageId": "bolt/bolt%206.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {
    "badgeObject": [
    {
    "attributes": {
    "description": "",
    "fontColor": "#7E808C",
    "iconId": "Akash/Listing%20badge.png",
    "shortDescription": "Price Match Promise"
    }
    }
    ]
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
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-be1cc38f-88a5-4f70-b320-c291d743c75d"
    },
    "cta": {
    "link": "https://www.swiggy.com/city/ajmer/sher-e-punjab-apna-bazar-north-ajmer-rest494441",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "125851",
    "name": "Swad Restaurant",
    "cloudinaryImageId": "uyqxcmgpjgbkawmgyxsk",
    "locality": "Railway Quarters",
    "areaName": "Parao",
    "costForTwo": "₹200 for two",
    "cuisines": [
    "Thalis",
    "Punjabi",
    "North Indian",
    "gujrati",
    "Indian",
    "veg restaurant "
    ],
    "avgRating": 4,
    "veg": true,
    "parentId": "198583",
    "avgRatingString": "4.0",
    "totalRatingsString": "1.3K+",
    "sla": {
    "deliveryTime": 18,
    "lastMileTravel": 1.7,
    "serviceability": "SERVICEABLE",
    "slaString": "15-20 mins",
    "lastMileTravelString": "1.7 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-04-17 23:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "bolt/bolt%206.png",
    "description": "bolt!"
    },
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ]
    },
    "isOpen": true,
    "aggregatedDiscountInfoV2": {},
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "bolt!",
    "imageId": "bolt/bolt%206.png"
    }
    },
    {
    "attributes": {
    "description": "pureveg",
    "imageId": "v1695133679/badges/Pure_Veg111.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-be1cc38f-88a5-4f70-b320-c291d743c75d"
    },
    "cta": {
    "link": "https://www.swiggy.com/city/ajmer/swad-restaurant-railway-quarters-parao-rest125851",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "861739",
    "name": "Pastas By Pizza Hut",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/fab829ba-c521-4530-bcff-936e26f42d36_861739.JPG",
    "locality": "Hathi Bhata",
    "areaName": "Prithviraj Marg",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "Pastas"
    ],
    "avgRating": 3.2,
    "parentId": "306806",
    "avgRatingString": "3.2",
    "totalRatingsString": "31",
    "sla": {
    "deliveryTime": 23,
    "lastMileTravel": 2.1,
    "serviceability": "SERVICEABLE",
    "slaString": "20-25 mins",
    "lastMileTravelString": "2.1 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-04-17 23:59:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "aggregatedDiscountInfoV2": {},
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-be1cc38f-88a5-4f70-b320-c291d743c75d"
    },
    "cta": {
    "link": "https://www.swiggy.com/city/ajmer/pastas-by-pizza-hut-hathi-bhata-prithviraj-marg-rest861739",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "130574",
    "name": "Baskin Robbins - Ice Cream Desserts",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/12/ba0b1c1e-38ed-4d00-a891-9107f8593232_130574.jpg",
    "locality": "Suraj Vihar Colony",
    "areaName": "Ana Sagar Lake",
    "costForTwo": "₹350 for two",
    "cuisines": [
    "Desserts"
    ],
    "avgRating": 4.5,
    "veg": true,
    "parentId": "5588",
    "avgRatingString": "4.5",
    "totalRatingsString": "467",
    "sla": {
    "deliveryTime": 19,
    "lastMileTravel": 3.7,
    "serviceability": "SERVICEABLE",
    "slaString": "15-20 mins",
    "lastMileTravelString": "3.7 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-04-17 23:00:00",
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
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "ITEMS",
    "subHeader": "AT ₹59"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-be1cc38f-88a5-4f70-b320-c291d743c75d"
    },
    "cta": {
    "link": "https://www.swiggy.com/city/ajmer/baskin-robbins-ice-cream-desserts-suraj-vihar-colony-ana-sagar-lake-rest130574",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "129964",
    "name": "Foodies",
    "cloudinaryImageId": "n1oezdreincjnzirdvyy",
    "locality": "Nasirabad Road",
    "areaName": "Adarsh Nagar",
    "costForTwo": "₹150 for two",
    "cuisines": [
    "Pastas",
    "Burgers",
    "Pizzas"
    ],
    "avgRating": 4.3,
    "veg": true,
    "parentId": "390",
    "avgRatingString": "4.3",
    "totalRatingsString": "1.7K+",
    "sla": {
    "deliveryTime": 30,
    "lastMileTravel": 4.3,
    "serviceability": "SERVICEABLE",
    "slaString": "25-30 mins",
    "lastMileTravelString": "4.3 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-04-17 23:00:00",
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
    "aggregatedDiscountInfoV2": {},
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
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-be1cc38f-88a5-4f70-b320-c291d743c75d"
    },
    "cta": {
    "link": "https://www.swiggy.com/city/ajmer/foodies-nasirabad-road-adarsh-nagar-rest129964",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "113069",
    "name": "Kesar Sweets",
    "cloudinaryImageId": "ukf9rmyjgscsurgdnreu",
    "locality": "HBU nagar",
    "areaName": "Gyan Vihar Colony",
    "costForTwo": "₹200 for two",
    "cuisines": [
    "Sweets",
    "dessert",
    "Snacks",
    "Bakery",
    "Cakes & Pastries"
    ],
    "avgRating": 4.4,
    "veg": true,
    "parentId": "6836",
    "avgRatingString": "4.4",
    "totalRatingsString": "864",
    "sla": {
    "deliveryTime": 21,
    "lastMileTravel": 5,
    "serviceability": "SERVICEABLE",
    "slaString": "20-25 mins",
    "lastMileTravelString": "5.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-04-17 23:00:00",
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
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "30% OFF",
    "subHeader": "UPTO ₹75"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-be1cc38f-88a5-4f70-b320-c291d743c75d"
    },
    "cta": {
    "link": "https://www.swiggy.com/city/ajmer/kesar-sweets-hbu-nagar-gyan-vihar-colony-rest113069",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "610552",
    "name": "GoPure Natural Ice Creams",
    "cloudinaryImageId": "znb1kraiawpsyakvf562",
    "locality": "Church Hall Road",
    "areaName": "Ana Sagar Lake",
    "costForTwo": "₹100 for two",
    "cuisines": [
    "Ice Cream"
    ],
    "avgRating": 4.7,
    "veg": true,
    "parentId": "89143",
    "avgRatingString": "4.7",
    "totalRatingsString": "244",
    "sla": {
    "deliveryTime": 23,
    "lastMileTravel": 4.4,
    "serviceability": "SERVICEABLE",
    "slaString": "20-25 mins",
    "lastMileTravelString": "4.4 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-04-17 23:59:00",
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
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹150 OFF",
    "subHeader": "ABOVE ₹349",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-be1cc38f-88a5-4f70-b320-c291d743c75d"
    },
    "cta": {
    "link": "https://www.swiggy.com/city/ajmer/gopure-natural-ice-creams-church-hall-road-ana-sagar-lake-rest610552",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "327583",
    "name": "Delights by INOX",
    "cloudinaryImageId": "b857fcf611707fedd3773eb02688f925",
    "locality": "City Square Mall",
    "areaName": "Panchsheel Nagar",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "Snacks"
    ],
    "avgRating": 3.2,
    "veg": true,
    "parentId": "385095",
    "avgRatingString": "3.2",
    "totalRatingsString": "8",
    "sla": {
    "deliveryTime": 36,
    "lastMileTravel": 8.4,
    "serviceability": "SERVICEABLE",
    "slaString": "35-40 mins",
    "lastMileTravelString": "8.4 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-04-17 23:59:00",
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
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "60% OFF",
    "subHeader": "UPTO ₹120"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-be1cc38f-88a5-4f70-b320-c291d743c75d"
    },
    "cta": {
    "link": "https://www.swiggy.com/city/ajmer/delights-by-inox-city-square-mall-panchsheel-nagar-rest327583",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "113543",
    "name": "Roll Express",
    "cloudinaryImageId": "de58cec62dcd253e469655455e70b8ff",
    "locality": "Vaishali Nagar",
    "areaName": "Ana Sagar Lake",
    "costForTwo": "₹200 for two",
    "cuisines": [
    "Street Food",
    "Rolls & Wraps",
    "Fast Food",
    " Rolls & Fast Food"
    ],
    "avgRating": 4.4,
    "parentId": "16561",
    "avgRatingString": "4.4",
    "totalRatingsString": "2.3K+",
    "sla": {
    "deliveryTime": 23,
    "lastMileTravel": 5,
    "serviceability": "SERVICEABLE",
    "slaString": "20-25 mins",
    "lastMileTravelString": "5.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-04-17 23:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "20% OFF",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-be1cc38f-88a5-4f70-b320-c291d743c75d"
    },
    "cta": {
    "link": "https://www.swiggy.com/city/ajmer/roll-express-vaishali-nagar-ana-sagar-lake-rest113543",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "596852",
    "name": "Gourmet Ice Cream Cakes by Baskin Robbins",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/12/7dbe137b-03a7-4316-b583-7111e1011392_596852.JPG",
    "locality": "Makarwali Road",
    "areaName": "Vaishali Nagar",
    "costForTwo": "₹200 for two",
    "cuisines": [
    "Ice Cream Cakes",
    "Desserts",
    "Ice Cream",
    "Bakery"
    ],
    "avgRating": 4.8,
    "veg": true,
    "parentId": "21932",
    "avgRatingString": "4.8",
    "totalRatingsString": "6",
    "sla": {
    "deliveryTime": 25,
    "lastMileTravel": 5,
    "serviceability": "SERVICEABLE",
    "slaString": "25-30 mins",
    "lastMileTravelString": "5.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-04-17 23:00:00",
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
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "50% OFF",
    "subHeader": "UPTO ₹80"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-be1cc38f-88a5-4f70-b320-c291d743c75d"
    },
    "cta": {
    "link": "https://www.swiggy.com/city/ajmer/gourmet-ice-cream-cakes-by-baskin-robbins-makarwali-road-vaishali-nagar-rest596852",
    "type": "WEBLINK"
    }
    },
    ];

const Body = () => {
    return(
        <div className="body">
          <div className="Search"> Search</div>
          <div className="res-container"> 
            {/* <Restaurantcard 
            resData={resList[0]}
            /> */
            resList.map((restaurant) =>(
                // key={restaurant.info.id}
                 <RestaurantCard  resData={restaurant}/>
                )
            )
}
                  </div>
        </div>
    )
}

const Applayout = () => {
 return <div className="app">
      <Header/>
      <Body/>
 </div>   
        
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);