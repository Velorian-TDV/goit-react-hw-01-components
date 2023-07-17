import React from "react";
import { getRandomColor } from "../../utilityMethods/getRandomColor.js";

function StatisticsItem({ label, percentage }) {
    return (
        <li className="item" style={{ backgroundColor: getRandomColor() }}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
        </li>
    )
}

export default StatisticsItem;