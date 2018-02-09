<template>
  <div class="goods">
      <Header></Header>
      <div class="goods-content">
        <Scroll>
          <ul class="goods-list">
            <li class="goods-item" v-for="(item,index) in goodsApi.goods">
              <div class="goods-avatar">
                <img class="avatar" :src="item.image">
              </div>
              <div class="goods-info">
                <h3 class="goods-info-title">{{item.name}}</h3>
                <div class="goods-desc">
                  <p class="desc">{{item.info}}</p>
                </div>
                <div class="goods-info-footer">
                  <div class="goods-price">
                    <p class="new-price">
                      现价:<b class="price-box">¥<span class="price-info">{{item.price}}</span></b>
                    </p>
                    <p class="old-price">
                      <del>原价:¥ {{item.oldPrice}}</del>
                    </p>
                  </div>
                  <div class="goods-cart">
                    <span class="goods-btn reduce-btn" :class="{'goods-disable':item.num==0}" @click="reduce(index)">-</span>
                    <div class="goods-input">
                      <input type="text" class="goods-input-view" v-model="item.num" readonly/>
                    </div>
                    <span class="goods-btn add-btn" @click="add(index)">+</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </Scroll>
      </div>
      <footer class="goods-footer">
        <div class="goods-footer-info">
           <p class="goods-total-price">
             合计:<b class="price-box">¥<span class="price-info">{{totalPrice||0}}</span></b>
           </p>
           <p class="goods-delivery-price">
             配送费:¥ {{goodsApi.deliveryPrice}}
           </p>
        </div>
        <button class="goods-submit" :class="{'goods-submit-active':totalPrice>parseFloat(goodsApi.minPrice)}">{{cartStatus}}({{totalNum}})</button>
      </footer>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import Scroll from '@/components/Scroll'
  import {mapState,mapGetters,mapMutations} from 'vuex'
export default {
  name: 'Good',
  data () {
    return {

    }
  },
  computed:{
    ...mapState(['name','goodsApi']),
    ...mapGetters(['totalPrice','totalNum']),
    cartStatus(){
      let cartInfo='';
      if(this.totalPrice==0){
        cartInfo=`${this.goodsApi.minPrice}元起送`
      }else if(this.totalPrice<20){
        cartInfo=`还差${this.goodsApi.minPrice-this.totalPrice}元起送`
      }else {
        cartInfo='去买单'
      }
      return cartInfo
    }
  },
  methods:{
    ...mapMutations(['goodsReduce','goodsAdd']),
    reduce(index){
      this.goodsReduce(index)
    },
    add(index){
      this.goodsAdd(index)
    }
  },
  components:{
    Header,
    Scroll
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .goods-content{
     height: calc(100vH - 90px);
     overflow: hidden;
   }
  .goods-item{
     position: relative;
     padding: 10px;
     display: flex;
  }
   .goods-item:not(:last-child):after{
     content: '';
     position: absolute;
     left: 10px;
     right: 10px;
     bottom: 0;
     height: 1px;
     background: #ccc;
     border-radius: 10px;
   }
  .goods-avatar{
      width: 120px;
      height: 120px;
      margin-right: 10px;
  }
  .avatar{
    position: relative;
    display: block;
    max-height: 100%;
    max-width: 100%;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
  .goods-info{
     flex: 1;
     display: flex;
     flex-direction: column;
  }
   .goods-info-title{
     margin-bottom: 10px;
     font: 18px/1 "仿宋";
     font-weight: bold;
   }
   .goods-desc{
     color: #666;
     font: 13px/1.2 "仿宋";
     flex: 1;
   }
   .desc{
     overflow: hidden;
     display: -webkit-box;
     -webkit-box-orient: vertical;
     text-overflow: ellipsis;
     -webkit-line-clamp: 3;
   }
  .goods-info-footer{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .goods-price{
    flex: 1;
  }
   .new-price{
     color: #000;
     margin-bottom: 2px;
     font: 12px/1 "仿宋";
   }
   .price-box{
     color: #ff0000;
   }
   .price-info{
     font: 18px/1 "仿宋";
     font-weight: bold;
   }
   .old-price{
     font: 12px/1 "仿宋";
     color: #999;
   }
  .goods-cart{
    display: flex;
    width: 80px;
    overflow: hidden;
  }
  .goods-input{
    flex: 1;
    margin: 0
  }
  .goods-btn{
    display: block;
    width: 25px;
    height: 25px;
    text-align: center;
    line-height: 24px;
    border-radius: 50%;
    background: #2bbbd4;
    color: #fff;
    cursor: pointer;
    border: 1px solid #2bbbd4
  }
   .goods-input-view{
     width: 100%;
     height: 25px;
     text-align: center;
     border: none;
     color: #ff0000;
     font: 16px/1 "仿宋";
     font-weight: bold;
   }
  .goods-footer{
    position: relative;
    height: 45px;
    box-shadow: 0 0 2px rgba(0,0,0,.5);
    z-index: 10;
    background: #333;
    color: #fff;
    padding-left: 10px;
    display: flex;
    align-items: center;
  }
  .goods-footer-info{
    flex: 1;
    display: flex;
  }
  .goods-total-price{
     position: relative;
     padding-right: 10px;
     margin-right: 10px;
     height: 45px;
     font: 14px/45px "仿宋";
  }
   .goods-total-price:after{
     content: '';
     position: absolute;
     right: 0;
     top: 10px;
     bottom: 10px;
     width: 2px;
     background: #999;
   }
  .goods-delivery-price{
    height: 45px;
    font: 14px/45px "仿宋";
    color: #666;
  }
  .goods-footer .price-info{
    font-size: 22px;
  }
  .goods-submit{
    height: 45px;
    padding: 0 10px;
    min-width: 80px;
    border: none;
    font: 16px/1 "仿宋";
    background: #999;
    color: #fff;
    cursor: pointer;
  }
   .goods-submit-active{
     background: #008000;
     color: #fff;
   }
   .goods-disable{
     background: #DDD;
     border-color: #ddd;
     cursor: not-allowed;
   }

</style>
