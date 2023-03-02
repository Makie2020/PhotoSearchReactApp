import React from 'react';  
import { Link } from 'react-router-dom';
import './homepage.css'
   
function HomePage (){  
    return (
        <section className="hero is-medium is-primary">
            <div className='has-text-centered hero-body' id='background'>
                <h1 className='title is-2  has-text-light'>Find the perfect photo</h1>
                <p className='has-text-light subtitle is-8 mx-6 pt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium reiciendis vel quibusdam. Et minus tempore quam, voluptatum laborum similique itaque debitis! Repellat in id a veniam qui quisquam aspernatur dignissimos?</p>
                <Link  className='button' to='/PhotoSearchReactApp/search'>Find the perfect Photo</Link>
            </div>
        </section>
    )  
}  
   
export default HomePage;  