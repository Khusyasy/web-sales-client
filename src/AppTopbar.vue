<template>
	<div class="layout-topbar">
		<button class="p-link layout-menu-button" @click="onMenuToggle">
			<span class="pi pi-bars"></span>
		</button>
		<div class="layout-topbar-icons">
			<router-link to="/login">
				<button class="p-link">
					<span class="layout-topbar-icon pi pi-user"></span>
					<span class="layout-topbar-item-text">User</span>
				</button>
			</router-link>
			<router-link to="/logout">
				<button class="p-link">
					<span class="layout-topbar-icon pi pi-power-off"></span>
					<span class="layout-topbar-item-text">Logout</span>
				</button>
			</router-link>
		</div>
	</div>
</template>

<script>
export default {
    methods: {
        onMenuToggle(event) {
            this.$emit('menu-toggle', event);
        }
    }
}
</script>