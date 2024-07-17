/* eslint-disable react/prop-types */
import css from "./TransactionHistory.module.css"

function TransactionHistory({ transactions }) {
    
  return (
    <table className={css.table} aria-colspan="c">
      <thead>
        <tr >
          <th className={css.th}>Type</th>
          <th className={css.th}>Amount</th>
          <th className={css.th}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.tbody}>
        {transactions.map(transaction => {
            const type=transaction.type.replace(transaction.type[0],transaction.type[0].toUpperCase())
          return (
            <tr className={css.tr} key={transaction.id}>
              <td className={css.td}>{type}</td>
              <td className={css.td}>{transaction.amount}</td>
              <td className={css.td}>{transaction.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TransactionHistory;