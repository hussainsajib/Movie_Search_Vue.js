import axios from 'axios'

const movieURL = "https://api.themoviedb.org/3/movie/now_playing?api_key=a6a02d7b45b6b3dad199329c5774302f&language=en-US&page=1";

export default async function(){
    const response = await axios.get(movieURL);
    const data = await response.data.results;
    console.log(data);
    if(!data){
        throw new Error("Unable to fetch data");
    }
    return data;
}