import React from 'react';
import axios from 'axios';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import $ from 'jquery';

const Pagination = ({usersPerPage,totalUsers,paginate}) =>{
	
const pageNumbers = [];

for (let i=1;i<=Math.ceil(totalUsers/usersPerPage); i++ ){
pageNumbers.push(i);
} 

$('.pagination a').on('click', function (e) {
    e.preventDefault();
    var url = $(this).attr('href');
    $('#initiated').load(url + ' div#initiated');
});
	return (
	<>
		<nav>
		<ul className= "pagination mt-2 pb-2 ml-2">
		{pageNumbers.map(number =>(
			<li key={number} className="page-item">
			<a onClick={ () => paginate(number)  }   className="page-link">{number}</a>
			</li>

			))}
		</ul>
		</nav>
	</>

);
};

export default Pagination;
