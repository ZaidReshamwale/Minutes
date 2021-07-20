import React, {useState, useEffect} from 'react';
import axios from 'axios';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Pokemon  = () =>{
const [num, setNum] = React.useState();
const [name, setName] = useState();
const [moves, setMoves] = useState();
	useEffect(()  =>{
		async function getData(){
			const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
		
		console.log (res);
		setName(res.data.name);
		setMoves(res.data.moves.length);

		}
		getData();
	});


	return  (

		<>
		 <div className="m-5 pt-5 font-weight-bold text-center bg-dark ">
		<select className="form-control" value={num} onChange={(e) => {
			setNum(e.target.value);
		}} >
			<option value="1"> 1</option>

			<option value="25"> 25</option>
			<option value="3"> 3</option>
			<option value="4"> 4</option>
			<option value="6"> 6</option>

		</select>

		<h4 className="text-center text-danger mt-2"> You choose  {num} value</h4> 
		<h4 className="text-center text-danger mt-2"> My name is -  {name} </h4>
		<h4 className="text-center text-danger mt-2"> My moves are -  {moves} </h4> 
	 
	

		
		</div>
		</>

		)
};

export default Pokemon;