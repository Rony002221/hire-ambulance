import React from 'react';
import Footer from '../footer/Footer';

const _404 = () => {
    return (
        <div>
            <br /><br /><br /><br /><hr />
            <h1 className = "text-center text-danger mt-5 p-5"><i>Page Not Found</i></h1><br /><br />
            <hr />
            <br /><br />

            <Footer></Footer>
        </div>
    );
};

export default _404;