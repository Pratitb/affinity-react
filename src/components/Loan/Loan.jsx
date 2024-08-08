import './Loan.scss';

function Loan({ individualLoan }) {
	const LoanIcon = individualLoan.icon;
	return (
		<div className={`loan ${individualLoan.name}`}>
			<LoanIcon className="loan_icon" />
			<div className="loan_content">
				<p className="loan_name">{individualLoan.name} loans</p>
				<p className="loan_card_amt">{individualLoan.amt}</p>
			</div>
		</div>
	);
}

export default Loan;
