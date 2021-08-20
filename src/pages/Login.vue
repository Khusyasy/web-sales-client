<template>
	<div class="p-grid center">

		<div class="p-col-12 p-md-6 p-m-auto p-shadow-4">
			<form class="card p-fluid" @submit.prevent="login">

				<h3>Login</h3>

				<div class="p-field">
					<label for="email">Email</label>
					<InputText v-model="email" id="email" type="email" :class="{'p-invalid': error.email}" />
					<small v-if="error.email" id="username2-help" class="p-error">{{ error.email }}</small>
				</div>

				<div class="p-field">
					<label for="password">Password</label>
					<Password v-model="password" id="password" :feedback="false" :class="{'p-invalid': error.password}" />
					<small v-if="error.password" id="username2-help" class="p-error">{{ error.password }}</small>
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
			error: {
				email: '',
				password: '',
			},
		};
	},
	mounted() {
		if(this.$cookies.isKey('token')) {
			this.$router.push('/');
		}
	},
	methods: {
		checkInput() {
			if(!this.email) this.error.email = 'Enter your email';
			else this.error.email = '';

			if(!this.password) this.error.password = 'Enter your password';
			else this.error.password = '';

			return this.email && this.password;
		},
		login() {
			if(!this.checkInput()) return;

			axios.post('/users/login', { email: this.email, password: this.password })
				.then(res=>{
					console.log(res.data);
					if(res.data.status === 'success'){
						this.$router.push('/');
					}else {
						Object.entries(res.data.error).forEach(([key, value])=>{
							this.error[key] = value;
						});
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
