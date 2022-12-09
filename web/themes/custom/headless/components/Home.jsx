import React, { useEffect, useState } from "react";

const Home = () => {
    const[ content, setContent] = useState(false)

    useEffect(() => {
        const API_ROOT = '/jsonapi/';
        const url = `${API_ROOT}node/article?fields[node--article]=id,drupal_internal__nid,title,body&sort=-created&page[limit]=10`;
    
        const headers = new Headers({
          Accept: 'application/vnd.api+json',
        });
    
        fetch(url, {headers})
          .then((response) => response.json())
          .then((data) => setContent(data.data))
          .catch(err => console.log('There was an error accessing the API', err));
      }, []);
    
    return (
        <div>
            <h2> Welcome to Home page</h2>
            {content ? (content.map((item) => {
                console.log(item)
                 return (
                    <a href={`/node/${item.attributes.drupal_internal__nid}`}>{item.attributes.title}</a>
                 )
               
                // {item.attributes.title}
            })) : <h2>No data found, please add content</h2>}
        </div>
    )
}

export default Home