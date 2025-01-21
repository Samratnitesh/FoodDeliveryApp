import { useDispatch } from "react-redux";
import { IMG_URL } from "../utils/constants";
import { addItems } from "../utils/cartSlice";

export const ItemCard = ({ menu }) => {
  return (
    <div>
      {menu?.map((item, index) => {
        const menuItems = item?.card || {};
        const { name, price, imageId, description, ratings, defaultPrice } = menuItems?.info || {};
        const dispatch = useDispatch();
        const handleClick = (item) => {
          dispatch(addItems(item));
        }
        return (
          <div
            key={item?.id || index}
            className="flex my-4 border border-b-black justify-between space-x-4"
          >
            <div className="flex-[3] mb-10 mx-2">
              <h3 className="font-bold text-xl text-gray-800 mb-4">{name || "Unnamed Item"}</h3>
              <h3 className="font-bold mb-4">
                ₹ {price / 100 || defaultPrice / 100 || "N/A"}
              </h3>
              {ratings?.aggregatedRating?.rating && (
                <h3 className="mb-4">⭐ {ratings.aggregatedRating.rating}</h3>
              )}
              {description && <p className="font-mono">({description})</p>}
            </div>
            <div className="flex-[1] flex flex-col items-center justify-center relative my-4">
              
              <img
                className="rounded-lg shadow-md w-40 h-40 object-cover"
                src={IMG_URL + imageId}
                alt={name || "Menu item"}
              />
              <button className="absolute font-bold rounded-md border 
              px-10 py-2 bg-white text-green-600
               hover:bg-gray-400 transition duration-300 
               left-1/2 transform -translate-x-1/2 translate-y-16"
               onClick={() => handleClick(item)}
               >
                ADD
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
