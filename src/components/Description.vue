<template>
    <div><p class="desciption">{{description}}</p></div>
</template>

<script>
export default {
    name: 'Description',
    props: [ 'description' ]
}
</script>

<style>
.desciption{
    font-size: .8em;
    text-align: justify;
}

</style>
