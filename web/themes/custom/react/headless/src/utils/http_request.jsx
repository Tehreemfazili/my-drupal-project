import { useEffect, useState } from "react"

export const HttpRequest = (url) => {

    const [content, setContent] = useState('')

    const APIROOT = "https://my-drupal9-site.ddev.site"
    const fetch_url = `${APIROOT}/${url}?_format=json`


      useEffect(() => {
        const headers = new Headers({
            Accept: 'application/vnd.api+json',
          });
      
          fetch(fetch_url, {headers})
            .then((response) => response.json())
            .then((data) => setContent(data))
            .catch(err => console.log('There was an error accessing the API', err));
        }, []);

      return (
        content
      )
}