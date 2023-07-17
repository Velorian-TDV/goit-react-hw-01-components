import React from "react"; 
import PropTypes from 'prop-types';

function TransactionHistoryItem({type, amount, currency}) {
    return (
        <tr>
            <td className="type">{type}</td>
            <td className="amount">{amount}</td>
            <td className="currency">{currency}</td>
        </tr>
    )
}

TransactionHistoryItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
}

export default TransactionHistoryItem;