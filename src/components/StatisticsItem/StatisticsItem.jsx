import React from "react";
import PropTypes from 'prop-types';
import { getRandomColor } from "../../utilityMethods/getRandomColor.js";

function StatisticsItem({ label, percentage }) {
    return (
        <li className="item" style={{ backgroundColor: getRandomColor() }}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
        </li>
    )
}

StatisticsItem.propTupes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
}

export default StatisticsItem;