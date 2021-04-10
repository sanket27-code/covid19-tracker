import React from 'react';
import { Line } from 'react-chartjs-2';
import './Charts.css'

const Charts = (props) => {
    const dailyData = props.dailyData
    return (
        <>
            <div className="chart_container">
                {(dailyData.Dates) ? <div className='Line_chart_container'>
                    <Line className="Line_chart"
                        data={{
                            labels: dailyData.Dates,
                            datasets: [{
                                label: 'Infected',
                                data: dailyData.confirmedCases,
                                borderColor: '#3333ff',
                                fill: true,
                            }, {
                                label: 'Deaths',
                                data: dailyData.deathCases,
                                borderColor: 'red',
                                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                                fill: true,
                                borderWidth: 1,
                            }]
                        }}
                        options={{
                            legend: { display: true, position: 'bottom' },
                            title: { display: true, text: 'Current situation Globally!!!' },
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        beginAtZero: true
                                    }
                                }]
                            }
                        }}
                        width={100}
                        height={50}
                    />
                </div> : null}
            </div>
        </>
    )
}

export default Charts;