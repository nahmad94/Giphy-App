import React from 'react'
import App from '../App';

export default function GetImages() {
    const searchString = useState(searchString);
    const url = `${searchOptions.api}${searchOptions.endpoint}?api_key=${searchOptions.key}&q=${searchString} &limit=${searchOptions.limit}&offset=${searchOptions.offset}&rating=${searchOptions.rating}&lang=en`;
    fetch(url)
      .then(response => response.json())
      .then(response => {
        setImages(response.data);
      })
      .catch(console.error);
}
