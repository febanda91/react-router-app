import React, {useState, useEffect} from 'react';
import './App.css';


//useState holds the info that we will be pulling from the api 

//useEffect will run the fetch call when the component mounts

//When you Link to something you get access something in our props with "match". In this case we had access to the item id

function ItemDetail({match}) {

    const ItemID = match.params.id
    

    //empty brackets indicates that will only run when component mounts 
    useEffect(() => {
        fetchItem()
    }, [])

    //create state to put fetched data into 
    const [item, setItem] = useState({
        images: {}
    })

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://fortnite-public-api.theapinetwork.com/prod09/item/get?ids=${ItemID}`)
        const item = await fetchItem.json()
        setItem(item)
    }


  return (
  <div>
   <h1>Name: {item.name}</h1>
   <h3>Description: {item.description}</h3>
   <h5>Cost: {item.cost}</h5>
   <img src={item.images.transparent} alt=""/>
  </div>
  );
}

export default ItemDetail;