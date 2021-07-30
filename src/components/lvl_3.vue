<template>
    <div class="part_container2" name="market">
      <div name="title"> 
        <div name="index">03</div>
        <h1>Рынок комплектующих</h1>
      </div>
      <div class="wrap_market">

          <div class="wrap_product" id="biomechanism">
              <div name="img_bio"><img src="img\\Subtract.svg" alt=""></div>
              <div class="title_product">Биомеханизм</div>
              <div name="price"><span class="text_price">Стоимость: <span class="price">{{ biomechanism }} монет</span></span></div>
              <div name="btn_container">
                <button name="install" v-on:click="buy_product('biomechanism')">Установить</button>
              </div>
          </div>

          <div class="wrap_product" id="cpu">
              <div name="img_bio"><img src="img\\Vector.svg" alt=""></div>
              <div class="title_product">Процессор</div>
              <div name="price"><span class="text_price">Стоимость: <span class="price">{{ cpu }} монет</span></span></div>
              <div name="btn_container">
                <button name="install" v-on:click="buy_product('cpu')">Установить</button>
              </div>
          </div>

          <div class="wrap_product" id="soul">
              <div name="img_bio"><img src="img\\Ellipse 5.svg" alt=""><img name="face" src="img\\Group 16.svg" alt=""></div>
              <div class="title_product">Душа</div>
              <div name="price"><span class="text_price">Стоимость: <span class="price">{{ soul }} монет</span></span></div>
              <div name="btn_container">
                <button name="install" v-on:click="buy_product('soul')">Установить</button>
              </div>
          </div>

      </div>
    </div>
    
</template>

<script>
import DataStorage from'../js/global/data'

    export default {
        data () {
            return {
                biomechanism: 0,
                cpu: 0,
                soul: 0,
            }
        },

        methods: {
            buy_product: function (name) {
                var result = DataStorage.buyComponent(name);

                if(result.code != 0) {
                    alert(result.message);
                    return;
                }
            },

            update_coast: function () {
                var getResut = DataStorage.getComponents();
                
                if (getResut.code != 0) {
                    alert(getResut.message);
                    return;
                }

                var components = getResut.data;
                
                this.biomechanism = components.biomechanism.coast;
                this.cpu = components.cpu.coast;
                this.soul = components.soul.coast;
            }
        },

        mounted() {
            this.update_coast();
        }
    }
</script>

<style>
    .part_container2 {
        padding-top: 100px;
        margin: 0 auto;
        max-width: 1016px;
        position: relative;
    }

    .part_container2 [name=title] {
        display: flex;
        height: 40px;
    }

    .part_container2 [name=index] {
        width: 24px;
        line-height: 40px;
        font-size: 12px;
        font-family: 'Montserrat', sans-serif;
        color: #667380;
        font-weight: 500;
        display: inline-block;
    }

    .part_container2 [name=title] h1 {
        margin: 0;
        line-height: 40px;
        font-weight: 600;
        font-size: 32px;
        margin-left: 106px;
        color: #fff;
        display: inline-block;
        font-family: 'Montserrat', sans-serif;
    }

    .wrap_market {
        margin-top: 90px;
        width: 80%;
        height: 260px;
        margin-left: 106px;
        display: flex;
    }

    .wrap_product {
        margin-left: 24px;
        width: 236px;
        height: 260px;
    }

    .wrap_product [name=img_bio] {
        width: 88px;
        height: 88px;
        margin-left: auto;
        margin-right: auto;
        display: flex;
    }

    .wrap_product [name=img_bio] [name=face] {
        width: 55.88px;
        height: 54px;
        margin-top: 22px;
        margin-left: 17px;
        position: absolute;
    }

    .title_product {
        margin-top: 56px;
        width: 200px;
        height: 32px;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        font-family: 'Montserrat', sans-serif;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: 32px;
        letter-spacing: 0em;
        text-align: center;
        color: #fff;
    }

    .text_price {
        margin-left: 15%;
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: center;
        color: #A3B8CC;
    }

    .price {
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: center;
        color: #A3B8CC;
    }

    .wrap_product [name=price] {
        margin-left: auto;
        margin-right: auto;
    }

    [name=btn_container] [name=install] {
        margin-top: 24px;
        margin-right: 18px;
        background: linear-gradient(180deg, #FF7F22 0%, #FF5722 100%);
        height: 48px;
        width: 200px;
        padding: 12px 0 12px 0;
        border: 2px solid #FF7F22;
        box-sizing: border-box;
        border-radius: 60px;
        color: #fff;
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
        font-weight: 600;
    }

    [name=btn_container] [name=install]:hover {
        background: linear-gradient(0deg, #FF5722, #FF5722);
    }

    [name=btn_container] [name=install]:active {
        background: #FF7F22;
    }

    [name=btn_container] [name=install]:disabled {
        background: #4C5865;
        border: 2px solid #4C5865;
        color: #7D90A6;
    }
</style>
