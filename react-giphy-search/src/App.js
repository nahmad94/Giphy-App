import './App.css';
import SearchForm from './Components/SearchForm'
import SearchResults from './Components/SearchResults'
import { useState } from 'react';
import { useEffect } from 'react';
import GetImages from './Components/GetImages';
import SearchHeader from './Components/SearchHeader';

const images = [
  {
    id: 1,
    url: 'https://media.giphy.com/media/3DsNP07nApt1eEyjvM/giphy.gif'
  },
  {
    id: 2,
    url: 'https://media1.giphy.com/media/26BRv0ThflsHCqDrG/giphy.gif'
  },
  {
    id: 3,
    url:
      'https://www.thisiscolossal.com/wp-content/uploads/2018/04/agif2opt.gif'
  },
  {
    id: 4,
    url: 'https://media.giphy.com/media/3oEdva9BUHPIs2SkGk/giphy.gif'
  },
  {
    id: 5,
    url: 'https://media.giphy.com/media/3o6ozoD1ByqYv7ARIk/giphy.gif'
  },
  {
    id: 6,
    url: 'https://buffer.com/library/wp-content/uploads/2016/06/giphy.gif'
  },
  {
    id: 7,
    url: 'https://media4.giphy.com/avatars/default5.gif'
  },
  {
    id: 8,
    url: 'https://media2.giphy.com/media/3oEduPff5ErjNmlbwY/source.gif'
  }
];  

function App() {
  const [searchString, setSearchString] = useState('minions');
  const [images, setImages] = useState([]);
  const [lastSearch, setLastSearch] = useState('');

  const searchOptions = {
    key: 'm5Xj4bbP1D7Ao9rbl1IKvWd6sCaPIFGy',
    limit: 25,
    rating: 'G',
    api: 'https://api.giphy.com/v1/gifs',
    endpoint: '/search',
    offset: 0,
  };

  function handleChange(event) {
    setSearchString(event.target.value);
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    getImages(searchString);
  }

  // useEffect(() => {
  //   GetImages();
  // }, []);

  useEffect(() => {
    getImages(searchString);
  }, []);

  function getImages(searchString) {
    const url = `${searchOptions.api}${searchOptions.endpoint}?api_key=${searchOptions.key}&q=${searchString}&limit=${searchOptions.limit}&offset=${searchOptions.offset}&rating=${searchOptions.rating}&lang=en`;
    console.log(url)
    fetch(url)
      .then(response => response.json())
      .then(response => {
        setImages(response.data);
        setLastSearch(searchString);
        setSearchString('');
      })
      .catch(console.error);
  }

  return (
    <div className="App">
      <SearchHeader lastSearch={lastSearch}/>
      <SearchForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        searchString={searchString}
      />
      <SearchResults images={images}/>
    </div>
  );
}

export default App;
