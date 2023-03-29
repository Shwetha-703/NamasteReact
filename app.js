import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => (
    <div className="header">
        <div className="logo-container">
            <a href="/">
            <img className="logo" src="https://i.pinimg.com/originals/01/48/66/0148662247327a7d268ce7d02b8662cf.png"/>
            </a>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
);

const cardStyle = {
    backgroundColor : "yellow"
}

const HotelCard = (props) =>{
    const {resData} = props; 
    const {cloudinaryImageId, name, cuisines, avgRating, deliveryTime, costForTwo} = resData?.data;
    return <div className="hotel-card" style={{backgroundColor : "#f0f0f0"}}>
        <img className="hotel-logo" alt="hotel-logo" 
            src = {"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"
            +cloudinaryImageId} />
        <div className="hotel-card-details">
            <h5>{name}</h5>
            <p>{cuisines.join(", ")}</p>
            <p>{avgRating} stars</p>
            <p>{deliveryTime}</p>
            <p>₹{costForTwo/100} FOR TWO</p>
        </div>
    </div>
}

const cardList = [
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "660675",
        "name": "Cafe Amudham",
        "uuid": "748db01d-25af-41a8-b012-ce948960efcb",
        "city": "1",
        "area": "Koramangala",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "c4314ce3710e1cc462cef8d978a58ffc",
        "cuisines": [
          "South Indian"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 25,
        "minDeliveryTime": 25,
        "maxDeliveryTime": 25,
        "slaString": "25 MINS",
        "lastMileTravel": 0.800000011920929,
        "slugs": {
          "restaurant": "cafe-amudham-koramangala-koramangala",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "No. 146, 5th Block, Koramangala, Bangalore, BTM Layout , B.B.M.P South, Karnataka-560095",
        "locality": "5th Block Kormangala",
        "parentId": 396620,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3100,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3100,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3100",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6269311~p=1~eid=00000187-2b89-bb3a-04d2-1a7a00b0015a",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "0.8 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "660675",
          "deliveryTime": 25,
          "minDeliveryTime": 25,
          "maxDeliveryTime": 25,
          "lastMileTravel": 0.800000011920929,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.6",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "272239",
        "name": "EatFit",
        "uuid": "7e9e8f6f-05e0-4ffd-8c5f-c5adde8a6b24",
        "city": "1",
        "area": "Koramangala",
        "totalRatingsString": "5000+ ratings",
        "cloudinaryImageId": "94d3bc5e6392fbaf50686cf8cfab10ef",
        "cuisines": [
          "Healthy Food",
          "Pizzas",
          "North Indian",
          "Thalis",
          "Biryani",
          "Chinese"
        ],
        "tags": [
          
        ],
        "costForTwo": 27000,
        "costForTwoString": "₹270 FOR TWO",
        "deliveryTime": 18,
        "minDeliveryTime": 18,
        "maxDeliveryTime": 18,
        "slaString": "18 MINS",
        "lastMileTravel": 0.800000011920929,
        "slugs": {
          "restaurant": "eat-fit-5th-block-koramangala",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "FIRST FLOOR,897/E,6TH BLOCK KORMANGALA,80 FT RD,BANGALORE, BTM Layout , B.B.M.P South, Karnataka-560095",
        "locality": "6th Block",
        "parentId": 76139,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "FLAT125 off",
          "shortDescriptionList": [
            {
              "meta": "FLAT125 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "FLAT125 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "₹125 OFF",
          "shortDescriptionList": [
            {
              "meta": "Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "FLAT125 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3100,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3100,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3100",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "0.8 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "272239",
          "deliveryTime": 18,
          "minDeliveryTime": 18,
          "maxDeliveryTime": 18,
          "lastMileTravel": 0.800000011920929,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.4",
        "totalRatings": 5000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "273752",
        "name": "Brahmins Tiffin Centre",
        "uuid": "35dc0cde-00be-4adc-97d2-6cdf1068c50c",
        "city": "1",
        "area": "Indiranagar",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "qmwj1vbbjljfp2saegsk",
        "cuisines": [
          "South Indian",
          "North Indian",
          "Chinese"
        ],
        "tags": [
          
        ],
        "costForTwo": 15000,
        "costForTwoString": "₹150 FOR TWO",
        "deliveryTime": 36,
        "minDeliveryTime": 36,
        "maxDeliveryTime": 36,
        "slaString": "36 MINS",
        "lastMileTravel": 6.199999809265137,
        "slugs": {
          "restaurant": "brahmins-tiffin-center-indiranagar-indiranagar",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "200, 6th Cross Rd, Hal, HAL 3rd Stage, Stage 3, New Tippasandra, Bengaluru, Karnataka 560075",
        "locality": "New Thipasandra",
        "parentId": 20078,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "40% off",
          "shortDescriptionList": [
            {
              "meta": "40% off | Use GUILTFREE",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "40% off up to ₹100 | Use code GUILTFREE",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "40% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use GUILTFREE",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "40% off up to ₹100 | Use code GUILTFREE",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 5500,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 5500,
          "message": "",
          "title": "Delivery Charge",
          "amount": "5500",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6276166~p=7~eid=00000187-2b89-bb3a-04d2-1a7c00b0072e",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "6.1 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "273752",
          "deliveryTime": 36,
          "minDeliveryTime": 36,
          "maxDeliveryTime": 36,
          "lastMileTravel": 6.199999809265137,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.2",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "641632",
        "name": "The Celebration Cakes And Desserts",
        "uuid": "b16425e9-5f00-434a-b274-e1f677113cfd",
        "city": "1",
        "area": "Koramangala",
        "totalRatingsString": "50+ ratings",
        "cloudinaryImageId": "s3q9dmfir1jnewwcnym4",
        "cuisines": [
          "Bakery",
          "Desserts",
          "Ice Cream"
        ],
        "tags": [
          
        ],
        "costForTwo": 15000,
        "costForTwoString": "₹150 FOR TWO",
        "deliveryTime": 25,
        "minDeliveryTime": 25,
        "maxDeliveryTime": 25,
        "slaString": "25 MINS",
        "lastMileTravel": 1.399999976158142,
        "slugs": {
          "restaurant": "the-celebration-cakes-and-desserts-koramangala-koramangala",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "209,1st Floor,Opposite-Bosch Gate No-2,1st Main Road,Koramangala,7Th Block,Bangalore,Karnataka-560095",
        "locality": "7th Block",
        "parentId": 308643,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "FLAT125 off",
          "shortDescriptionList": [
            {
              "meta": "FLAT125 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "FLAT125 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "₹125 OFF",
          "shortDescriptionList": [
            {
              "meta": "Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "FLAT125 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3100,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3100,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3100",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.3 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "641632",
          "deliveryTime": 25,
          "minDeliveryTime": 25,
          "maxDeliveryTime": 25,
          "lastMileTravel": 1.399999976158142,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.2",
        "totalRatings": 50,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "424609",
        "name": "Bikaner Sweets",
        "uuid": "8db1be0e-9220-4408-9a40-7f534645a307",
        "city": "1",
        "area": "Jayanagar",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "okjfoyr1ppofcsqvqsyz",
        "cuisines": [
          "Sweets"
        ],
        "tags": [
          
        ],
        "costForTwo": 9900,
        "costForTwoString": "₹99 FOR TWO",
        "deliveryTime": 31,
        "minDeliveryTime": 31,
        "maxDeliveryTime": 31,
        "slaString": "31 MINS",
        "lastMileTravel": 5.900000095367432,
        "slugs": {
          "restaurant": "bikaner-sweets-jayanagar-jayanagar",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "530, 11th Main Rd, near GRT Jewellers, 4th T Block East, 4th Block, Jayanagar, Bengaluru, Karnataka 560011, India",
        "locality": "4th T Block",
        "parentId": 2654,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 4900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 4900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "4900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "5.9 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "424609",
          "deliveryTime": 31,
          "minDeliveryTime": 31,
          "maxDeliveryTime": 31,
          "lastMileTravel": 5.900000095367432,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.1",
        "totalRatings": 100,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "682268",
        "name": "The Filter Coffee",
        "uuid": "a4df81c6-a569-4153-bd7b-48e0e305a85b",
        "city": "1",
        "area": "Indiranagar",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "e707e3eb3c241c42d7bce2b6314a8ddf",
        "cuisines": [
          "South Indian",
          "Beverages",
          "Desserts"
        ],
        "tags": [
          
        ],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 39,
        "minDeliveryTime": 39,
        "maxDeliveryTime": 39,
        "slaString": "39 MINS",
        "lastMileTravel": 6.099999904632568,
        "slugs": {
          "restaurant": "the-filter-coffee-indiranagar-indiranagar",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "Municipal No 3050, New Ward No 80 & Old BBMP Ward PID No 74-1-3050, HAL II Stage, 80 Feet Road, Indiranagar, Bangalore-560038",
        "locality": "80 Feet Road",
        "parentId": 21001,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 5500,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 5500,
          "message": "",
          "title": "Delivery Charge",
          "amount": "5500",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6113702~p=10~eid=00000187-2b89-bb3a-04d2-1a7d00b00a74",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "6 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "682268",
          "deliveryTime": 39,
          "minDeliveryTime": 39,
          "maxDeliveryTime": 39,
          "lastMileTravel": 6.099999904632568,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.5",
        "totalRatings": 100,
        "new": true
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "237465",
        "name": "Edesia by Freshmenu",
        "uuid": "8990135b-4750-4b88-ad3a-4618d1e9113a",
        "city": "1",
        "area": "Koramangala",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "uaoxurm8pipynwmya4b8",
        "cuisines": [
          "Desserts",
          "Bakery",
          "Sweets"
        ],
        "tags": [
          
        ],
        "costForTwo": 15000,
        "costForTwoString": "₹150 FOR TWO",
        "deliveryTime": 34,
        "minDeliveryTime": 34,
        "maxDeliveryTime": 34,
        "slaString": "34 MINS",
        "lastMileTravel": 2.4000000953674316,
        "slugs": {
          "restaurant": "edesia-1st-block-koramangala",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "Besides Kateramma Temple, No 38, 1, 1st Cross Rd, Jakkasandra, Block,Bangalore:560034, Koramangala, Bengaluru, Karnataka 560034",
        "locality": "Jakkasandra",
        "parentId": 11246,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "60% off",
          "shortDescriptionList": [
            {
              "meta": "60% off | Use STEALDEAL",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "60% off up to ₹120 | Use code STEALDEAL",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "60% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use STEALDEAL",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "60% off up to ₹120 | Use code STEALDEAL",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3100,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3100,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3100",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2.4 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "237465",
          "deliveryTime": 34,
          "minDeliveryTime": 34,
          "maxDeliveryTime": 34,
          "lastMileTravel": 2.4000000953674316,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.5",
        "totalRatings": 100,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "422863",
        "name": "Jose Mess",
        "uuid": "72a50f5e-1549-40de-9443-5562e7bfb1ef",
        "city": "1",
        "area": "Btm Layout",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "lltunkievzpxrrcarfmy",
        "cuisines": [
          "South Indian"
        ],
        "tags": [
          
        ],
        "costForTwo": 15000,
        "costForTwoString": "₹150 FOR TWO",
        "deliveryTime": 19,
        "minDeliveryTime": 19,
        "maxDeliveryTime": 19,
        "slaString": "19 MINS",
        "lastMileTravel": 1.899999976158142,
        "slugs": {
          "restaurant": "jose-mess-btm-btm-2",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "9th Cross Road, Maruthi Nagar Main Rd, near Maruthi Textiles, Maruti Nagar, 1st Stage, BTM Layout, Bengaluru, Karnataka 560068, India",
        "locality": "Maruti Nagar",
        "parentId": 20129,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3100,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3100,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3100",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.8 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "422863",
          "deliveryTime": 19,
          "minDeliveryTime": 19,
          "maxDeliveryTime": 19,
          "lastMileTravel": 1.899999976158142,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.3",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "383072",
        "name": "Rampyari Chaiwala Netaji Bhajiawala",
        "uuid": "05c721df-ebc3-44ae-92af-cc637cf5fa37",
        "city": "1",
        "area": "BTM Layout",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "l8qhaivflraozfaf2abu",
        "cuisines": [
          "Chaat",
          "Snacks",
          "Street Food",
          "Indian"
        ],
        "tags": [
          
        ],
        "costForTwo": 10000,
        "costForTwoString": "₹100 FOR TWO",
        "deliveryTime": 31,
        "minDeliveryTime": 31,
        "maxDeliveryTime": 31,
        "slaString": "31 MINS",
        "lastMileTravel": 3,
        "slugs": {
          "restaurant": "rampyari-chaiwala-netaji-bhajiawala-btm-btm",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "08, rampyari chaiwala Netaji bhajiawala, mchs colony, opposite to lake,btm 2nd stage , bangalore 560076",
        "locality": "2nd Stage",
        "parentId": 166698,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3700,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3700,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3700",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6241481~p=13~eid=00000187-2b89-bb3a-04d2-1a7e00b00d62",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "3 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "383072",
          "deliveryTime": 31,
          "minDeliveryTime": 31,
          "maxDeliveryTime": 31,
          "lastMileTravel": 3,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.0",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "374260",
        "name": "Big Bites",
        "uuid": "0c25c403-af15-4f51-90ad-3b8fd45bd2a9",
        "city": "1",
        "area": "Koramangala",
        "totalRatingsString": "20+ ratings",
        "cloudinaryImageId": "yxr8auu2wbvzlcym9yoa",
        "cuisines": [
          "Street Food",
          "Tex-Mex"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 28,
        "minDeliveryTime": 28,
        "maxDeliveryTime": 28,
        "slaString": "28 MINS",
        "lastMileTravel": 0.10000000149011612,
        "slugs": {
          "restaurant": "bigbites-koramangala-koramangala",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "No. 504, 2nd Floor, 6th Cross, 6th Block, Above Apollo Pharmacy, Koramangala, Bangalore 560095",
        "locality": "6th Block",
        "parentId": 45509,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "30% off",
          "shortDescriptionList": [
            {
              "meta": "30% off | Use JUMBO",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "30% off up to ₹150 on orders above ₹400 | Use code JUMBO",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "30% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use JUMBO",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "30% off up to ₹150 on orders above ₹400 | Use code JUMBO",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3100,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3100,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3100",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "0.1 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "374260",
          "deliveryTime": 28,
          "minDeliveryTime": 28,
          "maxDeliveryTime": 28,
          "lastMileTravel": 0.10000000149011612,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.0",
        "totalRatings": 20,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "581495",
        "name": "Cheesecakes By CakeZone",
        "uuid": "89aa465b-257b-4748-bba3-413d6f4bf4b3",
        "city": "1",
        "area": "Koramangala",
        "totalRatingsString": "20+ ratings",
        "cloudinaryImageId": "41ed60ce5ed96b212bdf9c45a09b7e92",
        "cuisines": [
          "Desserts",
          "Bakery"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 25,
        "minDeliveryTime": 25,
        "maxDeliveryTime": 25,
        "slaString": "25 MINS",
        "lastMileTravel": 0.800000011920929,
        "slugs": {
          "restaurant": "cheesecakes-by-cakezone-koramangala-koramangala",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "CakeZone, NO.897/E, FIRST FLOOR, YAMAHA SHOWROOM, 6TH BLOCK, KORAMANGLA, 80 FT RD, BANGALORE, BTM Layout , B.B.M.P South, Karnataka, 560095",
        "locality": "6th Block",
        "parentId": 348057,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "50% off",
          "shortDescriptionList": [
            {
              "meta": "50% off | Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "50% off up to ₹100 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "50% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "50% off up to ₹100 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3100,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3100,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3100",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "0.8 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "581495",
          "deliveryTime": 25,
          "minDeliveryTime": 25,
          "maxDeliveryTime": 25,
          "lastMileTravel": 0.800000011920929,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.3",
        "totalRatings": 20,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "577210",
        "name": "Pablo's By Living Food",
        "uuid": "0da49689-b9b7-4f65-a607-84de7a1e4ece",
        "city": "1",
        "area": "Indiranagar",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "n5ukbce8eaq0vowbeksl",
        "cuisines": [
          "Indian",
          "Pizzas"
        ],
        "tags": [
          
        ],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 37,
        "minDeliveryTime": 37,
        "maxDeliveryTime": 37,
        "slaString": "37 MINS",
        "lastMileTravel": 5,
        "slugs": {
          "restaurant": "pablo's-indiranagar-indiranagar",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "Sarvagna Nagar , B.B.M.PEast,Karnataka-560071",
        "locality": "Sarvagna Nagar",
        "parentId": 394078,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "FLAT125 off",
          "shortDescriptionList": [
            {
              "meta": "FLAT125 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "FLAT125 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "₹125 OFF",
          "shortDescriptionList": [
            {
              "meta": "Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "FLAT125 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 4900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 4900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "4900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6256567~p=16~eid=00000187-2b89-bb3a-04d2-1a7f00b01020",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "5 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "577210",
          "deliveryTime": 37,
          "minDeliveryTime": 37,
          "maxDeliveryTime": 37,
          "lastMileTravel": 5,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.4",
        "totalRatings": 100,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "413500",
        "name": "Shree Saraswathi Sweets Centre",
        "uuid": "21c5e581-81a0-42f3-b07a-834d2e91147a",
        "city": "1",
        "area": "Koramangala",
        "totalRatingsString": "50+ ratings",
        "cloudinaryImageId": "gld3f1bpui6o1scb1lci",
        "cuisines": [
          "Sweets"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 32,
        "minDeliveryTime": 32,
        "maxDeliveryTime": 32,
        "slaString": "32 MINS",
        "lastMileTravel": 1.600000023841858,
        "slugs": {
          "restaurant": "shree-saraswathi-sweets-centre-koramangala-koramangala",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "#970 , 1st Floor, 1st Main Rd, S.T. Bed, 1st Block Koramangala, Koramangala, Bengaluru, Karnataka 560034, India",
        "locality": "1st Block",
        "parentId": 255218,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3100,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3100,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3100",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.6 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "413500",
          "deliveryTime": 32,
          "minDeliveryTime": 32,
          "maxDeliveryTime": 32,
          "lastMileTravel": 1.600000023841858,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.8",
        "totalRatings": 50,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "251765",
        "name": "Udupi Athithya",
        "uuid": "56499158-a7ae-4eaf-a97c-2f96dd92ef41",
        "city": "1",
        "area": "Btm Layout",
        "totalRatingsString": "500+ ratings",
        "cloudinaryImageId": "clycl5rcq19bxz3sxes0",
        "cuisines": [
          "South Indian",
          "North Indian",
          "Chinese",
          "Snacks",
          "Beverages",
          "Chaat"
        ],
        "tags": [
          
        ],
        "costForTwo": 13000,
        "costForTwoString": "₹130 FOR TWO",
        "deliveryTime": 29,
        "minDeliveryTime": 29,
        "maxDeliveryTime": 29,
        "slaString": "29 MINS",
        "lastMileTravel": 3.799999952316284,
        "slugs": {
          "restaurant": "udupi-athithya-btm-btm",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "29/144, 8th Main Road, KEB Colony, New Gurappana Palya, 1st Stage, BTM Layout, Bengaluru, Karnataka, India ",
        "locality": "KEB Colony",
        "parentId": 218996,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3700,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3700,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3700",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "3.7 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "251765",
          "deliveryTime": 29,
          "minDeliveryTime": 29,
          "maxDeliveryTime": 29,
          "lastMileTravel": 3.799999952316284,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.0",
        "totalRatings": 500,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "329805",
        "name": "NATRAJ Chole bhature",
        "uuid": "72f36cb4-187b-498a-b1ce-c05f2d3bd0de",
        "city": "1",
        "area": "Indiranagar",
        "totalRatingsString": "5000+ ratings",
        "cloudinaryImageId": "z1bgpw0pmqlfvmbm1rw4",
        "cuisines": [
          "Indian"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 37,
        "minDeliveryTime": 37,
        "maxDeliveryTime": 37,
        "slaString": "37 MINS",
        "lastMileTravel": 6.699999809265137,
        "slugs": {
          "restaurant": "natraj-chole-bhature-indiranagar-indiranagar",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "No 33 BDA complex opp punjab national bank 1st stage Indiranagar Bengaluru",
        "locality": "1st Stage",
        "parentId": 14435,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "20% off",
          "shortDescriptionList": [
            {
              "meta": "20% off | Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "20% off up to ₹50 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "20% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "20% off up to ₹50 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 5500,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 5500,
          "message": "",
          "title": "Delivery Charge",
          "amount": "5500",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6279776~p=19~eid=00000187-2b89-bb3a-04d2-1a8000b01364",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "6.6 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "329805",
          "deliveryTime": 37,
          "minDeliveryTime": 37,
          "maxDeliveryTime": 37,
          "lastMileTravel": 6.699999809265137,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.3",
        "totalRatings": 5000,
        "new": false
      },
      "subtype": "basic"
    }
  ];

const Body = () =>(
    <div className="body">
        <div className="search">
            <h3>Search</h3>
        </div>
        <div className="hotel-container">
            {
            cardList.map(res => <HotelCard key={res.data.id} resData={res}/>)
            }
        </div>
    </div>
);

const Footer = () =>(
    <div className="footer">
        <div className="copyright">
            <h3>Copyright@2023 Saturn Platforms</h3>
        </div>
        <div className="connect">
            <h3>Connect</h3>
            <p>Instagram</p>
            <p>LinkedIn</p>
        </div>
        <div className="connect">
            <h3>Channels</h3>
            <p>Youtube</p>
        </div>
    </div>
);

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);