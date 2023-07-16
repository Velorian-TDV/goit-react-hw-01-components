import React from "react";
import { Table, Wrapper } from './style.module.jsx';


function TransactionHistory(props) {

    const { items } = props;

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
                                <tr key={element.id}>
                                    <td className="type">{element.type}</td>
                                    <td className="amount">{element.amount}</td>
                                    <td className="currency">{element.currency}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </Wrapper>
    )

}

export default TransactionHistory;