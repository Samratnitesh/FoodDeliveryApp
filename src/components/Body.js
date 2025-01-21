import { useEffect, useState } from "react";
import ResCard, {WithPromotedLabel} from "./ResCard";
import { Link } from "react-router-dom";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allResturant, setAllRestaurant] = useState([]);
  const [listRestaurant, setListRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  console.log(listRestaurant);

  const WithPromoteLabel = WithPromotedLabel(ResCard);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/mapi/restaurants/search/v3?lat=28.7040592&lng=77.10249019999999&str=Veg%20Thali&trackingId=833f0264-585e-c8fd-307a-846282dd07a9&submitAction=ENTER&queryUniqueId=295e2395-da6a-7156-5d26-43253455d15d"
      );
      const json = await data.json();

      const restaurants =
        json?.data?.cards[1]?.groupedCard?.cardGroupMap?.DISH?.cards || [];

      // Deduplicate based on 'restaurantInfo.id'
      const uniqueData = restaurants.filter(
        (res, index, self) =>
          index ===
          self.findIndex(
            (t) => t?.card?.card?.restaurant?.info?.id === res?.card?.card?.restaurant?.info?.id
          )
      );

      setAllRestaurant(uniqueData); 
      setListRestaurant(uniqueData); // Initial list to display
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="my-4">
      <div className="space-x-2 mb-6 w-full max-w-md mx-40">
        <input
          type="text"
          className="border border-gray-500 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
        className="px-3 py-1 bg-blue-500 rounded-md text-white hover:bg-blue-700"
          onClick={() => {
            const filterRes = allResturant.filter((res) => {
              const resName = res?.card?.card?.restaurant?.info?.name?.toLowerCase();
              return resName?.includes(searchText?.toLowerCase());
            });
            setListRestaurant(filterRes);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap justify-center items-center min-h-screen">
        {listRestaurant?.map((res) => {
          const restaurantInfo = res?.card?.card?.restaurant?.info;
          if (!restaurantInfo) {
            return null;
          }
          return (
            <Link
              className=""
              key={restaurantInfo.id}
              to={"/restaurant/" + restaurantInfo.id}
            >
              {
                restaurantInfo.promoted ? <WithPromoteLabel resData = {restaurantInfo} /> : <ResCard
                resData = {restaurantInfo}
              />

              }
              
            </Link> 
          );
        })}
      </div>
    </div>
  );
};

export default Body;
