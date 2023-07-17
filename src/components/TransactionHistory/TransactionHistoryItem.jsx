import React from "react";

function TransactionHistoryItem({type, amount, currency}) {
    return (
        <tr>
            <td className="type">{type}</td>
            <td className="amount">{amount}</td>
            <td className="currency">{currency}</td>
        </tr>
    )
}

export default TransactionHistoryItem;