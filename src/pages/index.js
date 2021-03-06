// installed gatsby cli
// $gatsby new project-name url
// npm run develop / gatsby develop

import React from "react"
import { Link } from "gatsby"

// import Footer from "../components/footer"
// import Header from "../components/header"
import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
  // return (
  //   <div>
  //     <Header />
  //     <h1>Hello</h1>
  //     <h2>I'm Wojciech, front-end developer from Gdynia!</h2>
  //     {/* <a href="/contact">Need a hand? Contact me</a> */}
  //     <p>Need a hand?</p> <Link to="/contact">Contact me.</Link>
  //     <Footer />
  //   </div>
  // )

  return (
    <Layout>
      <Head title="Home"/>
      <h1>Hello</h1>
       <h2>I'm Wojciech, front-end developer from Gdynia!</h2>
       {/* <a href="/contact">Need a hand? Contact me</a> */}
       <p>Need a hand?</p> <Link to="/contact">Contact me.</Link>
    </Layout>
  )
}

export default IndexPage
