import { useState, useEffect } from "react"

const useRestaurantMenu = (resId) => {
    const [resMenuList, setResMenuList] = useState([]);
    const [resDetails, setResDetails] = useState(null);

    useEffect(() => {
            fetchResData();
        }, []);
        
    const fetchResData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
        
        const json = await data.json();
        
        // console.log(json);
        
        setResMenuList(json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards || []);
        setResDetails(json?.data?.cards[2]?.card?.card?.info || []);
    }

    return [resMenuList, resDetails];
}

export default useRestaurantMenu;