import React from "react";
import PropTypes from 'prop-types';
import { Wrapper, DataCard } from './Statistics.styled.js';
import StatisticsItem from "../StatisticsItem/StatisticsItem.jsx"

function Statistics({ title, stats }) {

    return (
        <Wrapper>
            <DataCard>
                {title ? <h2 className="title">{title}</h2> : null}
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
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
    ).isRequired
}

export default Statistics;