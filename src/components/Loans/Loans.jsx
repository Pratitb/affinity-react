import Loan from '../Loan/Loan';
import './Loans.css';

function Loans({ loanArrObjs }) {
	return (
		<div className="loans_wrap">
			{loanArrObjs.map((loan, index) => {
				return <Loan key={index} individualLoan={loan} />;
			})}
		</div>
	);
}

export default Loans;
