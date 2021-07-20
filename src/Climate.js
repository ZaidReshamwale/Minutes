import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Climate.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon, FortAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faStreetView } from '@fortawesome/free-solid-svg-icons';

const Climate = () =>{


// Array destructing checking state of the city 
	const [city, setCity] = useState (null);
// storing the data  of search 
	const [search, Setsearch] = useState ("Hubli");


// useEffect ( () => {
// 	async function getData() {
// 	 const res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=b14425a6554d189a2d7dc18a8e7d7263`);
//  console.log (res);

//  	setCity(res.main);

// }
// getData();
// },[search])

	useEffect (() => {
		const fetchApi = async () =>{
			const url =`http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=b14425a6554d189a2d7dc18a8e7d7263`;
			const response= await fetch (url);
			// console.log (response);
	const resJson = await response.json();
	setCity(resJson.main);
	console.log(city);
		};
		fetchApi();
	}, [search])

	return (
		<>

<div className ="container mt-5 pt-5 mb-5 pb-5"> 
<div className ="row">
  <div className="col-sm-4"> </div>

  <div className="col-sm-4">
  <h3 className="mb-4 mt-2 font-italic  text-center" > Weather Report</h3>
  <div className="card " id="wcard">
 <img className="card-img-top img-fluid mx-auto d-block" src="/images/ci.jpg" alt="Card image" id="cimage" />
  <div className="card-img-overlay">

    <h4 className="card-title text-center text mt-4 pt-3" >Weather Analysis</h4>
    <div className ="card-body"> 
   <input type="search" className="form-control text-center" id="sclimate" placeholder="Enter the City" onChange={ (e) => {Setsearch(e.target.value)

   }} />
  </div> 

  {!city ? (
  	<p> NO data found for the {search}</p>
  	)
  	: (

  <div className="card-body">
  	<h3 className="location"> </h3> 
  	<h2 className="text-center display-4" > <
        FontAwesomeIcon icon = { faStreetView } id="streeticon"/> </h2>
        <h3 className="text-center mt-2"> {search} </h3>

        <h2 className="temp text-center text-white"> {city.temp} 'F </h2>
        <h6 className="tempmaxmin text-gray text-center"> Min : {city.temp_min}'F || Max : {city.temp_max}'F </h6>
        <p> Pressure - {city.pressure}   ||   Humidity - {city.humidity}  </p>    

  </div> 

  
  	)}

  </div>
  </div>
   <div className="col-sm-4"> </div>
  </div>
</div>
 

</div>
		</>


		)

};

export default Climate;
