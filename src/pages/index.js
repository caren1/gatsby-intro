// installed gatsby cli
// $gatsby new project-name url
// npm run develop / gatsby develop

import React from 'react'
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <div>
      <h1>Hello</h1>
      <h2>I'm Wojciech, front-end developer from Gdynia!</h2>
      {/* <a href="/contact">Need a hand? Contact me</a> */}
      <p>Need a hand?</p> <Link to="/contact">Contact me.</Link>
    </div>
  )
}

export default IndexPage

