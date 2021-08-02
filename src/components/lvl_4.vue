<template>
    <div class="part_container" id="storage">
      <div name="title"> 
        <div name="index">04</div>
        <h1>Склад</h1>
      </div>
      <div class="wrap_storage">

          <div class="wrap_product">
              <p class="title_product">Биомеханизм</p>
              <p name="price">Стоимость: <span class="price">{{ biomechanism.sell_coast }} монет</span></p>
              <p class="component_count"><span name="value">{{ biomechanism.count }}</span> шт</p>
              <div name="btn_container"><button name="blue" v-on:click="sell('biomechanism')">Продать</button></div>
          </div>

          <div class="wrap_product">
              <p class="title_product">Процессор</p>
              <p name="price">Стоимость: <span class="price">{{ cpu.sell_coast }} монет</span></p>
              <p class="component_count"><span name="value">{{ cpu.count }}</span> шт</p>
              <div name="btn_container"><button name="blue" v-on:click="sell('cpu')">Продать</button></div>
          </div>

          <div class="wrap_product">    
              <p class="title_product">Душа</p>
              <p name="price">Стоимость: <span class="price">{{ soul.sell_coast }} монет</span></p>
              <p class="component_count"><span name="value">{{ soul.count }}</span> шт</p>
              <div name="btn_container"><button name="blue" v-on:click="sell('soul')">Продать</button></div>
          </div>

      </div>
    </div>
    
</template>

<script>
import DataStorage from '../js/global/data'

 export default {
        data () {
            return {
                biomechanism: {
                    coast: 0,
                    sell_coast: 5,
                    count: 0
                },

                cpu: {
                    coast: 0,
                    sell_coast: 3,
                    count: 0
                },

                soul: {
                    coast: 0,
                    sell_coast: 15,
                    count: 0
                },
            }
        },
        
        methods: {
            update: function (name) {
                var getResut = DataStorage.getComponents();
                
                if (getResut.code != 0) {
                    alert(getResut.message);
                    return;
                }

                var components = getResut.data;
                
                this.biomechanism = components.biomechanism;
                this.cpu = components.cpu;
                this.soul = components.soul;
            },

            sell: function (name) {
                var result = DataStorage.sellComponent(name);
               
                if(result.code != 0) {
                    alert(result.message);
                    return;
                }
            }
        },

        mounted() {
            this.update();

            DataStorage.event.buyComponent(() => {
                this.update();
            });

             DataStorage.event.sellComponent(() => {
                this.update();
            });
        }
    }
</script>

<style>

    #storage .wrap_storage {
        margin: auto;
        padding-top: 50px;
        width: 80%;
        height: 170px;
        margin-left: 106px;
        display: flex;
        flex-direction: row;
    }

    #storage .wrap_product {
        display: flex;
        flex-direction: column;
        margin: auto;
        width: 236px;
    }

    #storage p {
        margin: 5px;
        padding: 0px;
        width: 100%;
    }

    #storage .title_product {
        margin-top: 0;
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

    #storage [name=price] {
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: center;
        color: #A3B8CC;
        white-space: nowrap;
    }

    #storage .component_count {
        text-align: center;
        color: #ffffff;
        font-weight: 700;
    }

    #storage [name=btn_container] {
        display: flex;
        margin-top: 10px;
    }

    #storage [name=btn_container] [name=blue] {
        background: transparent;
        height: 48px;
        width: 200px;
        border: 2px solid;  
        border: linear-gradient(90deg, #22B3E3 0%, #7CDAF9 52.6%, #22B3E3 100%);
        border-radius: 60px;
        color: #7CDAF9;
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
        font-weight: 600;
        margin: auto;
    }

    #storage [name=btn_container] [name=blue]:hover {
        background: #7CDAF9;
        box-shadow: 0 0 1px #22b3e3, 0 0 1px #7cdaf9, 0 8px 30px #22b3e370;
        border: 2px solid #7CDAF9;
        color: #212529;
    }

    #storage [name=btn_container] [name=blue]:active {
        background: transparent;
        box-shadow: none;
        border: 2px solid #22B3E3;
        color: #22B3E3;
    }

    #storage [name=btn_container] [name=blue]:disabled {
        background: transparent;
        border: 2px solid #4C5865;
        color:#4C5865;
    }
</style>