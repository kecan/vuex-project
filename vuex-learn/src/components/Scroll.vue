<template>
    <section id="goods" class="goods-box" ref="scroll">
        <slot></slot>
    </section>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        name:'Scroll',
        mounted(){
           this.$nextTick(()=>{
             this.scroll=new BScroll(this.$refs.scroll,{
               probeType: 3,
               click: true,
               scrollbar : true,
               scrollfree : true,
             })
           })
        }
    }
</script>

<style scoped>
   .goods-box{
      position: relative;
      overflow: hidden;
      width: 100%;
      height: 100%;
   }
</style>
