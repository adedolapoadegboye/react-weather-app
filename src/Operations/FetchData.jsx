import { useEffect, React } from "react";

const weatherAPI = "https://api.openweathermap.org/data/3.0/onecall?";
const weatherAPIKEY = "appid=3d08a4c1789c257750cbb113097b1cef";
const units = "metric";

const FetchData = ({lat, lon, child2parent}) => {
  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      const API =
        weatherAPI +
        "lat=" +
        lat +
        "&lon=" +
        lon +
        "&units=" +
        units +
        "&" +
        weatherAPIKEY;
        console.log(API);
       const data = await fetch(API);
      const json = await data.json();
      child2parent(json);
      console.log(json);
    };
    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, [lat, lon]);
  return <div></div>;
};

export default FetchData;
