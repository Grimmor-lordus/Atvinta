<template>
    <div class="part_container2" name="storage">
      <div name="title"> 
        <div name="index">04</div>
        <h1>Склад</h1>
      </div>
      <div class="wrap_storage">

          <div class="wrap_product">
              <div class="title_product">Биомеханизм</div>
              <div name="price"><span class="text_price">Стоимость: <span class="price">5 монет</span></span></div>
              <div class="counter">
                <span name="value">{{ quantity }}</span><span> шт</span>
              </div>
              <div name="btn_container">
                <button name="blue">Продать</button>
              </div>
          </div>

          <div class="wrap_product">
              <div class="title_product">Процессор</div>
              <div name="price"><span class="text_price">Стоимость: <span class="price">3 монет</span></span></div>
              <div class="counter">
                <span name="value">{{ quantity }}</span><span> шт</span>
              </div>
              <div name="btn_container">
                <button name="blue">Продать</button>
              </div>
          </div>

          <div class="wrap_product">    
              <div class="title_product">Душа</div>
              <div name="price"><span class="text_price">Стоимость: <span class="price">15 монет</span></span></div>
              <div class="counter">
                <span name="value">{{ quantity }}</span><span> шт</span>
              </div>
              <div name="btn_container">
                <button name="blue">Продать</button>
              </div>
          </div>

      </div>
    </div>
    
</template>

<script>
 export default {
        name: 'App',
        components: {
        },
        methods: {
        },
        data () {
            return {
                quantity: ""
            }
        }
    }
</script>

<style>
    .part_container2 {
        padding-top: 112px;
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

    .wrap_storage {
        margin-top: 60px;
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

    [name=btn_container] [name=blue] {
        margin-top: 24px;
        margin-right: 18px;
        background: transparent;
        height: 48px;
        width: 200px;
        padding: 12px 0 12px 0;
        border: 2px solid;  
        border: linear-gradient(90deg, #22B3E3 0%, #7CDAF9 52.6%, #22B3E3 100%);
        border-radius: 60px;
        color: #7CDAF9;
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
        font-weight: 600;
    }

    [name=btn_container] [name=blue]:hover {
        background: #7CDAF9;
        border: 2px solid #7CDAF9;
        color: #212529;
    }

    [name=btn_container] [name=blue]:active {
        background: transparent;
        border: 2px solid #22B3E3;
        color: #22B3E3;
    }

    [name=btn_container] [name=blue]:disabled {
        background: transparent;
        border: 2px solid #4C5865;
        color:#4C5865;
    }
</style>