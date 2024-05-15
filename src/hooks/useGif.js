//custom hook for reusable jsx code
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {
  //initially gif ko empty rkhre
    const [gif, setGif] = useState('');
    //initially loading ko false rkhre
    const [loading, setLoading] = useState('false');

    async function fetchData(tag) {
      //meme fetch krne jayenge to loading ko display krdenge
      setLoading(true);
      //tag ke basis pe konsa url use krna hai vo btare hai
      const {data} = await axios.get(tag ? `${url}&tag=${tag}`  : url);
      //imagesource me meme ka url aagya hai
      const imageSource = data.data.images.downsized_large.url;
      //meme ko gif ke andr daalre
      setGif(imageSource);
      //gif laane ke baad loading htadenge
      setLoading(false);
    }
    //initially tag meme wale section me car ke search results show krenge 
    useEffect( () => {
      fetchData('car');
    },[] )
    return {gif,loading, fetchData};
}

export default useGif
