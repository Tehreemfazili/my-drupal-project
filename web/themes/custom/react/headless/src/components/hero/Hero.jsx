import React from "react";
import { HttpRequest } from "../../utils/http_request";
import './Hero.css'

const Hero = () => {

    const url_route = '/api/hero_block'
    const response = HttpRequest(url_route)

    return (
      <div className="hero-section">
        {response ? response.map((item)=> {
            return(
                <div className="hero-section__inner">
                    <div>
                    {item.field_subtitle.map((subtitle) => {
                        return (
                            <h3 className="hero-section__sub-title">{subtitle.value}</h3>
                        )
                    }) }
                    {item.field_title.map((title) => {
                        return (
                            <h1 className="hero-section__title">{title.value}</h1>
                        )
                    }) }
                    {item.field_description.map((description) => {
                        return (
                            <h2 className="hero-section__description">{description.value}</h2>
                        )
                    }) }
                    {item.field_button.map((button) => {
                        return (
                            <h3 className="hero-section__btn">{button.title}</h3>
                        )
                    }) }
                    </div>

                </div>
            )
        }) : <h2>Add content</h2> }
      </div>
    )
}

export default Hero