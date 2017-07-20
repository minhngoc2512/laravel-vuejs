<template lang="html">
<div>
    <h1>{{ data }}</h1>

    <h2>Raw html:

    <div  v-html="rawhtml"></div>
    </h2>
    disabled button


    <button :disabled="true" >Button</button>
    OR
        <div v-bind:id="id" >insert id by vue</div>
            <div class="alert alert-success">
    <h2>Vue script Expressions(number = 2 +1):{{ number +1 }} </h2>
        </div>


        <div class="alert alert-info">if script: {{ok? 'yes':'no'}}  </div>
        <div class="alert alert-danger" >Show date: {{ new Date()}}</div>
        <div class="alert alert-success" v-if="ok2" > use v-if: if value=true is show tag div</div>
        <div> ONclick(v-on:click) <input type="button" v-on:click="mounted" class="btn btn-success" value="Click"/>
        Or onlick 2 (@click) <input  type="button" @click="mounted" class=" btn btn-success" value="Click 2"  />
        </div>
        <div >Url: <a :href="data"> create link by vue(:href):</a></div>
        <div class="alert alert-danger" ><h2>demo function(computed):</h2>{{demofunction}}</div>
        <div class="alert alert-success"><h2> value data: {{changeValue}}</h2></div>
        <div class="alert alert-danger"><h2>function get ,set:{{fullName}}</h2> </div>
        <div class="alert alert-success" > <h1>Ask ayes/no question:</h1>
        <input v-model="question"/>
        <p>{{answer}}</p>
        <div class="alert alert-danger">
        <div v-if="loginType == 'username' ">User name<input type="text" placeholder="enter user name"/></div>
        <div v-else> Number phone<input type="number" placeholder="Enter your mobile number"/></div>
        <div> <button class="btn btn-success" v-on:click="changeInput"> Click to change</button> </div>
        </div>
        <div class="alert alert-danger"> "V-SHOW" <h1 v-show="ok">Hello!</h1></div>





        </div>
    </div>

</template>

<script>
    export default{
        data(){
            return{
                data:'Vue demo 2',
                rawhtml:'<h1>demo raw html</h1>',
                number:2,
                ok:false,
                ok2 :true,
                id :'sadfds',
                firstName: 'Minh',
                lastName:'Ngoc',
                question: '',
                answer:'I cannot give you an answer untill you ask',
                loginType:'username'
            }
        },
        watch:{
          question:function(newQuestion){
              this.answer = 'waiting for you to stop tying...'
              this.getAnswer()
          }
        },
        methods:{
            created(){
                this.data ='sdafas';
                console.log('a is: '+this.data)//????
            },
            mounted(){
               alert(this.data)
            },
            dynamicId(){
                return 34;
            },
            rawHtml(){
                return "data"//????
            },
            getAnswer: _.debounce(
                function(){
                    if(this.question.indexOf()===-1){
                        this.answer = "Question usually contain a question mark."
                        return
                    }
                    this.answer = 'Thinking....'
                    this.vm = this
                    axios.get('https://yesno.wtf/api')
                        .then(function (response) {
                            vm.answer = _.capitalize(response.date.answer)

                        })
                        .catch(function(error){
                            vm.answer = 'Error'+ error
                        })

                }
            ),
            changeInput (){
                this.loginType = 'mobile';
                return this.loginType;
            }
        },
        computed:{
            demofunction: function(){
                return 'function on data'
            },
            changeValue:function(){

                this.data= "value data";
                return this.data;
            },
            fullName:{
                get:function(){
                    return this.firstName + ' '+ this.lastName;
                },
                set:function(newValue){
                    var names = newValue.split(' ')
                    this.firstName = names[0]
                    this.lastName = names[names.length -1]
                }
            }

        }
    }


</script>