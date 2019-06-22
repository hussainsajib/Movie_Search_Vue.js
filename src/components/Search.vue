<template>
    <div>
        <b-input-group>
            <b-form-input
                v-model="searchString"
                @change="searchChange"
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

</style>
