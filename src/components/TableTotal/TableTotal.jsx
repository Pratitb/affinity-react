import './TableTotal.css';

function TableTotal({ tableItem, formatNumber }) {
	const totalLoan = tableItem.reduce((acc, item) => acc + item.loan_amt, 0);
	const totalLeft = tableItem.reduce((acc, item) => acc + item.left_repay, 0);
	const totalInstallment = tableItem.reduce(
		(acc, item) => acc + item.installment,
		0
	);
	return (
		<tr className="item">
			<td className="total_item">Total</td>
			<td className="total_item">${formatNumber(totalLoan)}</td>
			<td className="total_item">${formatNumber(totalLeft)}</td>
			<td></td>
			<td></td>
			<td className="total_item">${formatNumber(totalInstallment)}/month</td>
			<td></td>
		</tr>
	);
}

export default TableTotal;
