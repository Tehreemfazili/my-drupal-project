import React, { useEffect, useState } from "react";

import './Navbar.css'

const Navbar = () => {

    const [items, setItems] = useState('')

    const APIROOT = "https://my-drupal9-site.ddev.site"
    const url = `${APIROOT}/api/menu_items/main?_format=json`

    useEffect(() => {
        const headers = new Headers({
            Accept: 'application/vnd.api+json',
          });
      
          fetch(url, {headers})
            .then((response) => response.json())
            .then((data) => setItems(data))
            .catch(err => console.log('There was an error accessing the API', err));
        }, []);

    return (
        <nav className="main-navbar">
            {items ? items.map((item)=> {
                return (
                    <a href= {item.relative} className="menu-items">{item.title}</a>
                )
            }): <h2>Add menu items</h2>}
        </nav>
    )
}

export default Navbar