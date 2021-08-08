<template>
	<div class="part_container" id="wallet">
		<div name="title"> 
			<div name="index">02</div>
			<h1>Кошелёк криптовалют</h1>
		</div>
		<div class="coins" id="coins">
			<ul>
				<li v-for="coin in getCoins" v-bind:key="coin"><img src="img\\coin.svg" alt="coin"></li>
			</ul>
		</div>
		<div class="counter">
			<p><span name="value">{{ getCoins }}</span> biorobo <span name="text">{{ getCoinsName }}</span></p>
		</div>
		<div class="click_add">
			<button name="add_coin" id="coin_plus" v-on:click="add_coin">Нацыганить</button>
			<div class="checkBox">
					<label class="custom-checkbox">
						<input type="checkbox" name="chek"  v-model="use_coins_x5">
						<div class="checkbox"></div>
						<p> Цыганить по 5 монет</p>
					</label>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapGetters, mapMutations} from "vuex";

	export default {
	data(){
			return {
				use_coins_x5: false
			}
	},

	computed: mapGetters(['getCoins', 'getCoinsName']),

	methods: {
			...mapMutations(['setCoins']),

			add_coin: function () {
					let coinsNumber = this.use_coins_x5 ? 5 : 1;
					let coins = this.getCoins + coinsNumber;
					
					if (coins > 100) {
						this.$parent.$emit('showMessage', "Вы не можете нацыганить более 100 монет biorobo", "Количество монет ограничено", "img\\coin.svg");
						return;
					}

					this.setCoins(coins);
			}
	}
}
</script>

<style lang='scss' scoped>
	#wallet {
		padding-top: 110px;
		margin: 0 auto;
		position: relative;
	}

	.coins {
		position: relative;
		width: 60%;
		height: 20px;
		margin-top: 60px;
		margin-left: 130px;
	}

	.coins ul {
		position: absolute;
		display: flex;
		flex-direction: row-reverse;
		margin: 0;
		padding: 0;
		height: 100%;
	}
	
	.coins ul li {
		list-style: none;
		width: 8px;
		margin: 0;
	}

	.coins ul li img {
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
		border-bottom: 1px solid $orangeSecondary;
		color: $orangeSecondary;
		font-family: $font;
		font-size: 16px;
		font-weight: 500;
		display: inline;
	}

	label.custom-checkbox input {
		display: none;
	}

	label.custom-checkbox .checkbox {
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
		font-family: $font;
		font-weight: 500;
		color: #fff;
	}

</style>
