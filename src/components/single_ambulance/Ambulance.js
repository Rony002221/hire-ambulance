import React from 'react';
import { Link } from 'react-bootstrap';
import './Ambulance.css'

const Ambulance = (props) => {
    const {id,type,fee,picture,short_description,size,details} = props.data_of_ambulance || {}
    return (
        <div className="col-md-4">
        <div className="card single_ambulance" >
            <img src={picture} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h4 class="card-title text-danger">{type}</h4> <hr />
              <h6 class="card-title">{short_description}..</h6> <hr />
              <span><i class="far fa-thumbs-up"></i></span> 

            {/* <Link to= {`/details/${id}`}>   */}
              <button type="button"  class="btn btn-primary btn-sm"><i class="far fa-check-circle"></i> Details</button>
            {/* </Link> */}
            </div>
          </div>
    </div>
    );
};

export default Ambulance;