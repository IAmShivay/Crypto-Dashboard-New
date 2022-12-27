import React from 'react'
import LineChart from "./LineChart";
import VerticalChart from "./VerticleChart";
import HorizontalChart from "./HorizontalChart";
import { Routes, Route } from "react-router-dom";
const Chart = () => {
    return (
        <div className='flex justify-center items-start lg:w-full'>
            <div className="relative w-[16rem] h-[20rem] xs:w-[21rem] xs:h-[22rem] xs2:w-[26rem] xs2:h-[22rem]
                        sm:w-[36rem] sm:h-[22rem] md:w-[42rem] md:h-[22rem] md2:w-[50rem] md2:h-[22rem]
                        lg:w-[38rem] lg:h-[22rem] xl:w-[53rem] xl:h-[22rem] 2xl:w-[58rem] 2xl:h-[22rem]">
                <Routes>
                    <Route path="/" element={<VerticalChart />} />
                    <Route path="/line" element={<LineChart />} />
                    <Route path="/horizontalChart" element={<HorizontalChart />} />
                </Routes></div>
        </div>
    )
}

export default Chart
