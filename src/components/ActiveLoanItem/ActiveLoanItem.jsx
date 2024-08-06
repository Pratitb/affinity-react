import './ActiveLoanItem.scss';

function ActiveLoanItem({ loanItem, formatNumber }) {
	return (
		<tr className="item">
			<td className="table_item item_num">0{loanItem.id}.</td>
			<td className="table_item loan_amt">
				${formatNumber(loanItem.loan_amt)}
			</td>
			<td className="table_item left_repay">
				${formatNumber(loanItem.left_repay)}
			</td>
			<td className="table_item duration">{loanItem.duration} months</td>
			<td className="table_item interest">{loanItem.interest_rate}%</td>
			<td className="table_item installment">
				${formatNumber(loanItem.installment)}/month
			</td>
			<td>
				<a className="repay">Repay</a>
			</td>
		</tr>
	);
}

export default ActiveLoanItem;
