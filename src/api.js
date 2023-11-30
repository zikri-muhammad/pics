import axios from "axios";

const handlerApi = async (term) => {
    const result = await axios.get('https://api.unsplash.com/search/photos/', {
        headers: {
            Authorization: 'Client-ID KPr9sRo7Y0oritYbwBOsHLZ69u46_5tOmWLKEdEc0is'
        }, 
        params: {
            query: term
        }
    })

    return result.data.results
} 

export default handlerApi