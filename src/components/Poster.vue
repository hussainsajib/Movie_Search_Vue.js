<template>
    <div>
        <img :src="posterPath+poster" alt="movieposter" class="poster">
    </div>
</template>

<script>
export default {
    name: "Poster",
    props: [ 'poster' ],
    data: function(){
        return {
            posterPath: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/'
        }
    }
}
</script>

<style>

</style>
