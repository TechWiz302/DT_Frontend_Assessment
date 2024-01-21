import React from 'react'
import "./FocusTopics.css"
import { IoIosArrowForward } from "react-icons/io";

function FocusTopics() {

    const topicItems = [];

    for (let index = 1; index <= 10; index++) {
        topicItems.push(
            <div key={index} className="FocusTopicContent" style={{ display: 'flex', width: '100%' }}>
                <span className="srNumber" style={{ flex: '5%' }}>{index}.</span>
                <span className="topicContent" style={{ flex: '70%' }}>Focus Topic {index}</span>
                <span className="score-topic" style={{ flex: '25%' }}>Score 1</span>
            </div>
        );
    }

    return (
        <>
            <div className="col-md-4">
                <div className="card p-4 mt-2 FocusTopicCard">
                    <div className="rnd d-flex">
                        <h3 style={{ margin: "0" }}>Top 10 Focus Topics</h3>
                    </div>
                    {topicItems}
                    <span className="seeAll">See All <IoIosArrowForward /></span>
                </div>
            </div>
        </>
    )
}

export default FocusTopics


{/* <div className="FocusTopicContent" style={{ display: 'flex', width: '100%' }}>
                        <span className="srNumber" style={{ flex: '5%' }}>1.</span>
                        <span className="topicContent" style={{ flex: '70%' }}>Focus Topic 1</span>
                        <span className="score-topic" style={{ flex: '25%' }}>Score 1</span>
                    </div>
                    <div className="FocusTopicContent" style={{ display: 'flex', width: '100%' }}>
                        <span className="srNumber" style={{ flex: '5%' }}>2.</span>
                        <span className="topicContent" style={{ flex: '70%' }}>Focus Topic 1</span>
                        <span className="score-topic" style={{ flex: '25%' }}>Score 1</span>
                    </div>
                    <div className="FocusTopicContent" style={{ display: 'flex', width: '100%' }}>
                        <span className="srNumber" style={{ flex: '5%' }}>3.</span>
                        <span className="topicContent" style={{ flex: '70%' }}>Focus Topic 1</span>
                        <span className="score-topic" style={{ flex: '25%' }}>Score 1</span>
                    </div>
                    <div className="FocusTopicContent" style={{ display: 'flex', width: '100%' }}>
                        <span className="srNumber" style={{ flex: '5%' }}>4.</span>
                        <span className="topicContent" style={{ flex: '70%' }}>Focus Topic 1</span>
                        <span className="score-topic" style={{ flex: '25%' }}>Score 1</span>
                    </div>
                    <div className="FocusTopicContent" style={{ display: 'flex', width: '100%' }}>
                        <span className="srNumber" style={{ flex: '5%' }}>6.</span>
                        <span className="topicContent" style={{ flex: '70%' }}>Focus Topic 1</span>
                        <span className="score-topic" style={{ flex: '25%' }}>Score 1</span>
                    </div>
                    <div className="FocusTopicContent" style={{ display: 'flex', width: '100%' }}>
                        <span className="srNumber" style={{ flex: '5%' }}>7.</span>
                        <span className="topicContent" style={{ flex: '70%' }}>Focus Topic 1</span>
                        <span className="score-topic" style={{ flex: '25%' }}>Score 1</span>
                    </div>
                    <div className="FocusTopicContent" style={{ display: 'flex', width: '100%' }}>
                        <span className="srNumber" style={{ flex: '5%' }}>8.</span>
                        <span className="topicContent" style={{ flex: '70%' }}>Focus Topic 1</span>
                        <span className="score-topic" style={{ flex: '25%'}}>Score 1</span>
                    </div>
                    <div className="FocusTopicContent" style={{ display: 'flex', width: '100%' }}>
                        <span className="srNumber" style={{ flex: '5%' }}>9.</span>
                        <span className="topicContent" style={{ flex: '70%' }}>Focus Topic 1</span>
                        <span className="score-topic" style={{ flex: '25%'}}>Score 1</span>
                    </div>
                    <div className="FocusTopicContent" style={{ display: 'flex', width: '100%' }}>
                        <span className="srNumber" style={{ flex: '5%' }}>10.</span>
                        <span className="topicContent" style={{ flex: '70%' }}>Focus Topic 1</span>
                        <span className="score-topic" style={{ flex: '25%' }}>Score 1</span>
                    </div> */}