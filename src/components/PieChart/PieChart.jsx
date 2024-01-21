import React from 'react'
import "./PieChart.css"
import { Chart as ChartJS } from "chart.js/auto";
import { Doughnut } from 'react-chartjs-2';
import { IoIosArrowForward } from "react-icons/io";



function PieChart() {

    const data = {
        labels: [],
        datasets: [
            {
                data: [75, 25],
                backgroundColor: ['#07e00a', '#36A2EB'],
                hoverBackgroundColor: ['#20f00d', '#36A2EB'],
            },
        ],
    };

    const maxNumber = Math.max(...data.datasets[0].data);


    // Example options for the Doughnut chart
    const options = {
        maintainAspectRatio: false,
        responsive: true,
        cutout: '70%',
    };

    const doughnutLabel = {
        id: "doughnutLabel",
        afterDatasetsDraw(chart, args, plugins) {
            const { ctx, data } = chart;

            const centerX = chart.getDatasetMeta(0).data[0].x;
            const centerY = chart.getDatasetMeta(0).data[0].y;

            ctx.save();
            ctx.font = "bold 30px sans-serif"
            ctx.fillStyle = "black";
            ctx.textAlign = 'center';
            ctx.textBaseline = "middle";
            ctx.fillText(maxNumber, centerX, centerY);
        }
    }

    return (
        <>
            <div className="col-md-4 mt-2 doughnutCartContainer">
                <div className="card p-4 doughnutChartCard">
                    <div className="bubble-heading d-flex">
                        <h3 className='text-center'>Average</h3>
                    </div>
                    <div className="doughnutChart">
                        <div className="pieChart">
                            <Doughnut data={data} options={options} plugins={[doughnutLabel]} />
                        </div>
                        <div className="pieContent flex-grow-1">
                            <h4>
                                {maxNumber} %
                            </h4>
                            <p style={{ color: 'gray' }}>
                                About Graph
                            </p>
                            <span style={{ color: "#0098cb" }}>
                                See Details <IoIosArrowForward />
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default PieChart