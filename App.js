import React from "react";
import ReactDOM from "react-dom/client";

//navbar--------------------------------------

const Header = () => {
  return (
    <div className="header flex">
      <div className="logo-container">
        <img
          className="w-16"
          src="https://png.pngtree.com/template/20191014/ourmid/pngtree-pin-food-delivery-map-location-delivery-logo-concept-image_318151.jpg"
        />
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

const Data = [
  {
    info: {
      id: "38925",
      name: "Domino's Pizza",
      cloudinaryImageId: "mdl4tnyc8wbvysqxzhnq",
      locality: "Netaji Subhash Marg",
      areaName: "Daryaganj",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.3,
      parentId: "2456",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 25,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-12 01:55:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-a0b04246-6540-4f2f-9583-aece76c803e1",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/dominos-pizza-netaji-subhash-marg-daryaganj-delhi-38925",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "128116",
      name: "La Pino'z Pizza",
      cloudinaryImageId: "hgvtyqrxzvpwmbs361er",
      locality: "Kamla Nagar",
      areaName: "Kamla Nagar",
      costForTwo: "₹250 for two",
      cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
      avgRating: 4.1,
      parentId: "4961",
      avgRatingString: "4.1",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "26 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-12 03:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-a0b04246-6540-4f2f-9583-aece76c803e1",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/la-pinoz-pizza-kamla-nagar-delhi-128116",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "611107",
      name: "Burger King",
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      locality: "Kashmere Gate Metro Station",
      areaName: "Kashmere Gate",
      costForTwo: "₹350 for two",
      cuisines: ["American"],
      avgRating: 4.2,
      parentId: "166",
      avgRatingString: "4.2",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 55,
        lastMileTravel: 3.6,
        serviceability: "SERVICEABLE",
        slaString: "55 mins",
        lastMileTravelString: "3.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-12 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹139",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-a0b04246-6540-4f2f-9583-aece76c803e1",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/burger-king-metro-station-kashmere-gate-delhi-611107",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "230937",
      name: "The Burger Club",
      cloudinaryImageId: "ufzjtlulrnpsimac2n3d",
      locality: "Sector 5",
      areaName: "Connaught Place",
      costForTwo: "₹250 for two",
      cuisines: ["American", "Beverages", "Desserts"],
      avgRating: 4.3,
      parentId: "2285",
      avgRatingString: "4.3",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 4.3,
        serviceability: "SERVICEABLE",
        slaString: "27 mins",
        lastMileTravelString: "4.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-12 02:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹150 OFF",
        subHeader: "ABOVE ₹499",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-a0b04246-6540-4f2f-9583-aece76c803e1",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/the-burger-club-sector-5-connaught-place-delhi-230937",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "438612",
      name: "Baskin Robbins - Ice Cream Desserts",
      cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
      locality: "Cannought Circus",
      areaName: "Chanakyapuri",
      costForTwo: "₹250 for two",
      cuisines: ["Desserts", "Ice Cream"],
      avgRating: 4.6,
      veg: true,
      parentId: "5588",
      avgRatingString: "4.6",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 4.4,
        serviceability: "SERVICEABLE",
        slaString: "23 mins",
        lastMileTravelString: "4.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-12 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-a0b04246-6540-4f2f-9583-aece76c803e1",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-cannought-circus-chanakyapuri-delhi-438612",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "825845",
      name: "Kwality Walls Frozen Dessert and Ice Cream Shop",
      cloudinaryImageId: "5eac04c1f18b2231d62625344659dddc",
      locality: "GTB Nagar",
      areaName: "GTB Nagar",
      costForTwo: "₹200 for two",
      cuisines: ["Ice Cream", "Desserts", "Ice Cream Cakes"],
      avgRating: 3.8,
      veg: true,
      parentId: "582",
      avgRatingString: "3.8",
      totalRatingsString: "20+",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 4.7,
        serviceability: "SERVICEABLE",
        slaString: "19 mins",
        lastMileTravelString: "4.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-12 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹90",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-a0b04246-6540-4f2f-9583-aece76c803e1",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-gtb-nagar-delhi-825845",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "10157",
      name: "Wrap & Roll",
      cloudinaryImageId: "0f3daf1413d59398796bdb444c0033bf",
      locality: "Karol Bagh",
      areaName: "Karol Bagh",
      costForTwo: "₹300 for two",
      cuisines: ["Rolls & Wraps", "Chinese", "Snacks", "Fast Food"],
      avgRating: 4,
      parentId: "16124",
      avgRatingString: "4.0",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 6.2,
        serviceability: "SERVICEABLE",
        slaString: "27 mins",
        lastMileTravelString: "6.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-12 04:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-a0b04246-6540-4f2f-9583-aece76c803e1",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/wrap-and-roll-karol-bagh-delhi-10157",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "206300",
      name: "Burgrill - The Win Win Burger",
      cloudinaryImageId: "f596863116da4b4688b48e813e25000d",
      areaName: "Hudson Lane",
      costForTwo: "₹250 for two",
      cuisines: [
        "Burgers",
        "Healthy Food",
        "American",
        "Salads",
        "Beverages",
        "Desserts",
        "Snacks",
      ],
      avgRating: 4.2,
      parentId: "302366",
      avgRatingString: "4.2",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 7.6,
        serviceability: "SERVICEABLE",
        slaString: "30 mins",
        lastMileTravelString: "7.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-12 05:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-a0b04246-6540-4f2f-9583-aece76c803e1",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/burgrill-the-win-win-burger-hudson-lane-delhi-206300",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "299714",
      name: "Panditji Paranthe Wale Express",
      cloudinaryImageId: "s9eiqohwrqh7k8g7jqsk",
      locality: "2nd Phase",
      areaName: "Ashok Vihar",
      costForTwo: "₹150 for two",
      cuisines: ["Snacks", "Beverages"],
      avgRating: 3.7,
      parentId: "5312",
      avgRatingString: "3.7",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 9.6,
        serviceability: "SERVICEABLE",
        slaString: "32 mins",
        lastMileTravelString: "9.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-12 11:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-a0b04246-6540-4f2f-9583-aece76c803e1",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/panditji-paranthe-wale-express-2nd-phase-ashok-vihar-delhi-299714",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];

//body----------------------------------------
const ResCard = (props) => {
  // const {ResName,cuisine} = props;
  const { data } = props;
  const { name, cuisines, costForTwo, cloudinaryImageId, avgRating } =
    data.info;
  // console.log(cloudinaryImageId);
  // console.log(data.info.name);
  // console.log(props);
  return (
    <div className="rest-card">
      <img
        alt="no image"
        className="card-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />

      <h3>{name}</h3>
      <h4>{cuisines}</h4>
      <h5>{costForTwo}</h5>
      <h6>rating {avgRating}</h6>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {/* <ResCard ResName= "Meghna Foods"
               cuisine= "biryani, North Indian" /> */}

        <ResCard data={Data[0]} />
        {/* <ResCard data={Data[1]} /> */}
        {/* <ResCard  data={Data[2]}/>
               <ResCard  data={Data[4]}/>
               <ResCard  data={Data[5]}/> */}

        {/* {Data.map((val, ind) => {
          return <ResCard data={val} />;
        })} */}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      {<Header />}
      {<Body />}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

//RECONSILATION------------------------------------------------
//virtual dom is the representation of the dom.
//reconsilatoion of a reacts uses in this and a divs algorithm find out the difference between trees only re renders specific position with your app that is only found in div algorithm.

//unique key > index key > no key   (>=greater than)
//no key is not acceptable
//index key is a last option
//unique key is a best practice

//REACT FIBER---------------------
