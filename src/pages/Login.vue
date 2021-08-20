<template>
	<div class="p-grid center">

		<div class="p-col-12 p-md-6 p-m-auto p-shadow-4">
			<form class="card p-fluid" @submit.prevent="login">

				<h3>Login</h3>

				<div class="p-field">
					<label for="email">Email</label>
					<InputText v-model="email" id="email" type="email" />
				</div>

				<div class="p-field">
					<label for="password">Password</label>
					<Password v-model="password" id="password" :feedback="false" />
				</div>

				<div class="p-field">
					<Button label="Login" type="submit" />
				</div>

			</form>
		</div>
		
	</div>
</template>

<script>
import axios from 'axios';

export default {
	data() {
		return {
			email: '',
			password: '',
		};
	},
	mounted() {
		if(this.$cookies.isKey('token')) {
			this.$router.push('/');
		}
	},
	methods: {
		login() {
			axios.post('/users/login', { email: this.email, password: this.password })
				.then(res=>{
					console.log(res.data);
					if(res.data.status === 'success'){
						this.$router.push('/');
					}else {
						console.log(res.data.error);
					}
				});
		}
	}
}
</script>

<style scoped>
.center {
	min-height: calc(100vh - 150px);
	place-items: center;
}
</style>
