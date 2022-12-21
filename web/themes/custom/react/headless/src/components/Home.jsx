import React, { useEffect, useState } from "react";
import { getAuthClient } from "../utils/auth";

const auth = getAuthClient();

const Home = () => {
    const[ content, setContent] = useState('')

    useEffect(() => {
         const API_ROOT = 'https://my-drupal9-site.ddev.site/jsonapi/';
        // const url = `${API_ROOT}node/destination`;
        // const API_ROOT = 'jsonapi/';
        const url = `${API_ROOT}node/article/`;

        // fetch(url, {mode: 'no-cors'})
        //   .then((response) => response.json())
        //   .then((data) => setContent(data.data))
        //   .catch(err => console.log('There was an error accessing the API', err));

    
        // const API_ROOT = '/jsonapi/';
        // const url = `${API_ROOT}node/article?fields[node--article]=id,drupal_internal__nid,title,body&sort=-created&page[limit]=10`;
    

        const headers = new Headers({
          Accept: 'application/vnd.api+json',
        });
    //     auth.fetchWithAuthentication(url, {headers}, {})
    //     .then((response) => response.json())
    //     .then((data) => {
    //     //   if (isValidData(data)) {
    //         // Initialize the list of content with data retrieved from Drupal.
    //         console.log("data is: " + data)
    //     //   }
    //     })
    //     .catch(err => console.log('There was an error accessing the API', err));
    //   }, []);
    
        fetch(url, {headers})
          .then((response) => response.json())
          .then((data) => setContent(data.data))
          .catch(err => console.log('There was an error accessing the API', err));
      }, []);
    console.log(content)
    
    return (
        <div>
            <h2> Welcome to Home page</h2>
            {content ? (content.map((item) => {
                console.log(item)
                 return (
                    <div>hello</div>
                    // <a href={`/node/${item.attributes.drupal_internal__nid}`}>{item.attributes.title}</a>
                 )
               
                // {item.attributes.title}
            })) : <h2>No data found, please add content</h2>}
        </div>
    )
}

export default Home