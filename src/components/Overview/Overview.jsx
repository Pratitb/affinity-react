import ActiveLoans from '../ActiveLoans/ActiveLoans';
import Loans from '../Loans/Loans';
import './Overview.scss';
import { FaUser, FaChartBar, FaTools, FaShoppingBag } from 'react-icons/fa';

function Overview({ tableData }) {
	const LoanObj = [
		{
			icon: FaUser,
			name: 'personal',
			amt: '$50,000',
		},
		{
			icon: FaShoppingBag,
			name: 'corporate',
			amt: '$100,000',
		},
		{
			icon: FaChartBar,
			name: 'business',
			amt: '$500,000',
		},
		{
			icon: FaTools,
			name: 'custom',
			amt: 'Choose Money',
		},
	];
	const TableHeads = [
		'sL.no',
		'loan money',
		'left to repay',
		'duration',
		'interest rate',
		'installment',
		'repay',
	];

	return (
		<div className="loan_overview">
			<Loans loanArrObjs={LoanObj} />
			<ActiveLoans
				tableMainHead="active loans"
				tableHead={TableHeads}
				tableItem={tableData}
			/>
		</div>
	);
}

export default Overview;
