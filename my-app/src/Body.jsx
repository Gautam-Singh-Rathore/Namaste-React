import React , { useState } from "react";
import { useEffect } from "react";
import "./index.css"
import {IMG_CDN_URL} from "./constants"
import {restaurantList} from "./constants"
import Shimmer from "./Shimmer";
// Card 
    function Card(props){
        return(
            <div className="card">
                <img src={IMG_CDN_URL+props.cloudinaryImageId} alt="Photo" />
                <h2>{props.name}</h2>
                <h4>{props.cuisines.join(" , ")}</h4>
            </div>
        );
    }
// Rerendering happens when -
//1.State changes
//2.Props changes
//Hook is just a java-script function


// Main Body Function

  function Body(){
    const [value , setValue] =  useState(""); // To create state variables
    const [rests  , setRests] = useState([]);
    const [allRest , setAllRest] = useState([]);
    
    // empty dependency array => once after render
    // dep array [value] => once after intital render + everytime after render(my value changes)
    useEffect(()=>{
      // API call
      getData();

    },[]);
    console.log("render");
    //1.Callback function
    //2.dependacy array


    //*getData function
    async function getData() {
      try {
        const request = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.95250&lng=75.71050&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const data = await request.json(); 
    
        // Ensure nested properties exist before setting state
        const restaurantsData = data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    
        if (restaurantsData) {
          setAllRest(restaurantsData);
          setRests(restaurantsData);
        } else {
          console.error("Error: Failed to retrieve restaurant data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    
    /*async function getData(){
      const request = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.95250&lng=75.71050&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

      const data = await request.json(); 
      console.log(data);
      setRests(data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      console.log(data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
      
    }*/
    

    function filterData(value , allRest){
      const filteredData = allRest.filter((r)=>{
        return r?.info?.name.toLowerCase().includes(value.toLowerCase());
      });
      return filteredData;
    }

    //Conditional Rendering
    //if restaurant is empty => shimmerUI
    //if restaurant has data => actual data UI

    // not render component (Early return)
    if(!allRest) return null;


    return(allRest.length==0)?<Shimmer/>:(
      <>

      {/* Search-Bar */}
      <div className="search-cont">
        <input type="text" className="search-inp" placeholder="Search" value={value} onChange={(event)=>{setValue(event.target.value)}}/>
        <button className="search-btn" onClick={()=>{
          // filter the data
          const data = filterData(value , allRest);
          // update the data of restaurants list
          setRests(data);

        }}>Search</button>
      </div>
      <div className="search-cont">
      
      
      {/* Containers */}
      </div>
        <div className="container">
        {   
            (rests?.length==0)
            ?
             <h1>No Restaurant match your filter !!!</h1>
            :
            rests.map((rest)=>{
                return(<Card {...rest.info} key={rest.info.id}/>);
            })
        }
        </div>
        </>
    );
  }

  export default Body;