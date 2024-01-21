import React, { useState, useEffect } from 'react'
import "./BubbleGraph.css"
import { Chart as ChartJS } from "chart.js/auto"
import { Bubble } from 'react-chartjs-2';
import { IoFilterSharp } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";


const options = {
    plugins: {
        legend: {
            display: false,
        },
    },
    scales: {
        x: {
            type: 'linear',
            position: 'bottom',
            ticks: {
                stepSize: 5,
                callback: (value) => {
                    const hours = Math.floor(value / 60);
                    const minutes = value % 60;
                    return `${hours}:${minutes < 10 ? '0' : ''}${minutes} PM`;
                },
            },
        },
        y: {
            beginAtZero: true,
            max: 100,
            min: 0,
            ticks: {
                stepSize: 10,
            },
        },
        maintainAspectRatio: false,
        responsive: false,
    },
};

const generateRandomData = () => {
    const data = [];
    for (let i = 0; i < 10; i++) {
        const randomX = Math.floor(Math.random() * 120);
        const randomY = Math.floor(Math.random() * 100);
        const randomR = Math.floor(Math.random() * 20);
        data.push({ x: randomX, y: randomY, r: randomR });
    }
    return data;
};

const data = {
    datasets: [
        {
            label: '',
            data: generateRandomData(),
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
            borderColor: 'rgba(255, 99, 132, 1)',
        },
        {
            label: '',
            data: generateRandomData(),
            backgroundColor: '#ffff00e5',
            borderColor: '#ffff00',
        },
        {
            label: '',
            data: generateRandomData(),
            backgroundColor: '#00800085',
            borderColor: '#008000',
        },
        {
            label: '',
            data: generateRandomData(),
            backgroundColor: '#a800d2dd',
            borderColor: '#a800d2',
        },
    ],
};

function BubbleGraph() {
    const [activeFilter, setActiveFilter] = useState('5M');

    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
    };
    const filterItems = ['5M', '15M', '30M', '1H', '2H', '4H', 'All'];

    return (
        <div className="col-md-8 bubble-chart d-flex flex-column">
            <div className="card p-4 mt-2 flex-grow-1 bubbleChartCard">
                <div className="bubble-heading">
                    <span>News & Data Flow</span>
                    <div className="filterBox">
                        <ul className="fliterList">
                            {filterItems.map((filter) => (
                                <li
                                    key={filter}
                                    className={`filterItems ${activeFilter === filter ? 'active' : ''}`}
                                    onClick={() => handleFilterClick(filter)}
                                >
                                    {filter}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="filterButton">
                        <button type="button" >
                            <IoFilterSharp />
                            <span>Filter</span>
                            <IoMdArrowDropdown />
                        </button>
                    </div>
                </div>

                <Bubble options={options} data={data} height={window.innerWidth >= 768 ? 36 : undefined} width={window.innerWidth >= 768 ? 100 : undefined} />

            </div>
        </div>
    );
}

export default BubbleGraph;
