<template>
    <div>
        <div v-if="status.errored">
            <p>There was an error loading the data</p>
        </div>
        <div v-else>
            <div v-if="status.loadin">
                <p>loading...</p>
            </div>
            <div v-else>
                <p>loaded all data</p>
            </div>
        </div>
    </div>
  
</template>

<script>
import getData from '../fetchData'
export default {
    name: "Movies",
    data: function(){
        return {
            status: {
                loading: false,
                errored: false
            },
            movieList: null
        }
    },
    created: async function (){
        try{
            this.status.loading = true,
            this.movieList = await getData();
            this.status.loading = false;
        } catch(error){
            this.status.errored = true;
        }
    }
}
</script>

<style>

</style>
