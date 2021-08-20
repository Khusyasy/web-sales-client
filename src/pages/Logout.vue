<template>
	<h1>Logging out...</h1>
</template>

<script>
import axios from 'axios';

export default {
	async beforeCreate() {
		await axios.post('/users/logout', {})
			.then(()=>{
				this.$router.push('/');
			});
	},
}
</script>