import axios from 'axios'

const movieURL = "https://api.themoviedb.org/3/movie/now_playing?api_key=a6a02d7b45b6b3dad199329c5774302f&language=en-US&page=1";

export default async function(pageNumber){
    console.log(pageNumber);
    const response = await getData(`https://api.themoviedb.org/3/movie/now_playing?api_key=a6a02d7b45b6b3dad199329c5774302f&language=en-US&page=${pageNumber}`);
    console.log(response.data);
    return response.data;
}


async function getData(url){
    const response = await axios.get(url);
    const data = await response.data.results;
    const totalPages = await response.data.total_pages;
    if(!data){
        throw new Error("Unable to fetch data");
    }
    return {
        data,
        totalPages
    };
}