import React, {useState, useEffect} from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import $ from 'jquery';
import './Dtable.css';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import 'datatables.net';
import 'datatables.net-dt/css/jquery.dataTables.css';


let d  = new Date();
alert ("WELCOME SIR ", +d);





const Dtable = () =>
{
const [startDate, setStartDate] = useState(new Date());



	return (
			<>
			<div className ='container-fluid dctable'>

        <div className="header">
            <h1 className="page-header text-center">
                <b>DEVELOPERS</b>
            </h1>
            <ul className="breadcrumb ">
                 <li><a href="#" style={{color: 'black'}}>Home</a></li>

                <li className="active" style={{color: '  #660000'}}>Developers</li>
            </ul>
        </div>
        

            <div className="row">

             <div className="col-md-12">
                    <div className="card">
                        <div className="card-action">



                          
                                <div className="orders">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="card">
                                                <div className="card-body">
                                                    <h2 className=""><b><u>WARRIORS BEHIND THE SCENE</u></b> </h2>
                                                </div>
                                                <br/>

                                                <div className="card-body--">

 
<table border="0" cellspacing="5" cellpadding="5">
        <tbody><tr>
            <td>Starting date:</td>
            <td> <input type="text" id="min" name="min"/>  <DatePicker selected={startDate}  onChange={date => setStartDate(date)}  id='min' name="min"/></td>
        </tr>
        <tr>
            <td>End date:</td>
            <td><input type="text" id="max" name="max"/>  <DatePicker selected={startDate} onChange={date => setStartDate(date)}  id='min' name="min"/></td>
        </tr>
    </tbody></table>

 
                                  <table id="devtable" className="table table-striped table-danger   table-borderless table-responsive-lg"
                                                        >
                                                        
         
   


                                                          <tfoot>
            <tr>
            <th>SLNo</th>
                <th>Name</th>
             <th> </th>
                <th>Position</th>
                <th>Office</th>
                <th>Extns</th>
                <th>Start date</th>
                <th>Salary</th>
            </tr>
        </tfoot>
                                                                </table>
                                                                </div>

   </div>
  </div>
                        </div>                          
                 </div> 
            </div>
            </div>                                    
            </div>
			</div>
	</div>
			</>


		)
};

export default Dtable;