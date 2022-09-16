import { useEffect, useState } from "react";

const APIKEY = import.meta.env.VITE_GIPHY_API;

const useFetch = ({ keyword }) => {
  const [gifUrl, setGifUrl] = useState("");

  const fetchGifs = async () => {
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${keyword
          .split(" ")
          .join("")}&limit=1`
      );
      const { data } = await response.json();

      if (data.length) {
        setGifUrl(data[0]?.images?.downsized_medium.url);
      }

      if (response.status !== 200) {
        throw new Error("something went wrong fetching gif");
      }
    } catch (error) {
      console.log(error);
      setGifUrl("https://media.giphy.com/media/UHAYP0FxJOmFBuOiC2/giphy.gif");
    }
  };

  useEffect(() => {
    if (keyword) fetchGifs();
  }, [keyword]);

  return gifUrl;
};

export default useFetch;
