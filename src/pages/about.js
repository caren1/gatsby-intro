import React from 'react'
import { Link } from 'gatsby'

const AboutPage = () => {
    return (
        <div>
            <h1>About Us</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio blanditiis aspernatur sunt ducimus, ea fugiat consectetur accusantium libero corporis, porro repellat, quae natus quam numquam quia eum ullam accusamus? Ullam.</p>
            <p>More info in : <Link to="/contact">Contact</Link></p>
        </div>
    )
}

export default AboutPage
