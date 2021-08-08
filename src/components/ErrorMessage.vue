<template>
	<div id="ErrorMessage" v-show="visibile">
		<div class="background" v-on:click="hide"></div>
		<div class="modal_window">
			<div class="ico_container">
				<img name="message_ico" v-bind:src="img_url" v-show="show_icon" alt="">
			</div>
			<button class="close_button" v-on:click="hide"><img src="img\cross.svg" alt=""></button>
			<div class="message_container">
				<p class="title">{{ title }}</p>
				<p class="message">{{ message }}</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "MessageBox",

	data() {
		return {
			title: "Title",
			message: "Message",
			img_url: "",
			visibile: false,
			show_icon: false
		}
	},

	props: ['showMessage', 'hideMessage'],
	watch: {
		showMessage: function (messageData) {
			this.show(messageData.message, messageData.title, messageData.icon)
		},
		
		hideMessage: function (messageData) {
			this.hide()
		}
	},

	methods: {
		show: function (msg, msgTitle, imgUrl) {
			if (!msg) {
				return
			}

			this.title = msgTitle || "Собщение";
			this.message = msg;
			this.show_icon = (this.img_url = imgUrl)

			this.visibile = true
		},
		hide: function () {
			this.visibile = false
		}
	}
}
</script>

<style scoped>
	#ErrorMessage {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 1000;
	}

	.background {
		position: relative;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.397)
	}

	.modal_window {
		position: relative;
		width: 496px;
		min-height: 140px;
		background-color: #fff;
		border-radius: 10px;
		z-index: 999;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		overflow: auto;
		display: flex;
		flex-direction: row;
	}

	.ico_container {
		display: flex;
		height: 100%;
		width: 120px;
	}

	.ico_container img {
		width: 43px;
		height: 52px;
		margin: 40px auto;
	}

	.close_button {
		position: absolute;
		width: 30px;
		height: 30px;
		background: transparent;
		border: none;
		cursor: pointer;
		right: 10px;
		top: 10px;
	}

	.close_button img {
		width: 100%;
		height: 100%;
	}

	.message_container {
		padding: 40px 0;
	}

	.message_container .title {
		font-size: 32px;
		font-style: normal;
		font-weight: 600;
		letter-spacing: 0em;
		text-align: left;
		margin: 0;
		margin-bottom: 10px;
	}

	.message_container .message {
		height: 64px;
		font-size: 20px;
		font-style: normal;
		font-weight: 600;
		line-height: 32px;
		letter-spacing: 0em;
		text-align: left;
		color: #4C5865;
		margin: 0;
	}
</style>
