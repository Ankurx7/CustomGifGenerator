
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Tag = () => {
    const [gif, setGif] = useState('car');
    const [loading, setLoading] = useState(false);
    const [tag,setTag] = useState('');
  
    async function fetchData() {
      setLoading(true);
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
      const { data } = await axios.get(url);
      const imageSource = data.data.images.downsized_large.url;
      setGif(imageSource);
      setLoading(false);
    }
  
    useEffect(() => {
      fetchData();
    }, []);
  
    function clickHandler() {
      fetchData();
    }
     


    return (
      <div className='w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className='mt-[15px] text-xl underline uppercase font-bold'>Random Gif</h1>
        {loading ? <Spinner /> : <img src={gif} width="450" alt="Random Gif" />}
        
        <input className='w-9/12 bg-white opacity-80 text-lg py-2 rounded-lg mb-[3px]'
                      onChange={(e) => {setTag(e.target.value);}} value = {tag}
        />

        <button onClick={clickHandler} className='w-9/12 bg-white opacity-80 text-lg py-2 rounded-lg mb-[15px]'>
          Generate
        </button>
      </div>
  )
}

export default Tag