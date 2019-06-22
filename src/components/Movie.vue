<template>
  <div class="moviediv">
    <div class="imgdiv">
      <Poster :poster="movie.poster_path"/>
    </div>
    <div class="detaildiv">
      <Rating :rating="movie.vote_average"/>
      <Title :title="movie.title"/>
      <Description :description="movie.overview"/>
    </div>
  </div>
</template>

<script>
import Poster from './Poster'
import Rating from './Rating'
import Title from './Title'
import Description from './Description'

export default {
  name: 'Movie',
  props: [ 'movie' ],
  components: {
    Poster,
    Rating,
    Title,
    Description
  }

}
</script>

<style scoped>
.moviediv{
  display: flex;
  flex-direction: row;
  margin: 0;
}

.moviediv * {
  padding: 1%;
}

</style>
