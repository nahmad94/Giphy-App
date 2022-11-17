import React from 'react'
import { useState } from 'react'

export default function GetImages(searchOptions, setImages) {
    let searchString = 'minions'
    searchString = useState(searchString);
    const url = `${searchOptions.api}${searchOptions.endpoint}?api_key=${searchOptions.key}&q=${searchString} &limit=${searchOptions.limit}&offset=${searchOptions.offset}&rating=${searchOptions.rating}&lang=en`;
    fetch(url)
      .then(response => response.json())
      .then(response => {
        setImages(response.data);
      })
      .catch(console.error);
}
