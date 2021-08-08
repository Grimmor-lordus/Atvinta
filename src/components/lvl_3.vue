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
			  <div name="price"><span class="text_price">Стоимость: <span class="price">{{ getComponents.biomechanism.coast }} монет</span></span></div>
			  <div name="btn_container">
				<button name="install" v-on:click="buy_product('biomechanism')">Установить</button>
			  </div>
		  </div>

		  <div class="wrap_product" id="cpu">
			  <div name="img_bio"><img src="img\\cpu_a.svg" alt=""></div>
			  <div class="title_product">Процессор</div>
			  <div name="price"><span class="text_price">Стоимость: <span class="price">{{ getComponents.cpu.coast }} монет</span></span></div>
			  <div name="btn_container">
				<button name="install" v-on:click="buy_product('cpu')">Установить</button>
			  </div>
		  </div>

		  <div class="wrap_product" id="soul">
			  <div name="img_bio"><img name="ellips" src="img\\Ellipse 5.svg" alt=""><img name="face" src="img\\soul_a.svg" alt=""></div>
			  <div class="title_product">Душа</div>
			  <div name="price"><span class="text_price">Стоимость: <span class="price">{{ getComponents.soul.coast }} монет</span></span></div>
			  <div name="btn_container">
				<button name="install" v-on:click="buy_product('soul')">Установить</button>
			  </div>
		  </div>
	  </div>
	</div>
	
</template>

<script>
	import {mapGetters, mapMutations, mapActions} from "vuex";
	export default {
		computed: mapGetters(['getCoins', 'getUserComponents', 'getComponents']),

		methods: {
			...mapMutations(['setCoins', 'setUserComponents']),

			buy_product: function (name) {
				let componentInfo = this.getComponents[name],
					userComponents = this.getUserComponents;

				let userComponent = userComponents[name],
					coins = this.getCoins;

				if (!componentInfo) {
					this.$parent.$emit('showMessage', "Не найден компонент с названием - " + name, "Ошибка");
					return;
				}

				if (!userComponent) {
					this.$parent.$emit('showMessage', "У пользователя не найден компонент с идентификатором - " + name, "Ошибка");
					return;
				}

				if (coins < componentInfo.coast) {
					this.$parent.$emit('showMessage', `Не хватает монет, для покупки компонента "${componentInfo.name}"`, "Ошибка");
					return;
				}

				userComponent.count += 1;
				coins -= componentInfo.coast;

				userComponents[name] = userComponent;

				this.setUserComponents(userComponents);
				this.setCoins(coins);
			}
		}
	}
</script>

<style lang='scss' scoped>
	.part_container2 {
		margin-top: 100px !important;
		height: 400px;
		margin: 0 auto;
		position: relative;
	}

	.wrap_market {
		display: flex;
		flex-direction: row;
		width: 80%;
		margin: auto;
		padding-top: 90px;
	}

	.wrap_product {
		display: flex;
		flex-direction: column;
		margin: auto;
		width: 236px;
	}

	.wrap_product [name=img_bio] {
		filter: drop-shadow(0 0 30px $orangeSecondary);
		width: 88px;
		height: 88px;
		margin-left: auto;
		margin-right: auto;
		display: flex;
	}

	.title_product {
		width: 200px;
		height: 32px;
		margin-left: auto;
		margin-right: auto;
		text-align: center;
		font-family: $font;
		font-size: 20px;
		font-style: normal;
		font-weight: 600;
		line-height: 32px;
		letter-spacing: 0em;
		text-align: center;
		color: #fff;
	}

	.wrap_product [name=img_bio] {
		width: 80px;
		height: 80px;
		margin-bottom: 49px;
	}

	.wrap_product [name=img_bio] [name=ellips] {
		width: 80px;
		height: 80px;
		position: absolute;
	}

	.wrap_product [name=img_bio] [name=face] {
		width: 55.88px;
		height: 54px;
		margin-top: 18px;
		margin-left: 10px;
		position: absolute;
	}

	.wrap_product [name=price] {
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

	.text_price {
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

	.wrap_product [name=btn_container] {
		display: flex;
		width: 100%;
	}

	.wrap_product [name=btn_container] [name=install] {
		margin: 19px auto;
		background: linear-gradient(180deg, $orangeSecondary 0%, $orangePrimary 100%);
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

	.wrap_product [name=btn_container] [name=install]:hover {
		box-shadow: none;
		background: linear-gradient(0deg, $orangePrimary, $orangePrimary);
	}

	.wrap_product [name=btn_container] [name=install]:active {
		box-shadow: none;
		background: $orangeSecondary;
	}

	.wrap_product [name=btn_container] [name=install]:disabled {
		background: #4C5865;
		border: 2px solid #4C5865;
		color: #7D90A6;
	}
</style>
