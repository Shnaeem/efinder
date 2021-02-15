import axios from "axios";

const FetchData  = async () => {    
    const url = "https://app.ticketmaster.com/discovery/v2/events?apikey=ZQnFUWNUnfJEvDniHy63e5J9OdVNGZcV&locale=en-us&preferredCountry=us";
    const response = await axios.get (url)
    .then((res)=>{
        console.log(res);
        return res
    })
    return response;
}

export default FetchData;