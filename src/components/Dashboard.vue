<template>
<div class="p-grid p-fluid dashboard">

	<div class="p-col-12 p-md-6">
		<div class="highlight-box">
			<div class="initials" style="background-color: #20d077; color: #038d4a"><span>TU</span></div>
			<div class="highlight-details ">
				<i class="pi pi-user"></i>
				<span>Total Users</span>
				<span class="count">{{ usersCount }}</span>
			</div>
		</div>
	</div>
	<div class="p-col-12 p-md-6">
		<div class="highlight-box">
			<div class="initials" style="background-color: #f9c851; color: #b58c2b"><span>TT</span></div>
			<div class="highlight-details ">
				<i class="pi pi-shopping-cart"></i>
				<span>Total Transactions</span>
				<span class="count">{{ transactionsCount }}</span>
			</div>
		</div>
	</div>

	<div class="p-col-12 p-lg-6">
		<div class="card">
			<h1 style="font-size:16px">Recent Transactions - Last 50</h1>
			<DataTable :value="products" class="p-datatable-sm" responsiveLayout="scroll" :rows="5" :paginator="true">
				<Column field="transactionDate" header="Date" :sortable="true">
					<template #body="slotProps">
						{{getDateOnly(slotProps.data.transactionDate)}}
					</template>
				</Column>
				<Column field="service" header="Service"></Column>
				<Column field="total" header="Total" :sortable="true">
					<template #body="slotProps">
						{{formatCurrency(slotProps.data.total)}}
					</template>
				</Column>
			</DataTable>
		</div>
	</div>

	<div class="p-col-12 p-lg-6">
		<div class="card">
			<h1 style="font-size:16px">This Month Income</h1>
			<Chart type="bar" :data="incomeData" />
		</div>
	</div>

	<div class="p-col-12 p-lg-6">
		<div class="card">
			<h1 style="font-size:16px">Current Marketplace</h1>
			<l-map :zoom="15" :center="[-6.154355625032956, 106.75073107505914]" style="height:50vh">

				<l-tile-layer
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					layer-type="base"
					name="OpenStreetMap"
					:max-zoom="18"
				/>
				
				<l-marker :lat-lng="[-6.154355625032956, 106.75073107505914]">
					<l-tooltip>
						Hello!, this is where our only physical marketplace exist!
					</l-tooltip>
				</l-marker>

			</l-map>
		</div>
	</div>

</div>
</template>

<script>
import axios from 'axios';
import "leaflet/dist/leaflet.css"
import { LMap, LTileLayer, LMarker, LTooltip } from "@vue-leaflet/vue-leaflet";

export default {
	components: {
    LMap,
    LTileLayer,
		LMarker,
		LTooltip,
  },
	data() {
		return {
			products: null,
			incomeData: null,
			usersCount: 0,
			transactionsCount: 0,
		}
	},
  async beforeMount() {
		
  },
	mounted() {
		// get total counts
		axios.get('/users/count').then(res=>this.usersCount = res.data.count);
		axios.get('/transactions/count').then(res=>this.transactionsCount = res.data.count);

		// get recent transactions data from api
		axios.get('/transactions').then(res=>this.products = res.data);

		// get income data from api
		axios.get('/transactions/income').then(res=>{
			let { total } = res.data;
			
			let dataset = {
				label: 'Total Income',
				data: total.map(t=>t.total),
				fill: false,
				backgroundColor: '#0065c3',
				borderColor: '#0065c3'
			};

			let data = {
				labels: total.map(t=>'Week ' + t.week),
				datasets: [
					dataset
				],
			};

			this.incomeData = data;
		});
	},
	methods: {
		formatCurrency(value) {
			return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
		},
		getDateOnly(value) {
			let date = new Date(value);
			return date.toDateString();
		}
	},
}
</script>

<style lang="scss" scoped>

</style>
