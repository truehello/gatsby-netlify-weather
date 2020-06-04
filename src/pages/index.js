import React from "react"


import Layout from "../components/layout"

import Weather from "../components/weather"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="weather" />
    
    
    <Weather />
   
  </Layout>
)

export default IndexPage
