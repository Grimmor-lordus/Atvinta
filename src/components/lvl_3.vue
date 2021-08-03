<template>
    <div class="part_container" id="market">
      <div name="title"> 
        <div name="index">03</div>
        <h1>Рынок комплектующих</h1>
      </div>
      <div class="wrap_market">

          <div class="wrap_product" id="biomechanism">
              <div name="img_bio"><img src="img\\bio_a.svg" alt=""></div>
              <div class="title_product">Биомеханизм</div>
              <div name="price"><span class="text_price">Стоимость: <span class="price">{{ biomechanism }} монет</span></span></div>
              <div name="btn_container">
                <button name="install" v-on:click="buy_product('biomechanism')">Установить</button>
              </div>
          </div>

          <div class="wrap_product" id="cpu">
              <div name="img_bio"><img src="img\\cpu_a.svg" alt=""></div>
              <div class="title_product">Процессор</div>
              <div name="price"><span class="text_price">Стоимость: <span class="price">{{ cpu }} монет</span></span></div>
              <div name="btn_container">
                <button name="install" v-on:click="buy_product('cpu')">Установить</button>
              </div>
          </div>

          <div class="wrap_product" id="soul">
              <div name="img_bio"><img name="ellips" src="img\\Ellipse 5.svg" alt=""><img name="face" src="img\\soul_a.svg" alt=""></div>
              <div class="title_product">Душа</div>
              <div name="price"><span class="text_price">Стоимость: <span class="price">{{ soul }} монет</span></span></div>
              <div name="btn_container">
                <button name="install" v-on:click="buy_product('soul')">Установить</button>
              </div>
          </div>

      </div>
      <Message />
    </div>
    
</template>

<script>
import DataStorage from '../js/global/data'
import Message from '../components/ErrorMessage.vue'

    export default {
        components: {
            Message
        },
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
                    Message.methods.show(result.message, "Ошибка");
                    return;
                }
            },

            update_coast: function () {
                var getResut = DataStorage.getComponents();
                
                if (getResut.code != 0) {
                    Message.methods.show(getResut.message, "Ошибка");
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
    #market .part_container2 {
        margin-top: 100px !important;
        height: 400px;
        margin: 0 auto;
        position: relative;
    }

    #market .wrap_market {
        display: flex;
        flex-direction: row;
        width: 80%;
        margin: auto;
        padding-top: 90px;
    }

    #market .wrap_product {
        display: flex;
        flex-direction: column;
        margin: auto;
        width: 236px;
    }

    #market .wrap_product [name=img_bio] {
        filter: drop-shadow(0 0 30px #FF7F22);
        width: 88px;
        height: 88px;
        margin-left: auto;
        margin-right: auto;
        display: flex;
    }

    #market .title_product {
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

    #market .wrap_product [name=img_bio] {
        width: 80px;
        height: 80px;
        margin-bottom: 49px;
    }

    #market .wrap_product [name=img_bio] [name=ellips] {
        width: 80px;
        height: 80px;
        position: absolute;
    }

    #market .wrap_product [name=img_bio] [name=face] {
        width: 55.88px;
        height: 54px;
        margin-top: 18px;
        margin-left: 10px;
        position: absolute;
    }

    #market [name=price] {
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: center;
        color: #A3B8CC;
        white-space: nowrap;
        margin: 5px 0px;
    }

    #market .text_price {
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: center;
        color: #A3B8CC;
        white-space: nowrap;
        margin: 0;
    }

    #market [name=btn_container] {
        display: flex;
        width: 100%;
    }

    #market [name=btn_container] [name=install] {
        margin: 19px auto;
        background: linear-gradient(180deg, #FF7F22 0%, #FF5722 100%);
        height: 48px;
        width: 200px;
        border: none;
        box-shadow: 0 6px 10px #0000003b;
        box-sizing: border-box;
        border-radius: 60px;
        color: #fff;
        font-size: 16px;
        font-weight: 600;
    }

    #market [name=btn_container] [name=install]:hover {
        box-shadow: none;
        background: linear-gradient(0deg, #FF5722, #FF5722);
    }

    #market [name=btn_container] [name=install]:active {
        box-shadow: none;
        background: #FF7F22;
    }

    #market [name=btn_container] [name=install]:disabled {
        background: #4C5865;
        border: 2px solid #4C5865;
        color: #7D90A6;
    }
</style>
