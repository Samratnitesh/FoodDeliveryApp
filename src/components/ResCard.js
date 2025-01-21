import { IMG_URL } from "../utils/constants";

const ResCard = ({ resData }) => {
    const { cloudinaryImageId, name, cuisines, avgRating } = resData;

    return <div className="bg-gray-100 rounded-md p-2 m-4 w-[250px] h-[400px] shadow-sm hover:bg-gray-200 transition duration-300 ease-in-out">
        <img className="w-full rounded-md h-40 object-cover" alt="res-logo" src={IMG_URL + cloudinaryImageId}></img>
        <div className="p-2">
            <h3 className="font-bold mb-1">{name}</h3>
            <h3 className="mb-2"> {cuisines.join(', ')}</h3>
            <h4>⭐{avgRating}</h4>
            <h4>30 min waits</h4>
        </div>
    </div>
};

// images={restaurantInfo.cloudinaryImageId}
//                 resName={restaurantInfo.name}
//                 cuisine={restaurantInfo.cuisines.join(", ")}
//                 Rating={restaurantInfo.avgRating}

export const WithPromotedLabel = (ResCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black bg-opacity-80 text-white rounded-lg px-4 py-2 m-2 shadow-sm">Promoted</label>
                <ResCard {...props} />
            </div>
        );
    }
}

export default ResCard;