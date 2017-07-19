<template>
    <div>
        <div class="alert alert-danger">"V-FOR"<br>
            <ul>
                <li v-for="(item,index) in items" >
                    {{item_parent}}-{{index}}- {{item.name}}-{{item.lastname}}-{{items[2]}}

                </li>
            </ul>

</div>
        <div class="alert alert-info" > <h3>V-FOR with Object</h3><br>
            <ul>
                <li v-for="(value,key,index) in Object1">key:{{key}}::{{index}}::{{value}}</li>
            </ul>

        </div>
        <div class="alert alert-danger"  > Range for(n in 10): <span v-for="n in 10">{{n}}</span></div>
        <br><div>
        <ul>

        </ul>
    </div>
    </div>

</template>
<script>
    export default{
        data(){
            return {
                item_parent :"Item parent",
                items:[
                    {name:'tom'},
                    {name:'cat'},
                    {lastname:'minh'}
                ],
                Object1:{
                    name:'minh',
                    last_name:'ngoc',
                    age : 23
                },
                numbers:[
                    1,2,3,4,5,6,7,8,9,10
                ]

            }
        },method:{

        }
    }
</script>