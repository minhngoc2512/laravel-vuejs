<template>
    <div>
        <div class="alert alert-danger">
            <button v-on:click="counter += 1" > Add 1</button>


            <p>This value a={{counter}}</p>
        </div>
        <div class="alert alert-success">
            <h3>Event method</h3>
            <button v-on:click="changeValue(2)" >Change value</button>
            <p>Value number = {{number}}</p>

        </div>
        <div class="alert alert-info">
            <h4>Key event:</h4>
            <input type="number" v-model="counter" v-on:keyup.enter="changeValue(4)"/>

        </div>

    </div>
</template>
<script>
    export default{
        data(){
            return{
                counter: 1,
                number : 0


            }
        },
        methods:{
            changeValue(number){
                this.number +=number;
//                if(event){
//                    alert(event.target.tagName);
//                }
            }
        }
    }
</script>