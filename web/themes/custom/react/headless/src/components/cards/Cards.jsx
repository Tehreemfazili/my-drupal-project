import React from "react";
import { HttpRequest } from "../../utils/http_request";
import '../../dist/output.css'

const Cards = () => {

    const cards = HttpRequest('/api/cards_block/')

    return(
        <div className="cards-sections flex">
            {cards? cards.map((card, key) => {
                console.log(card)
                return (
                    <div className="cards-sections__inner ">

                        {card.field_card ? <img src= {card.field_card[0].url} /> : <></>}
                        {card.field_card_title ? <h2>{card.field_card_title[0].value}</h2> : <></>}
                        {card.field_card_description ? <h4>{card.field_card_description[0].value}</h4> : <></>}
                        {card.field_learn_more ? <a href={card.field_learn_more[0].uri} className="">{card.field_learn_more[0].title}</a> : <></>}
                        
                         {/* {card.field_card_description ? card.field_card_description.map((description, key) => {
                           return (
                            <div>
                                <h2>{description.value}</h2> 
                            </div>
                           )
                        }): <></>}  */}
                    </div>
                )
            })
             : <h2>Add Content</h2>}
        </div>
    )
}

export default Cards