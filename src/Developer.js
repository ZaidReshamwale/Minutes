import React, {useState, useEffect} from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import $ from 'jquery';
import './Developer.css';
import axios from 'axios';
import Pagination from './Pagination'
import { FontAwesomeIcon, FortAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';













const Developer = () =>{

// usestate

$(document).ready(function(){
     
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();

    $(" .jab, .zab, .card-title ").filter(function(e) {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);

     
    });
  });

});

const [users, setUsers] = useState ([]);
const [currentPage, setCurrentPage] = useState(1);
const [usersPerPage] = useState(10);

const [search, Setsearch] = useState ();
// asycn is noting but the promise 
 
const getUsers = async ()  => {
const response = await  fetch (`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&sparkline=false&price_change_percentage=1h%2C24h%2C7d`);
		setUsers(await response.json());

// console.log (response);
// const data = await response.json ();


} 

	useEffect(() => {
		getUsers();
	},[])



// pagination displaying the given range number of output on screen 
const indexOfLastUsers = currentPage * usersPerPage;
const indexOfFirstUsers =indexOfLastUsers - usersPerPage;
const currentUsers = users.slice(indexOfFirstUsers, indexOfLastUsers);
// console.log (currentUsers);



const paginate =pageNumber =>  setCurrentPage(pageNumber); 

return (
		<>


			<div className = "container-fluid   ccon mt-5 mb-3">

			<h2 className="text-center text-warning px-3 mb-4 pb-3 pt-2"> THE  GREAT WARRIORS BEHIND SCENCE </h2>
				  <div className="search-container text-right mb-4 ">
    <form action="">
      <input type="search" placeholder="Search.." id="myInput" onChange={ (e) => {Setsearch(e.target.value)}} />
      <button type="submit"> <FontAwesomeIcon icon = { faSearch } /></button>
    </form>

  </div>

   {   !search ?(
         <div className = "row jab">



        {
          currentUsers.map((curEle) =>{
          return (


            <div className =" col-md-4  text-center" key={curEle.id}  >
          
                     <div className="card flex-row flex-wrap bg-primary mb-2 ">
        <div className="card-header border-0 " >
            <img src={curEle.image} alt="Developer" className="img-fluid devimg " />
        </div>
        <div class="card-block px-2 ">
            <h4 className="card-title crdlog pl-0">{curEle.login} </h4>
            <p className="card-text pl-4">{curEle.image}</p>
            
            <div className="  row text-center ">
            <div className="col-4 text-center  ">
                <span ><small> Article</small> </span><br/>
                <span >58</span>  
            </div>
                        <div className="col-4 ">
                <span><small> Tweet </small> </span><br/>
                <span >7888</span>  
            </div>
                        <div className="col-4 text-center ">
                <span ><small>Blogs </small></span><br/>
                <span >580</span> 
            </div>

            </div>
          
        </div>


        <div className="w-100"></div>
        <div className="card-footer w-100 text-muted">
          THE ACHIVER
        </div>
   
    </div>
                
            </div>
          )    

        })
        }

      
                </div>
  

  ):(
   <div className = "row jab">



        {
          users.map((curEle) =>{
          return (


            <div className =" col-md-4  text-center" key={curEle.id}  >
          
                     <div className="card flex-row flex-wrap bg-primary mb-2  zab">
        <div className="card-header border-0 " >
            <img src={curEle.avatar_url} alt="Developer" className="img-fluid devimg " />
        </div>
        <div class="card-block px-2 ">
            <h4 className="card-title crdlog pl-0">{curEle.login} </h4>
            <p className="card-text pl-4">{curEle.html_url}</p>
            
            <div className="  row text-center ">
            <div className="col-4 text-center  ">
                <span ><small> Article</small> </span><br/>
                <span >58</span>  
            </div>
                        <div className="col-4 ">
                <span><small> Tweet </small> </span><br/>
                <span >7888</span>  
            </div>
                        <div className="col-4 text-center ">
                <span ><small>Blogs </small></span><br/>
                <span >580</span> 
            </div>

            </div>
          
        </div>


        <div className="w-100"></div>
        <div className="card-footer w-100 text-muted">
          THE ACHIVER
        </div>
   
    </div>
                
            </div>
          )    

        })
        }

      
                </div>

)



}
               
   		<Pagination usersPerPage={usersPerPage} totalUsers={users.length} paginate={paginate} className="pag"/>  
                
        </div> 

		</>



)
};
export default Developer;