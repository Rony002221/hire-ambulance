import { useEffect, useState } from 'react';
import Ambulance from '../single_ambulance/Ambulance';
import './Container.css'

const Container = () => {


    const [ambulance, setAmbulance] = useState([]);

    useEffect(()=>

        fetch('/info.json')
        .then(res => res.json())
        .then(data=>setAmbulance(data))

    , []);

    return (
        <div className = "main_container">
            <div className="course">
                <hr />
                <h2 className = "text-primary text-center">Most Popular Ambulances</h2>

                <hr />
                
                <div className="row p-3">
                   {
                    ambulance.map(ambulance => <Ambulance key = {ambulance.id} data_of_ambulance = {ambulance} ></Ambulance>)
                   } 
                 
                </div>
                
            </div>

            
        </div>
    );
};

export default Container;