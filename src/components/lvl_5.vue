<template>
	<div class="part_container" id="storage">
		<div name="title"> 
			<div name="index">05</div>
			<h1>Производство</h1>
		</div>
		<div class="row">
			<table class="processing">
				<tr>
					<td>
						<div class="title_control">Тип биоробота:</div>
					</td>
				</tr>
				<tr  class="custom_radio">
					<td>
						<label>
							<input type="radio" value="frontend" name="biorobot_type" checked v-model="biorobot_type" v-on:change="update">
							<div class="dotte_border">
								<div class="dotte"></div>
							</div>
							<span> FrovntEnd</span>
						</label>
					</td>
					<td>
						<label>
								<input type="radio" value="designer" name="biorobot_type" v-model="biorobot_type" v-on:change="update">
								<div class="dotte_border">
									<div class="dotte"></div>
								</div>
								<span> Designer</span>
							</label>
					</td>
				</tr>
				<tr>
					<td>
						<div class="title_control">Стабилизатор:</div>
					</td>
				</tr>
				<tr class="custom_radio">
					<td>
						<label>
							<input type="radio" value="male" name="stabilizer" checked v-model="stabilizer" v-on:change="update">
							<div class="dotte_border">
								<div class="dotte"></div>
							</div>
							<span> Male</span>
						</label>
					</td>
					<td>
						<label>
							<input type="radio" value="female" name="stabilizer" v-model="stabilizer" v-on:change="update">
							<div class="dotte_border">
								<div class="dotte"></div>
							</div>
							<span> Famale</span>
						</label>
					</td>
				</tr>
				<tr>
					<td colspan="10">
						<button name="create_biorobot" v-bind:disabled="!ready_to_process" v-on:click="createBiorobot">Произвести за 10 монет</button>
					</td>
				</tr>
			</table>
			<div class="control_wrap">
				<table name="details">
					<tr v-for=" component, componentName in getComponents" v-bind:key="componentName">
						<td v-for="index in component.need_to_create" v-bind:key="index">
							<div class="control" v-bind:name="componentName" v-bind:status="getStatus(componentName, index - 1)" v-on:click="updateStatus(componentName, index - 1, getStatus(componentName, index - 1))">
								<div name="icon"></div>
							</div>
						</td>
					</tr>
				</table>
				<p name="info">{{ info_text }}</p>
			</div> 
			<div class="display_robot">
				<img v-bind:src="robot_img">
			</div>
		</div>
	</div>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from "vuex";

export default {
	data() {
		return {
			biorobot_type: "frontend",
			stabilizer: "male",
			robot_img: ".\\img\\biorobots\\male_frontend_frontend.svg",
			ready_to_process: false,
			is_created: false,
			info_text: ""
		}
	},
	
	computed: mapGetters(['getCoins', 'getUserComponents', 'getComponents']),

	methods: {
		...mapMutations(['setCoins', 'setUserComponents']),
		
		update: function () {
			let isReadyToProcess 	= true,
					userComponents 		= this.getUserComponents,
					components 				= this.getComponents,
					status 						= "to_process",
					infoText					=	"",
					missingComponents = []

			for (let componentId in userComponents) {

				let userComponent 		= userComponents[componentId],
						inProcess 				= userComponent.in_process,
						inProcessCount 		= inProcess.count,
						needToCreate			= components[componentId].need_to_create,
						componentName			= components[componentId].name

				if (needToCreate > inProcessCount) {
					missingComponents.push({
						name: `${componentName}`.toLowerCase(),
						count: needToCreate - inProcessCount,
					})

					isReadyToProcess = false
				}
			}

			if(!isReadyToProcess) {
				status = 'locked'
				infoText = "Для производства биоробота не хватает "

				for (let i=0; i < missingComponents.length; i++) {
					let missingComponent = missingComponents[i]
					let componentName		= missingComponent.name,
							componentCount	=	missingComponent.count + " ",
							prefix 					= (i != 0) ? ", " : ""

					if (componentName == "душа") {
						componentCount = ""
						componentName = "души"
					} else {
						componentName = componentName + "а "
					}

					if(i > 0 && i == missingComponents.length-1) {
						prefix = "и "
					}

					infoText += `${prefix}${componentCount}${componentName}`
				}
			}

			this.ready_to_process = isReadyToProcess

			if (this.is_created) {
				// this.isCreated = false;
				this.robot_img = `.\\img\\biorobots\\${this.stabilizer}_${this.biorobot_type}.svg`
				return
			}

			this.info_text = infoText
			this.robot_img = `.\\img\\biorobots\\${this.stabilizer}_${this.biorobot_type}_${status}.svg`
		},

		updateStatus: function (componentName, index, status) {
				let userComponents = this.getUserComponents;
			
				if (status == "a") {
					delete userComponents[componentName].in_process[index];
				} 
				else if (status == "b") {
					userComponents[componentName].in_process[index] = true;
				} 
				else {
					return;
				}
				
				userComponents[componentName].in_process.count = Object.keys(userComponents[componentName].in_process).length -1;
				console.log(Object.keys(userComponents[componentName].in_process).length);
				this.setUserComponents(userComponents);
				this.update();
		}, 

		getStatus(componentName, index) {
				let inProcess = this.getUserComponents[componentName].in_process[index];

				if (this.getUserComponents[componentName].count <= index) {
					return 'c';
				}

				return inProcess ? 'a' : 'b';
		},
		
		createBiorobot: function () {
			if (!this.ready_to_process) {
				return;
			}

			let userComponents = this.getUserComponents;
			let components = this.getComponents;
			let coins = this.getCoins;

			if (coins < 10) {
				this.$parent.$emit('showMessage', "Недостаточно средств, для производства биоробота", "Сообщение");
				return;
			}

			for (let componentName in userComponents) {
				let userComponent = userComponents[componentName];

				userComponent.count -= components[componentName].need_to_create;
				userComponents[componentName].in_process = {count:0};
			}

			coins -= 10;

			this.$parent.$emit('showMessage', "Биоробот произведён!", "Сообщение");
			this.setUserComponents(userComponents);
			this.setCoins(coins);

			this.is_created = true;
		}
	},

	created() {
		this.update();
	},

	updated() {
		this.update();
	}
}
</script>

<style lang='scss' scoped>
	.part_container {
		padding: 0;
		margin-top: 100px; 
	}

	.row {
		display: flex;
		flex-direction: row;
		margin: 65px 0 0 130px;
	}

	.row .control_wrap {
		max-width: 250px;
	}

	table.processing {
		display: block;
		width: 260px;
	}

	table.processing .title_control {
		font-family: $font;
		font-size: 14px;
		font-style: normal;
		font-weight: 500;
		line-height: 20px;
		letter-spacing: 0em;
		text-align: left;
		color: #fff;
		padding: 0 0 16px 0;
	}

	.custom_radio label {
		display: flex;
		width: 120px;
		height: 28px;
		margin: 0 5px 28px 0;
	}

	.custom_radio label span {
		display: inline-block;
		font-family: $font;
		font-size: 12px;
		font-style: normal;
		font-weight: 400;
		line-height: 28px;
		letter-spacing: 0em;
		color: #fff;
		margin: 0 0 0 12px;
	}

	.custom_radio label input {
		display: none;
	}

	.custom_radio label .dotte_border {
		position: relative;
		display: inline-flex;
		width: 22px;
		height: 22px;
		border: 2px solid gainsboro;
		border-radius: 25px;
	}

	.custom_radio label .dotte_border .dotte {
		margin: auto;
		width: 16px;
		height: 16px;
		border-radius: 25px;
	}

	.custom_radio label input:checked ~ .dotte_border .dotte {
		background-color: $orangeSecondary;
	}

	.control {
		cursor: pointer;
		position: relative;
		display: flex;
		width: 44px;
		height: 44px;
		background: transparent;
		margin: 0 6px 16px 0;
		border: 2px solid $orangeSecondary;
		border-radius: 5px;
	}

	.control [name=icon] {
		position: relative;
		background-size: 100% 100%;
		background-position: center center;
		background-repeat: no-repeat;
		width: 80%;
		height: 80%;
		margin: auto;
	}

	.control[name=cpu] [name=icon] {
		width: 50%;
		height: 50%;
	}

	.control[name=soul] [name=icon] {
		border: 1px solid $orangeSecondary;
		background-size: 65% 80%;
		border-radius: 25px;
		overflow: hidden;
	}

	.control [name=face] [name=icon] {
		width: 70%;
		height: 70%;
	}

	.control[status=a] [name=icon] {
		border-color: $orangeSecondary;
	}

	.control[status=b] {
		background-color: #333940;
		border: 2px solid transparent;
	}

	.control[status=c] {
		cursor: default;
		background-color: #333940;
		border: 2px solid transparent;
	}

	.control[name=soul][status=b] [name=icon] {
		border: 1px solid #fff;
	}

	.control[name=biomechanism][status=a] [name=icon] {
		background-image: url("..\\..\\public\\img\\bio_a.svg");
	}

	.control[name=biomechanism][status=b] [name=icon] {
		background-image: url("..\\..\\public\\img\\bio_b.svg");
	}

	.control[name=biomechanism][status=c] [name=icon] {
		background-image: url("..\\..\\public\\img\\bio_c.svg");
	}

		.control[name=cpu][status=a] [name=icon] {
		background-image: url("..\\..\\public\\img\\cpu_a.svg");
	}

	.control[name=cpu][status=b] [name=icon] {
		background-image: url("..\\..\\public\\img\\cpu_b.svg");
	}

	.control[name=cpu][status=c] [name=icon] {
		background-image: url("..\\..\\public\\img\\cpu_c.svg");
	}

	.control[name=soul][status=a] [name=icon] {
		background-image: url("..\\..\\public\\img\\soul_a.svg");
	}

	 .control[name=soul][status=b] [name=icon] {
		background-image: url("..\\..\\public\\img\\soul_b.svg");
	}

	.control[name=soul][status=c] [name=icon] {
		border-color: #4C5865;
		background-image: url("..\\..\\public\\img\\soul_c.svg");
	}

	.display_robot {
		position: relative;
		width: 236px;
		height: 320px;
		padding: 0 30px 211px 0;
	}

	.display_robot img {
		width: 100%;
		height: 100%;
	}

	.btn_text {
		display: flex;
	}

	[name=create_biorobot] {
		cursor: pointer;
		margin-top: 42px;
		background-color: transparent;
		height: 48px;
		width: 234px;
		border: 2px solid $orangeSecondary;
		box-sizing: border-box;
		border-radius: 60px;
		color: #fff;
		font-family: $font;
		font-size: 16px;
		font-weight: 600;
	}

	[name=create_biorobot]:disabled {
		cursor: default
	}

	[name=create_biorobot]:hover {
		background: #FF5722;
		border: none;
	}

	[name=create_biorobot]:active {
		background: $orangeSecondary;
		border: 2px solid $orangeSecondary;
		box-sizing: border-box;
	}

	[name=create_biorobot]:disabled {
			background: transparent;
			border: 2px solid #4C5865;
			color:#4C5865;
		}

	p {
		margin-top: 40px !important;
		width: 100%;
		margin: 0;
		color:#A3B8CC;
		font-family: Montserrat;
		font-size: 12px;
		font-style: normal;
		font-weight: 500;
		line-height: 16px;
		letter-spacing: 0em;
		text-align: left;

	}

</style>