<template>
    <div class="titlediv"><h2 class="title">{{title}}</h2></div>
</template>

<script>
export default {
    name: "Title",
    props: [ 'title' ]
}
</script>

<style>
.title{
    text-align: left;
    font-weight: bold;
    color: black;
    font-size: 1.4em;
}

.titlediv{
    margin-top: 2%;
    margin-bottom: 5%;
}

</style>
