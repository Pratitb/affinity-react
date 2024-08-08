import ActiveLoanItem from '../ActiveLoanItem/ActiveLoanItem';
import TableTotal from '../TableTotal/TableTotal';
import './ActiveLoans.scss';

function ActiveLoans({ tableMainHead, tableHead, tableItem, filterData }) {
	function formatNumber(number) {
		return number.toLocaleString();
	}

	return (
		<div className="active_loans">
			{/* MAIN HEAD */}
			<p className="active_loans_head">{tableMainHead} overview</p>
			<div className="active_loans_table_wrap">
				<table className="active_loans_table">
					{/* TABLE HEAD */}
					<thead>
						<tr className="active_loans_table_heads">
							{tableHead.map((head) => {
								return (
									<th key={head} className="active_loans_table_head_item">
										{head}
									</th>
								);
							})}
						</tr>
					</thead>
					{/* TABLE BODY */}
					<tbody>
						{/* table items */}
						{
							/* filterData.length > 0
							? filterData.map((item) => {
									return <ActiveLoanItem key={item.id} loanItem={item} />;
							  }) */
							tableItem.map((item) => (
								<ActiveLoanItem
									key={item.id}
									loanItem={item}
									formatNumber={formatNumber}
								/>
							))
						}
						<TableTotal tableItem={tableItem} formatNumber={formatNumber} />
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default ActiveLoans;
