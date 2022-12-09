import React from 'react'
import Home from './Home'

const { default: DrupalProjectStats } = require("./DrupalProjectStas")

const Main = () => {
    return(
        // <DrupalProjectStats projectName="drupal"/>
        <Home/>
    )
}

export default Main