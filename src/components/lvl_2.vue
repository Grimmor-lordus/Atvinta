<template>
  <div class="part_container" id="wallet">
    <div name="title"> 
      <div name="index">02</div>
      <h1>Кошелёк криптовалют</h1>
    </div>
    <div name="coins" id="coins">
      <ul></ul>
    </div>
    <div class="counter">
      <p><span name="value">{{ count }}</span> biorobo <span name="text">{{ count_text }}</span></p>
    </div>
    <div class="click_add">
      <button name="add_coin" id="coin_plus" v-on:click="coun_plus">Нацыганить</button>
      <div class="checkBox">
          <label class="custom-checkbox">
            <input type="checkbox" name="chek">
            <div class="checkbox"></div>
            <p> Цыганить по 5 монет</p>
          </label>
      </div>
    </div>
  </div>
</template>

<script>
import DataStorage from '../js/global/data'

export default {
  name: 'App',
  data () {
    return {
      count: Number(DataStorage.getData("coins")) || 0,
      count_text: "монет"
    }
  },
  methods: {
    coun_plus: function () {
        var checkBox = document.querySelector("#wallet input[name=chek]");
        var increment = checkBox.checked ? 5 : 1;
        
        for (var i=0; i < increment; i++) {
          if (this.count >= 100) {
            break;
          }

          this.count += 1;
        }

        this.count_text = this.declOfNum(this.count, ["монета", "монеты", "монет"]);

        DataStorage.saveData("coins", this.count);
        this.updateCoins();
      },

      updateCoins: function () {
        this.count = Number(DataStorage.getData("coins")) || 0;

        var coins = document.querySelector("#wallet [name=coins] ul");
        var coinsCount = this.count;
        var coinsHtml = "";

        for(var i=0; i < coinsCount; i++) {
          coinsHtml += '<li><img src="img\\coin.svg" alt="coin"></li>';
        }

        coins.innerHTML = coinsHtml;
      },

      declOfNum: function (number, words) {  
        return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? Math.abs(number) % 10 : 5]];
      }
  },
  mounted() {
      this.updateCoins();

      DataStorage.event.buyComponent(() => {
        this.updateCoins();
      });

      DataStorage.event.sellComponent(() => {
          this.updateCoins();
      });
  }
}
</script>


<style>
  #wallet {
    padding-top: 110px;
    margin: 0 auto;
    position: relative;
  }

  #wallet [name=coins] {
    position: relative;
    width: 60%;
    height: 20px;
    margin-top: 60px;
    margin-left: 130px;
  }

  #wallet [name=coins] ul {
    position: absolute;
    display: flex;
    flex-direction: row-reverse;
    margin: 0;
    padding: 0;
    height: 100%;
  }
  
  #wallet [name=coins] ul li {
    list-style: none;
    width: 8px;
    margin: 0;
  }

  #wallet  [name=coins] ul li img {
    width: 16px;
    height: 20px;
  }

  #wallet .counter {
    width: 310px;
    height: 20px;
    margin-top: 23px;
    margin-left: 130px;
    color: #93a7b9;
  }

  #wallet .counter span[name=value] {
    font-weight: bold;
    margin-right: 5px;
  }
  
  #wallet .click_add {
    width: 60%;
    height: 24px;
    margin-top: 43px;
    margin-left: 130px;
    display: flex;
  }

  #wallet .click_add [name=add_coin] {
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

  #wallet label.custom-checkbox input {
    display: none;
  }

  #wallet label.custom-checkbox .checkbox {
    display: inline-flex;
    align-items: center;
    user-select: none;
    position: relative;
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

  #wallet label.custom-checkbox input:checked ~ .checkbox {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23ff7f22' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
    color: black;
  }

  #wallet .click_add p {
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
