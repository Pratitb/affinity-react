import './Loan.css';

function Loan({ individualLoan }) {
	const LoanIcon = individualLoan.icon;
	return (
		<div className={`loan ${individualLoan.name}`}>
			<LoanIcon className="loan_icon" />
			<div className="loan_content">
				<p className="loan_name">{individualLoan.name} loans</p>
				<p className="card_loan_amt">{individualLoan.amt}</p>
			</div>
		</div>
	);
}

export default Loan;
