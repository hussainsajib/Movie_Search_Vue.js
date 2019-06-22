<template>
    <div>
        <b-input-group>
            <b-form-input
                v-model="searchString"
                @change="searchChange"
                placeholder="search a movie"
                id="searchBox"
            ></b-form-input>
        </b-input-group>
    </div>
</template>

<script>
export default {
    name:'Search',
    data:function(){
        return{
            searchString: null,
        }
    },
    methods: {
        searchChange:function(){
            this.$emit('change',this.searchString);
        }
    }

}
</script>

<style>
#searchBox{
    width: 90%;
    text-align: center;
    color: goldenrod;
    font-size: 1.2em;
}

</style>
