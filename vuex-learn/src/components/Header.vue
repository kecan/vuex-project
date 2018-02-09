<template>
    <header class="header">
        <span class="back"><</span>
        <h3 class="title">{{title}}</h3>
    </header>
</template>

<script>
    export default {
        name:'Header',
        data() {
            return {}
        },
        props:{
          title:{
            type:String,
            default:'123'
          }
        }
    }
</script>

<style scoped>
  .header{
    position: relative;
    width: 100%;
    height: 45px;
    line-height: 45px;
    text-align: center;
    padding: 0 10px;
    box-shadow: 2px 0 2px rgba(0,0,0,.5);
    z-index: 10;
  }
  .back{
    position: absolute;
    left: 0;
    top: 0;
    width: 45px;
    height: 100%;
    font-weight: bold;
    font: 22px/45px '仿宋';
    cursor: pointer;
    color: #ff0000;
  }
  .title{
    width: 100%;
    font: 18px/45px '仿宋';
    font-weight: bold;
  }
</style>
