import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./constants";

const RestMenu = ()=>{
    //const params = useParams();
            // params-object
    // or we can destructure - 
    const {id} = useParams();
    const [rest , setRest] = useState({});
    //*how to read a dynamic URL params
    useEffect(()=>{
        getRestInfo();
    },[]);
    async function getRestInfo(){
        const request = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.9124336&lng=75.7872709&restaurantId="+id+"&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER");
        const json = await request.json();
        console.log(json);
        setRest(json?.data?.cards[2]?.card?.card?.info);
    }
    return(
        <div>
            <h1>Restaurant id : {id}</h1>
            <h2>{rest.name}</h2>
            <img style={{width:400}} src={IMG_CDN_URL + rest?.cloudinaryImageId} alt="" />
            <h3>City - {rest?.city}</h3>
            <h3>Area - {rest?.areaName}</h3>
            <h3>Cost for two - {rest?.costForTwo}</h3>       
        </div>
    );

}
export default RestMenu;