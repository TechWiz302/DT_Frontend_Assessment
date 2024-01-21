import React from 'react'
import "./NewsTable.css"
import { News } from '../../constant/data'

function NewsTable() {
    return (
        <>
            <div className="col-md-8">
                <div className="card p-4 mt-2 newsTableCard">
                    <div className="rnd d-flex">
                        <h3 style={{ margin: "0" }}>Refined News & Data Flow</h3>
                    </div>
                    <div className="rndTableContainer pt-3">
                        <div className="tableWrapper">
                            <table className="rndTable">
                                <thead>
                                    <tr>
                                        <th className='text-center' style={{ width: '20%' }}>Type</th>
                                        <th style={{ width: '50%' }}>News</th>
                                        <th className='text-center' style={{ width: '10%' }}>Score</th>
                                        <th className='text-center' style={{ width: '10%' }}>Impact</th>
                                        <th className='text-center' style={{ width: '10%' }}>Probability</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {News.map((item) => (
                                        <tr key={item.id}>
                                            <td className='typeColumn'>
                                                <div className="tdBox" style={{ backgroundColor: item.typeColor }}></div>
                                                <span>{item.type}</span>
                                            </td>
                                            <td>
                                                <span>The Euro has steadied against the US dollar on Thursday as the market ponders the path of Fed rate hikers</span>
                                            </td>
                                            <td className='text-center score'>
                                                <span>+1</span>
                                            </td>
                                            <td className='text-center'>
                                                <span>{item.impact}</span>
                                            </td>
                                            <td className='text-center impact'>
                                                <span>High</span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsTable