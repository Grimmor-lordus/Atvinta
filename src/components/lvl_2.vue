<template>
    <div>
      <div class="part_container" name="wallet">
      <div name="title"> 
        <div name="index">02</div>
        <h1>Кошелёк криптовалют</h1>
      </div>
      <div name="coins" id="coins"><ul></ul>
      </div>
      <div class="counter">
        <span name="value">{{ count }}</span><span name="text1">biorobo</span><span> монет</span>
      </div>
      <div class="click_add">
        <button name="add_coin" id="coin_plus" v-on:click="coun_plus">Нацыганить</button>
        <div class="checkBox">
            <label class="custom-checkbox">
              <input type="checkbox" name="chek" value="yes">
              <div class="checkbox"></div>
              <p> Цыганить по 5 монет</p>
            </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DataStorage from'../js/global/data'

export default {
  name: 'App',
  data () {
    return {
      count: Number(DataStorage.getData("coins")) || 0
    }
  },
  methods: {
    coun_plus: function () {
        var checkBox = document.querySelector("[name=wallet] input[name=chek]");
        var increment = checkBox.checked ? 5 : 1;
        
        for (var i=0; i < increment; i++) {
          if (this.count >= 100) {
            break;
          }

          this.count += 1;
        }

        DataStorage.saveData("coins", this.count);
        this.updateCoins();
      },

      updateCoins: function () {
        var coins = document.querySelector("[name=wallet] [name=coins] ul");
        var coinsCount = this.count;
        var coinsHtml = "";

        for(var i=0; i < coinsCount; i++) {
          coinsHtml += '<li><img src="img\\coin.svg" alt="coin"></li>';
        }

        coins.innerHTML = coinsHtml;
      }
  },
  mounted() {
      this.updateCoins();

      DataStorage.event.buyComponent(() => {
        this.count = Number(DataStorage.getData("coins")) || 0;
        this.updateCoins();
      });
  }
}
</script>


<style>
  .part_container {
    padding-top: 125px;
    margin: 0 auto;
    max-width: 1016px;
    position: relative;
  }

  .part_container [name=title] {
    display: flex;
    height: 40px;
  }

  .part_container [name=index] {
    width: 24px;
    line-height: 40px;
    font-size: 12px;
    font-family: 'Montserrat', sans-serif;
    color: #667380;
    font-weight: 500;
    display: inline-block;
  }

  .part_container [name=title] h1 {
    margin: 0;
    line-height: 40px;
    font-weight: 600;
    font-size: 32px;
    margin-left: 106px;
    color: #fff;
    display: inline-block;
    font-family: 'Montserrat', sans-serif;
  }

  [name=wallet] [name=coins] {
    position: relative;
    width: 60%;
    height: 20px;
    margin-top: 60px;
    margin-left: 130px;
  }

  [name=wallet] [name=coins] ul {
    position: absolute;
    display: flex;
    flex-direction: row-reverse;
    margin: 0;
    padding: 0;
    height: 100%;
  }
  
  [name=wallet] [name=coins] ul li {
    list-style: none;
    width: 8px;
    margin: 0;
  }

  [name=wallet] [name=coins] ul li img {
    width: 16px;
    height: 20px;
  }

  .counter {
    width: 310px;
    height: 20px;
    margin-top: 23px;
    margin-left: 130px;
    color: #93a7b9;
  }

  .counter span[name=value] {
    font-weight: bold;
    margin-right: 5px;
  }
  
  .click_add {
    width: 60%;
    height: 24px;
    margin-top: 43px;
    margin-left: 130px;
    display: flex;
  }

  .click_add [name=add_coin] {
    padding: 0;
    background-color: transparent;
    height: 24px;
    width: 102px;
    border: none;
    border-bottom: 1px solid #FF7F22;
    color: #FF7F22;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: 500;
    display: inline;
  }

  label.custom-checkbox input {
    display: none;
  }

  label.custom-checkbox .checkbox  {
    display: inline-flex;
    align-items: center;
    user-select: none;
  }

  label.custom-checkbox .checkbox {
    position: relative;
    display: inline-block;
    flex-shrink: 0;
    flex-grow: 0;
    border: 2px solid #A3B8CC;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;

    margin: 0;
    width: 24px;
    height: 24px;
    line-height: 24px;
    margin-left: 23px;
  }

  label.custom-checkbox input:checked ~ .checkbox {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23ff7f22' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
    color: black;
  }

  .click_add p {
    position: absolute;
    display: inline-block;
    margin: 0;
    line-height: 24px;
    font-size: 16px;
    margin-left: 12px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    color: #fff;
  }

</style>
