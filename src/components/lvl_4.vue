<template>
	<div class="part_container" id="storage">
	  <div name="title"> 
		<div name="index">04</div>
		<h1>Склад</h1>
	  </div>
	  <div class="wrap_storage">

		  <div class="wrap_product">
			  <p class="title_product">Биомеханизм</p>
			  <p name="price">Стоимость: <span class="price">{{ getComponents.biomechanism.sell_coast }} монет</span></p>
			  <p class="component_count"><span name="value">{{ getUserComponents.biomechanism.count - getUserComponents.biomechanism.in_process.count }}</span> шт</p>
			  <div name="btn_container"><button name="blue" v-on:click="sell('biomechanism')">Продать</button></div>
		  </div>

		  <div class="wrap_product">
			  <p class="title_product">Процессор</p>
			  <p name="price">Стоимость: <span class="price">{{ getComponents.cpu.sell_coast }} монет</span></p>
			  <p class="component_count"><span name="value">{{ getUserComponents.cpu.count - getUserComponents.cpu.in_process.count  }}</span> шт</p>
			  <div name="btn_container"><button name="blue" v-on:click="sell('cpu')">Продать</button></div>
		  </div>

		  <div class="wrap_product">    
			  <p class="title_product">Душа</p>
			  <p name="price">Стоимость: <span class="price">{{ getComponents.soul.sell_coast }} монет</span></p>
			  <p class="component_count"><span name="value">{{ getUserComponents.soul.count - getUserComponents.soul.in_process.count  }}</span> шт</p>
			  <div name="btn_container"><button name="blue" v-on:click="sell('soul')">Продать</button></div>
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

			sell: function (name) {
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

				if (userComponent.count <= 0) {
					this.$parent.$emit('showMessage', `Не достаточно компонента "${componentInfo.name}", для продажи `, "Ошибка");
					return;
				}

				userComponent.count -= 1;
				coins += componentInfo.sell_coast;

				if (coins >= 100) {
					this.$parent.$emit('showMessage', `Количество монет ограничено! Вы не можете иметь больше 100 монет`, "Ошибка");
					return;
				}

				userComponents[name] = userComponent;

				this.setUserComponents(userComponents);
				this.setCoins(coins);
			}
		},

		mounted() {
			
		}
	}
</script>

<style lang='scss' scoped>

	.wrap_storage {
		margin: auto;
		padding-top: 60px;
		width: 80%;
		height: 170px;
		margin-left: 106px;
		display: flex;
		flex-direction: row;
	}

	.wrap_product {
		display: flex;
		flex-direction: column;
		margin: 0 auto 0 auto;
		width: 236px;
	}

	p {
		margin: 5px;
		padding: 0px;
		width: 100%;
	}

	.title_product {
		margin: 0;
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

	.wrap_product [name=price] {
		font-family: $font;
		font-size: 16px;
		font-style: normal;
		font-weight: 600;
		line-height: 24px;
		letter-spacing: 0em;
		text-align: center;
		color: #A3B8CC;
		white-space: nowrap;
		margin: 0 auto 0 auto;
	}

	.component_count {
		text-align: center;
		color: #ffffff;
		font-weight: 700;
		margin: 15px auto 24px auto;
	}

	.wrap_product [name=btn_container] {
		display: flex;
	}

	.wrap_product [name=btn_container] [name=blue] {
		background: transparent;
		height: 48px;
		width: 200px;
		border: 2px solid;  
		border: $blueGradient;
		border-radius: 60px;
		color: $blue;
		font-family: $font;
		font-size: 16px;
		font-weight: 600;
		margin: auto;
	}

	.wrap_product [name=btn_container] [name=blue]:hover {
		background: $blue;
		box-shadow: $boxShadowBlue;
		border: 2px solid $blue;
		color: #212529;
	}

	.wrap_product [name=btn_container] [name=blue]:active {
		background: transparent;
		box-shadow: none;
		border: 2px solid $lowBlue;
		color: $lowBlue;
	}

	.wrap_product [name=btn_container] [name=blue]:disabled {
		background: transparent;
		border: 2px solid #4C5865;
		color:#4C5865;
	}
</style>