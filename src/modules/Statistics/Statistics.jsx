import React from "react";
import { Wrapper, DataCard } from './style.module.jsx';

function Statistics(props) {

    const { stats } = props;

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';

        const r = Math.floor(Math.random() * 128 + 128);
        const g = Math.floor(Math.random() * 128 + 128);
        const b = Math.floor(Math.random() * 128 + 128);

        color += r.toString(16);
        color += g.toString(16);
        color += b.toString(16);

        return color;
    }

    return (
        <Wrapper>
            <DataCard>
                <h2 className="title">{props.title}</h2>
                <ul className="stat-list">
                    {
                        stats.map((data) => {
                            return (
                                <li
                                    className="item"
                                    key={data.id}
                                    style={{ backgroundColor: getRandomColor() }}
                                >
                                    <span className="label">{data.label}</span>
                                    <span className="percentage">{data.percentage}%</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </DataCard>
        </Wrapper>
    )
}

export default Statistics;