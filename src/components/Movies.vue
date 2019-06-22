<template>
    <div id="maincontainer" @scroll="scrollEvent">
        <Search @change="searchChange" />
        <div v-if="status.errored" class="container">
            <p>There was an error loading the data</p>
        </div>
        <div v-else>
            <div v-if="status.loadin">
                <p>loading...</p>
            </div>
            <div v-else id="velse">
                <div v-for="movie of movieList" :key="movie.id" class="movieholder col-md-6">
                    <Movie :movie="movie" />
                </div>
            </div>
        </div>
    </div>
  
</template>

<script>
import getData from '../fetchData'
import Search from './Search'
import Movie from './Movie'
export default {
    name: "Movies",
    data: function(){
        return {
            status: {
                loading: false,
                errored: false
            },
            currentPage: 1,
            movieList: null
        }
    },
    components: {
        Movie,
        Search
    },
    created: async function (){
        try{
            this.status.loading = true,
            window.addEventListener('scroll',this.scrollEvent);
            this.movieList = await getData(this.currentPage);
            this.status.loading = false;
        } catch(error){
            this.status.errored = true;
        }
    },
    destroyed: function(){
        window.removeEventListener('scroll',this.scrollEvent);
    },
    methods: {
        scrollEvent: async function(e){
            if((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
                this.currentPage++;
                const data = await getData(this.currentPage);
                console.log(data);
                this.movieList = this.movieList.concat(data);
            }
        },
        searchChange: function(e){
            console.log(e);
        }
    }
}
</script>

<style scoped>
.container{
    border: 1px solid red;
    background-color: red;
    margin-left: 0;
    margin-right: 0;
    width: 100%;
}

.movieholder{
    margin-top: 2%;
}

#velse{
    display: flex;
    flex-wrap: wrap;
}
</style>
