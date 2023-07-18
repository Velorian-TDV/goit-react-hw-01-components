import React from "react";
import PropTypes from 'prop-types';
import { Table, Wrapper } from './TransactionHistory.styled.js';
import TransactionHistoryItem from "../TransactionHistoryItem/TransactionHistoryItem.jsx";


function TransactionHistory({ items }) {
    return (
        <Wrapper>
            <Table>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(element => {
                            return (
                                <TransactionHistoryItem
                                    key={element.id}
                                    type={element.type}
                                    amount={element.amount}
                                    currency={element.currency}
                                />
                            )
                        })
                    }
                </tbody>
            </Table>
        </Wrapper>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
    ).isRequired
}

export default TransactionHistory;