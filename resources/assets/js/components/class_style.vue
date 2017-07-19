<template>
<div>
    <div v-bind:class="{active : isActive,'text-danger':hasError}" ></div>
    <br>
    <div v-bind="classObject" >asdf</div>
    <div v-if="condition1"> condition true(v-if)</div>
    <div v-else > Condition false(v-else)</div>
    <div class="alert alert-success">
        <h1>if-else-if</h1>
        <div v-if="string === 'a'"> Value = a</div>
        <div v-else-if="string === 'b'"> Value = b</div>
        <div v-else-if="string === 'c'">Value =c</div>
        <div v-else> Value = none</div>

    </div>

</div>
</template>
<script>
    export default{
        data(){
            return{
                isActive:true,
                condition1:false,
                hasError:false,
                classObject:{
                    active:true,
                    'text-danger': false
                },
                string :'h'
            }
        }
    }
</script>