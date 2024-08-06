import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Overview from './components/Overview/Overview';
import SideBarMenu from './components/SideBarMenu/SideBarMenu';
import {
	FaHome,
	FaUser,
	FaMoneyBill,
	FaChartBar,
	FaCreditCard,
	FaHandHolding,
	FaTools,
	FaLightbulb,
} from 'react-icons/fa';
import { IoIosSettings } from 'react-icons/io';

function App() {
	const SidebarLinksArr = [
		{
			icon: FaHome,
			name: 'dashboard',
		},
		{
			icon: FaMoneyBill,
			name: 'transactions',
		},
		{
			icon: FaUser,
			name: 'accounts',
		},
		{
			icon: FaChartBar,
			name: 'investments',
		},
		{
			icon: FaCreditCard,
			name: 'credit cards',
		},
		{
			icon: FaHandHolding,
			name: 'loans',
		},
		{
			icon: FaTools,
			name: 'services',
		},
		{
			icon: FaLightbulb,
			name: 'my privileges',
		},
		{
			icon: IoIosSettings,
			name: 'setting',
		},
	];
	const TableData = [
		{
			id: 1,
			loan_amt: 100000,
			left_repay: 40500,
			duration: 8,
			interest_rate: 12,
			installment: 2000,
		},
		{
			id: 2,
			loan_amt: 500000,
			left_repay: 250000,
			duration: 36,
			interest_rate: 10,
			installment: 8000,
		},
		{
			id: 3,
			loan_amt: 900000,
			left_repay: 40500,
			duration: 12,
			interest_rate: 12,
			installment: 5000,
		},
		{
			id: 4,
			loan_amt: 50000,
			left_repay: 40500,
			duration: 25,
			interest_rate: 5,
			installment: 2000,
		},
		{
			id: 5,
			loan_amt: 50000,
			left_repay: 40500,
			duration: 5,
			interest_rate: 16,
			installment: 10000,
		},
		{
			id: 6,
			loan_amt: 80000,
			left_repay: 25500,
			duration: 14,
			interest_rate: 8,
			installment: 2000,
		},
		{
			id: 7,
			loan_amt: 12000,
			left_repay: 5500,
			duration: 9,
			interest_rate: 13,
			installment: 500,
		},
		{
			id: 8,
			loan_amt: 160000,
			left_repay: 100800,
			duration: 3,
			interest_rate: 12,
			installment: 900,
		},
	];
	const [Data, setData] = useState(TableData);

	function filterTableData(searchValue) {
		const filteredData = [];
		if (searchValue == '') {
			return setData(TableData);
		}
		TableData.forEach((item) => {
			if (
				Object.values(item).some((value) =>
					value.toString().toLowerCase().includes(searchValue)
				)
			) {
				filteredData.push(item);
			}
		});
		setData(filteredData);
	}

	return (
		<>
			<div className="app_container">
				<SideBarMenu linksObj={SidebarLinksArr} />
				<div className="data_container">
					<Header header_name="Loans" filterTableData={filterTableData} />
					<Overview tableData={Data} />
				</div>
			</div>
		</>
	);
}

export default App;
