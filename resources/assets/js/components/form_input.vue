<template>
    <div>
        <div class="alert alert-info">
        <h3>Check book:</h3>
            Check:<input type="checkbox" id="checkbox" v-model="checked">
            <label for="checkbox">{{ checked }}</label>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                demo:'demo',
                checked:false

            }
        }
    }
</script>