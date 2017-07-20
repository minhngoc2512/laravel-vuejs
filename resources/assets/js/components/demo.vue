<template lang="html">
<div>
    {{data}}
    <br>
    {{message}}<br>
    <ol>
        <li v-for="todo in arrays" >
            {{todo.str}}
        </li>
    </ol>
    <h2 v-once>v-one: Never change value=={{message}}</h2>
    <label>{{message}}</label><br>
    <input v-model="message" >
    <br>
    <label>Event on Vue</label><br>
    <button v-on:click="DemoEvent" >Click </button>
    <br>
    <button v-on:click="DemoEvent2">Click 2</button>

</div>
</template>
<script>
    export default{
        data(){
            return {
                data :'demo',
                message: 'Hello Vue',
                seen: 1,
                arrays: [
                    {str: 'str1'},
                    {str: 'str2'},
                    {str: 'str3'}
                ],
            }

        },
        methods:{
            DemoEvent:function(){
                this.message = "Event onclick"
            },
            DemoEvent2:function(){
                this.message = this.message.split('').reverse().join();
            }
        }
    }


</script>
