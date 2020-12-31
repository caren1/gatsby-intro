import React from "react"
import { Link } from "gatsby"

import Footer from "../components/footer"
import Header from "../components/header"

const AboutPage = () => {
  return (
    <div>
      <Header />
      <h1>About Us</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
        blanditiis aspernatur sunt ducimus, ea fugiat consectetur accusantium
        libero corporis, porro repellat, quae natus quam numquam quia eum ullam
        accusamus? Ullam.
      </p>
      <p>
        More info in : <Link to="/contact">Contact</Link>
      </p>
      <Footer />
    </div>
  )
}

export default AboutPage
