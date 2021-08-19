<template>
<div class="p-grid p-fluid dashboard">

	<div class="p-col-12 p-md-6 p-xl-3">
		<div class="highlight-box">
			<div class="initials" style="background-color: #007be5; color: #00448f"><span>TV</span></div>
			<div class="highlight-details ">
				<i class="pi pi-search"></i>
				<span>Total Queries</span>
				<span class="count">523</span>
			</div>
		</div>
	</div>
	<div class="p-col-12 p-md-6 p-xl-3">
		<div class="highlight-box">
			<div class="initials" style="background-color: #ef6262; color: #a83d3b"><span>TI</span></div>
			<div class="highlight-details ">
				<i class="pi pi-question-circle"></i>
				<span>Total Issues</span>
				<span class="count">81</span>
			</div>
		</div>
	</div>
	<div class="p-col-12 p-md-6 p-xl-3">
		<div class="highlight-box">
			<div class="initials" style="background-color: #20d077; color: #038d4a"><span>OI</span></div>
			<div class="highlight-details ">
				<i class="pi pi-filter"></i>
				<span>Open Issues</span>
				<span class="count">21</span>
			</div>
		</div>
	</div>
	<div class="p-col-12 p-md-6 p-xl-3">
		<div class="highlight-box">
			<div class="initials" style="background-color: #f9c851; color: #b58c2b"><span>CI</span></div>
			<div class="highlight-details ">
				<i class="pi pi-check"></i>
				<span>Closed Issues</span>
				<span class="count">60</span>
			</div>
		</div>
	</div>

	<div class="p-col-12 p-lg-6">
		<div class="card">
			<h1 style="font-size:16px">Recent Transactions - Last 50</h1>
			<DataTable :value="products" class="p-datatable-customers" :rows="5" :paginator="true">
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
			<Chart type="line" :data="incomeData" />
		</div>
	</div>

</div>
</template>

<script>
import axios from 'axios';

export default {
	data() {
		return {
			products: null,
			incomeData: null,
		}
	},
	created() {
		
	},
	mounted() {
		// get recent transactions data from api
		axios.get('/transactions').then(res=>this.products = res.data);

		// get income data from api
		axios.get('/transactions/income').then(res=>{
			let { total } = res.data;
			
			let dataset = {
				label: 'Total Income',
				data: total.map(t=>t.total),
				fill: false,
				backgroundColor: '#2f4860',
				borderColor: '#2f4860'
			};

			let data = {
				labels: total.map(t=>t.week),
				datasets: [
					dataset
				],
			};

			this.incomeData = data;
			console.log(this.incomeData);
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
	}
}
</script>

<style lang="scss" scoped>
	@media screen and (max-width: 960px) {
		::v-deep(.p-datatable) {
			&.p-datatable-customers {
				.p-datatable-thead > tr > th,
				.p-datatable-tfoot > tr > td {
					display: none !important;
				}

				.p-datatable-tbody > tr {
					border-bottom: 1px solid #dee2e6;
					> td {
						text-align: left;
						display: flex;
						align-items: center;
						justify-content: center;
						border: 0 none !important;
						width: 100% !important;
						float: left;
						clear: left;
						border: 0 none;

						.p-column-title {
							padding: .4rem;
							min-width: 30%;
							display: inline-block;
							margin: -.4rem 1rem -.4rem -.4rem;
							font-weight: bold;
						}

						.p-progressbar {
							margin-top: .5rem;
						}
					}
				}
			}
		}
	}
</style>
