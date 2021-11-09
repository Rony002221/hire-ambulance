import React from 'react';
import './Ambulance.css'
import {useHistory} from 'react-router-dom'

const Ambulance = (props) => {
    
    const {id,type,picture,short_description} = props.data_of_ambulance || {}

    const history = useHistory();

    const showDetailsButton = (key) =>{
        const uri = `/details/${key}`

        history.push(uri);
    }
    
    return (
        <div className="col-md-4">
        <div className="card single_ambulance" >
            <img src={picture} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h4 class="card-title text-danger">{type}</h4> <hr />
              <h6 class="card-title">{short_description}..</h6> <hr />
              <span><i class="far fa-thumbs-up"></i></span> 

            
              <button type="button" onClick = {()=>showDetailsButton(id)}  class="btn btn-primary btn-sm"><i class="far fa-check-circle"></i> Details</button>
            
            </div>
          </div>
    </div>
    );
};

export default Ambulance;