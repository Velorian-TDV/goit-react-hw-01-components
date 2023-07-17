import React from "react";
import PropTypes from 'prop-types';
import { Wrapper, DataCard } from './Statistics.styled.js';
import StatisticsItem from "./StatisticsItem.jsx";

function Statistics({ title, stats }) {

    return (
        <Wrapper>
            <DataCard>
                <h2 className="title">{title}</h2>
                <ul className="stat-list">
                    {
                        stats.map((data) => {
                            return (
                                <StatisticsItem
                                    key={data.id}
                                    label={data.label}
                                    percentage={data.percentage}
                                />
                            )
                        })
                    }
                </ul>
            </DataCard>
        </Wrapper>
    )
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        })
    ).isRequired
}

export default Statistics;