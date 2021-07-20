
import './App.css';
import React, {useState, useEffect} from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
 import UseStateArray from './UseStateArray'
import Lform from './Lform';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Datepicker from "./Datepicker";  

import { FontAwesomeIcon, FortAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import { faSplotch } from '@fortawesome/free-solid-svg-icons';
import { faBiohazard } from '@fortawesome/free-solid-svg-icons';
import { faCubes } from '@fortawesome/free-solid-svg-icons';
import { faDiceD6 } from '@fortawesome/free-solid-svg-icons';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { faChalkboardTeacher} from '@fortawesome/free-solid-svg-icons'
import { faBookReader} from '@fortawesome/free-solid-svg-icons';
import { faCogs} from '@fortawesome/free-solid-svg-icons';
// import { Icon, InlineIcon } from '@iconify/react';
import { faFacebookSquare } from 'react-icons/fa';
import { SocialIcon } from 'react-social-icons';

import { IconContext } from "react-icons";
import { FaBeer } from 'react-icons/fa';
import $ from 'jquery';


import { faSlidersH } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';






$(function() {
    $("input[name='unum']").on('input', function(e) {
        $(this).val($(this).val().replace(/[^.0-9]/g, ''));
    });
  });

function purchasebtn(){
  alert('Purchase')
  window.open('https://www.apple.com/in/watch/', '_blank');

}





function learnmorebtn(){
  
  window.open('https://en.wikipedia.org/wiki/Minutes', '_blank');

}

$(document).ready(function(){
  $(".socialh").click(function(){
    $("#fb").fadeToggle('slow');
    $("#git").fadeToggle('30000');
    $("#pin").fadeToggle('3000');
    $("#tweet").fadeToggle('40000');
    $("#insta").fadeToggle('3000');
  });
});


$(document).ready(function(){
  $("#nh").click(function(){
   
    $("#nh").css('color','red').slideDown("ease-in").animate({fontSize: '45px'});
  });

    $("#hd").mouseleave(function(){
    $("#resp").fadeToggle();
    $("#hd1").fadeToggle("slow");
    $("#hd2").fadeToggle(3000);
  });

      $(".anim").click(function(){
    $(".anime").css("color", "red").animate({
      right: '25px',
      opacity: '0.5',
            width: '300px',
            heigth: '200px',

    });
  });


});
$(document).ready(function(){


      $('.lmbtn').click(function(){
  var $this = $(this);  //decalring this varaiable
      $this.toggleClass('lmbtn');
    if($this.hasClass('lmbtn')){
      $this.text('Learn Less');
             $(".ress").animate({
      height: 'toggle'
       
    });
            $(".ress").fadeIn("slow");
    } else {
      $this.text('Learn More');
             $(".ress").fadeOut("slow");
    }
  });


 $('.mob').click(function(e){
     e.preventDefault();
   $(".mob").attr('src',"images/free1.gif");
 });
});





// const LoginForms =() =>{
//   
// }




const App = () => {
   'use strict';
   const state =  useState();

//console.log (state);
const [count, setCount] =useState(1);

const IncNum = () => {
  setCount (count+1);
  
  // console.log ('çlicked' );
}



// var time = moment("12:15 AM", ["h:mm A"]).format("HH:mm");
let time = new Date ().toLocaleTimeString('en-US');
// console.log(time);

   const [ctime,setCtime] =useState();
   const UpdateTime =() =>{

time = new Date ().toLocaleTimeString(); 
setCtime (time);
}; 
   setInterval(UpdateTime,1000)



const [ulemail, setEmail] = React.useState("");
const [ulpass, setPassword] = React.useState("");
   const [allEntry,setAllEntry] = React.useState([]);



const submitForm =(e) => {
  e.preventDefault();
  const newEntry = {email: ulemail, password : ulpass};
  setAllEntry([...allEntry, newEntry]);
}


  return (
    <>

    <header  >
   
    <div className="container-fluid  justify-content-center conhead">
        <div className="row sticky-top ">
  <div className="col-md-2 col-lg-2 col-xl-1"></div>
  <div className="col-md-9 col-lg-9 col-xl-9  justify-content-center ">
<nav className="navbar navbar-expand-md sticky-top ">
  <a className="navbar-brand justify-content-center font-weight-bold pr-5" id="nh" href="#">Minutes</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
      <
        FontAwesomeIcon icon = { faSlidersH }
        style = {
            { color: "#f58b4a", paddingRight: "0px",marginTop   :'0px',fontSize:"20px" }
        }/>
  </button>
  <div className="collapse navbar-collapse  " id="collapsibleNavbar">
    <ul className="navbar-nav ">
      <li className="nav-item">
        <a className="nav-link active   sap " id="navhome" href="#" style={{fontSize:'1vw', color:'#6a95a1'}} >Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white  sap" href="#mk">MKit</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white sap" href="#db">Links</a>
      </li>  
       <li className="nav-item">
        <a className="nav-link text-white sap" href="#endd">Deal</a>
      </li>      
    
       <li className="nav-item">
        <a className="nav-link text-white sap" href="#">Company</a>
      </li>    
      
       <li className="nav-item">
        <a className="nav-link text-white sap mr-4" href="#">Contact</a>
      </li>   
       <
          FontAwesomeIcon icon = { faMobile } style = {
            { paddindBottom: '5px', marginRight: "5px" , fontSize: '35px',color:'#4276aed9'}
        }
       />
        <li className="nav-item ">
        <p className="mb-0 mt-0 " id="p1" style={{color:'#4276aed9'}}>Call Us-</p>
        <p class="mb-0 mt-0 text-white" id="p2">22255786</p>
       
      </li> 
    </ul>

  </div>  
</nav>
</div>
 <div className="col-md-1 col-xl-1 col-lg-1"></div>
</div>


          <div className="row hed2">
          <div className="justify-content-center col-md-12 text-center lap ">    
      
 
 <h1 className ="text-danger font-weight-bold"> {count}</h1>
  <button className='btn text-dark' onClick={IncNum}> Click </button>



          <h1 className="text-danger "> {time}</h1> 
          
         <h1 className="display-4 text-white mx-auto p-auto m-auto meet" id="hd" >Meet Minutes Landing Page</h1>

            <p className="text-white font-weight-bold pt-3 mb-0 meetp1 " id="hd1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime molliti</p>       
<p className="text-white font-weight-bold meetp2 " id="hd2">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>


<button type="button" className="btn  text-uppercase mr-4  mb-3 mt-4" id="purbtn" onClick={() => purchasebtn()}>purchase now
 <
          FontAwesomeIcon icon = { faAngleDoubleRight } style = {
            { paddingLeft: "5px", fontSize:'22px' , paddingTop: '5px'}
        }
       />
</button>
  <button type="button" className="btn  text-uppercase mr-3  mb-3 mt-4" id="lrnbtn" onClick={() => learnmorebtn()} ><span>learn more</span>


  </button>
</div>
</div>
      </div>
      </header>
 
        <section id="mk">
                  <div className="container">
                    <div className="row justify-content-center">

                                  <ul className ="nav justify-content-center" >
              
                <li className="nav-item"  >

                  <a class="nav-link"  style={{fontSize:'20px' ,color:'#aaa0a0'}}  href="https://www.w3schools.com/" target="_blank">                     <
          FontAwesomeIcon icon = { faSplotch } style = {
            { paddingLeft: "0px", fontSize:'25px' , paddingTop: '0px', paddingRight:'5px' ,color:'#d5d5d5'}
        }
       />BootStrap </a>
                </li>

                   <li className="nav-item">

                  <a className="nav-link" style={{fontSize:'20px' ,color:'#aaa0a0'}}  href="https://nodejs.org/en/" target='_blank'>                     <
          FontAwesomeIcon icon = { faBiohazard } style = {
            { paddingLeft: "0px", fontSize:'25px' , paddingTop: '0px', paddingRight:'5px' ,color:'#d5d5d5'}
        }
       />NodeJs</a>
                </li>


                  <li className="nav-item">  

                  <a className="nav-link" style={{fontSize:'20px' ,color:'#aaa0a0'}} href="https://angular.io/start" target='_blank'>                     <
          FontAwesomeIcon icon = { faCubes } style = {
            { paddingLeft: "0px", fontSize:'25px' , paddingTop: '0px', paddingRight:'5px' ,color:'#d5d5d5'}
        }
       />AngularJs</a>
                </li>


                   <li className="nav-item">

                  <a className="nav-link" style={{fontSize:'20px' ,color:'#aaa0a0'}} href="https://vuejs.org/"  target='_blank'>                     <
          FontAwesomeIcon icon = { faDiceD6 } style = {
            { paddingLeft: "0px", fontSize:'25px' , paddingTop: '0px', paddingRight:'5px' ,color:'#d5d5d5'}
        }
       />Vuejs</a>
                </li>
              </ul>
  </div>
  <br/>

          <h2 className=" text-center text-capitalize font-weight-bold" style={{fontSize:'4vw'}}> We have built, amazing Website</h2>
           <h2 className="display-4 text-center text-capitalize mb-5" style={{fontSize:'3vw'}}> Landing page multi purpose kit </h2>
              
               <div className="row ">
                  <div className="card-deck  ">
                  <div className="col-lg-3 navli">
   
   <div className="bg-white">
      <div className="card-body text-center">
   <
          FontAwesomeIcon icon = { faSlidersH } style = {
            { paddingLeft: "0px", fontSize:'40px' , paddingTop: '0px', paddingRight:'5px' ,color:'#53bad2'}
        }
       />
       <h5 className="card-text text-uppercase font-weight-bold ch"> Lorem ipsum</h5>
        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas </p>

      </div>
    </div>
</div>


   < div className="col-lg-3 navli">
    <div className=" bg-white">
      <div className="card-body text-center">
   <
          FontAwesomeIcon icon = { faDiceD6 } style = {
            { paddingLeft: "0px", fontSize:'40px' , paddingTop: '0px', paddingRight:'5px' ,color:'#53bad2'}
        }
       />
       <h5 className="card-text text-uppercase font-weight-bold ch"> Lorem ipsum</h5>
        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas </p>
      </div>
    </div>
    </div>


    <div className="col-lg-3  navli">
    <div className=" bg-white ">
      <div className="card-body text-center">
   <
          FontAwesomeIcon icon = { faCogs } style = {
            { paddingLeft: "0px", fontSize:'40px' , paddingTop: '0px', paddingRight:'5px' ,color:'#53bad2'}
        }
       />
       <h5 className="card-text text-uppercase font-weight-bold ch"> Lorem ipsum</h5>
        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas </p>
      </div>
    </div>
    </div>



    <div className="col-lg-3 navli">
    <div className="bg-white">
      <div className="card-body text-center">
   <
          FontAwesomeIcon icon = { faChalkboardTeacher } style = {
            { paddingLeft: "0px", fontSize:'40px' , paddingTop: '0px', paddingRight:'5px' ,color:'#53bad2'}
        }
       />
       <h5 className="card-text text-uppercase font-weight-bold ch"> Lorem ipsum</h5>
        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas </p>
      </div>
    </div>
    </div>



  </div>
</div>

    <div className="row mt-4  mb-5">
    <div className="col-md-7">
      <img  src="/images/lap.jpg" alt="" className="img-fluid ig" />
    </div>

<div className="col-md-5 mb-4 ">

<h4 className="display-4  mt-3 anime" id="response"> Responsive Design</h4>
<h6 id="resp "  className="anime"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum</h6>
<button type="button" className="btn  text-uppercase mr-3  mb-2 mt-4 anim" id="buybtn"    ><span>Responsive animate</span>
</button>

    </div>
    
    </div>


 </div>
              
                  </section>

                  <section id="db">

                    <div className="container-fluid nxt">

                    <div className="row no-gutters">
                    <div className="col-lg-6 ">

                     <img  src="/images/meeting.jpg" alt="" className="img-fluid dp  " />

                    </div>


                    <div className= "col-lg-6 lsb">

                    <h2 className="   text-white pl-5 mt-5 mb-0 " >Retain - Ready  &</h2>
         <h2 className="  text-white pl-5 "  >  Responsive</h2>
         <p className="card-text text-left text-white pl-5" id="res">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint  voluptatum laborum</p> 

              <p className="card-text text-left text-white pl-5 mb-0" id="res">  <
          FontAwesomeIcon icon = { faCheckCircle } style = {
            { paddingLeft: "0px",   paddingTop: '0px', paddingRight:'5px' ,color:'white'}
        }
       /> Lorem ipsum dolor sit amet consectetur </p>


              <p className="card-text text-left text-white pl-5 mb-0" id="res">  <
          FontAwesomeIcon icon = { faCheckCircle } style = {
            { paddingLeft: "0px",   paddingTop: '0px', paddingRight:'5px' ,color:'white'}
        }
       /> Lorem ipsum dolor sit amet </p>


              <p className="card-text text-left text-white pl-5 pb-3 pt-0" id="res">  <
          FontAwesomeIcon icon = { faCheckCircle } style = {
            { paddingLeft: "0px",   paddingTop: '0px', paddingRight:'5px' ,color:'white'}
        }
       /> Lorem ipsum dolor sit  </p>


                    </div>

                    </div>
                    </div>
                    </section>



   <section id='endd'>
             <div className="container">
             <div className="row mt-5">
             <div className="col-md-5">
                <h2 className="    pl-5 mt-4 mb-0 " >Multipurpose</h2>
         <h2 className="   pl-5 "  > Template</h2>
         <p className="card-text text-left text-dark pl-5 ress" id="res">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
consequuntur! Commodi minima excepturi repudiandae velit hic maxime
doloremque. Quaerat provident commodi consectetur veniam similique ad 
earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
quasi aliquam eligendi, placeat qui corporis!</p>

<button type="button" className="btn  text-uppercase mr-3  mb-2 ml-5 mt-3 lmbtn" id="buybtn" ><span>learn more</span>
</button>
             </div>
              <div className="col-md-7">

                 <img  src="/images/oneplus.jpg" alt=""  className="img-fluid  mob  " />
              </div>


             </div>
             </div> 

            </section>


            <section>

            <div className="container">
                        <div className="row">
                        <div className ="col-md-3">
                        <h3 className= "socialh text-primary font-weight-bold text-center "> <u>Social Links</u><br/> <small> click here..</small> </h3>
                        </div>
                        <div className="col-md-4">
                     
                          <div className="social"  > 

                          <h4 className=' slinks mt-3 ' id='fb'><SocialIcon url="http://facebook.com/" /> Facebook</h4>

<h4 className='slinks  mt-4' id='git'><SocialIcon url="http://github.com/" /> Github</h4>


<h4 className=' slinks mt-4 ' id='pin'><SocialIcon url="http://pinterest.com/" />   Pinterest</h4>

<h4 className=' slinks mt-4 ' id='tweet'><SocialIcon url="http://twitter.com/" />   Twitter</h4>

<h4 className=' slinks mt-4 ' id='insta'><SocialIcon url="http://instagram.com/" />   Instagram</h4>
              </div>
                        </div>

















                          <div className="col-md-5">

            <h1 className="text-uppercase font-weight-bold text-primary text-center mt-5 mb-3"> Contact Us- </h1>
             <form  className="needs-validation  text-left " method="GET"    noValidate>
    <div className="form-group">
      <label for="uname">Your Name:</label>
      <input type="text" className="form-control" id="uname" placeholder="Enter username" name="uname" required />
      
      <div className="invalid-feedback">Please fill out this field.</div>
    </div>
    <div className="form-group">
      <label for="email">Email:</label>
      <input type="email" className="form-control" id="uemail" placeholder="Enter Eamil" name="uemail" required />
      
      <div className="invalid-feedback">Please fill out this field.</div>
    </div>
       <div className="form-group">
      <label for="phn">PhoneNumber:</label>
      <input type="text" className="form-control" id="unum" placeholder="Enter Number" name="unum" maxLength='12' required />
     
      <div className="invalid-feedback">Please fill out this field.</div>
    </div>

      <div className="form-group">
      <label for="phn">Date to address query:</label><br/>
      <Datepicker/>
     
     
      <div className="invalid-feedback">Please fill out this field.</div>
    </div>
       <div className="form-group">
      <label for="pwd">Query Feed:</label>
      < textarea input type="text" className="form-control" id="query" placeholder="Enter password" name="query" required />
      
      <div className="invalid-feedback">Please fill out this field.</div>
    </div>
    <div className="form-group form-check">
      <label className="form-check-label">
        <input className="form-check-input" type="checkbox" name="remember" required /> I agree on terms and condition.
      
        <div className="invalid-feedback">Check this checkbox to continue.</div>
      </label>
    </div>
    <button type="submit" className="btn btn-primary mr-4">Submit</button>

    <button type="reset" className="btn btn-warning">Clear-All</button>
  </form>


                        </div>




            </div> </div>
            </section>





  <UseStateArray/>



   <div className="container">

   <div className="row mt-5">
   <div className="col-md-4"> </div>
   <div className="col-md-5 text-center">
<div className="card bg-dark  border-warning mb-2">
 <div className="card-header font-weight-bold text-danger text-uppercase ">    <img  src="/images/log.jpg" alt="" className="img-fluid loggg"  />  Login  Form <img  src="/images/loq.jpg" alt="" className="img-fluid logg"  /></div>
  <div className="card-body">

  <form id="LoginForm" action="" className="needs-validation" onSubmit={submitForm}>
    <div className="form-group text-left mt-2 font-weight-bold text-white">
      <label for="uname  ">User Email:</label>
      <input type="email" className="form-control" id="ulemail" placeholder="Enter user email" name="ulemail" onChange = {(e) => setEmail(e.target.value)}  value={ulemail} />
        <div className="valid-feedback">Valid</div>
    <div className="invalid-feedback">Please fill out this field.</div>
      </div>
    <div className="form-group text-left font-weight-bold text-white">
      <label for="pwd">Password:</label>
      <input type="password" className="form-control" id="ulpass" placeholder="Enter password" name="ulpass"  onChange = {(e) => setPassword(e.target.value)} value={ulpass} />
        <div className="valid-feedback">Valid</div>
    <div className="invalid-feedback">Please fill out this field.</div>
    </div>
    <div className="form-group form-check text-left">
      <label className="form-check-label text-warning">
        <input className="form-check-input" type="checkbox" name="remember"  /> Keep Logged in .
         <div className="valid-feedback">Valid</div>
    <div className="invalid-feedback">Please fill out this field.</div>
       
      </label>
    </div>
     <div className="card-footer">
    <button type="submit" className="btn-block btn-success">Log In</button>
    </div>
  </form>


</div>
   </div>
   </div>
   <div className="col-md-3"> </div>

   </div>
   </div>
         

         <div>
         {
          allEntry.map((curElem) => {
            return(
            <div className="text-danger text-center font-weight-bold bg-dark">
            <p > Email - {curElem.email}</p>
                      <p> Password-  {curElem.password}</p>
            </div>
            )

          })
         }
         </div>     

    

    <footer className="mt-5 mb-0 ">
<div className="jumbotron mb-0 pt-4 pb-2 foter">
<div className="row ">
<div className=" col-md-4">
<h4 className=" font-weight-bold text-uppercase pb-2 mt-0 pt-0" style={{color: '#9A7D0A'}}>  Stay connected   <small> get notified</small> </h4>
<input type="text" placeholder="Email..." id='sig'/> <button className='btn btn-sm btn-danger' > Signup </button>
<p> Adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum </p>

</div>

<div className="col-md-4 text-center">
<h4 className=' mt-4 pl-1 pt-2' ><SocialIcon url="http://gmail.com/ "  />  <SocialIcon url="http://github.com/" />  <SocialIcon url="http://linkedin.com/" />  <SocialIcon url="http://whatsapp.com/" /> <SocialIcon url="http://twitter.com/" /> <SocialIcon url="http://instagram.com/" /></h4>
<p className="pt-4">Copyright &copy;2020 by Zaid Reshamwale</p>
</div>

<div className="col-md-4 text-center">
<h4 className="text-black text-uppercase" id='cd'> <u>content disclaimer</u>  </h4>
<p className=' mb-0 pt-0 mt-0'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas veiandae consequuntur voluptatum laborum
cusantium nemo autem. Veritatis
sapiente officiis modi at sunt excepturi expedi</p>
</div>

</div>

</div>

</footer>



<Lform/>







    </>
  );
}

export default App;
