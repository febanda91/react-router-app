import React, {useState, useEffect} from 'react';
import './App.css';

//useState holds the info that we will be pulling from the api 

//useEffect will run the fetch call when the component mounts



function Shop() {

    //empty brackets indicates that will only run when component mounts 
    useEffect(() => {
        fetchItems()
    }, [])

    //create state to put fetched data into 
    const [items, setItems] = useState([])

    const fetchItems = async () => {
        const data = await fetch('https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get')
        const items = await data.json()
        console.log(items)
        setItems(items.items)
    }


  return (
  <div>
      {items.map(item => {
          return <h1 key={item.itemid}>{item.name}</h1>
      })}
  </div>
  );
}

export default Shop;