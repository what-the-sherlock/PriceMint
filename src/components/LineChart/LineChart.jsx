// import React, { use, useEffect, useState } from 'react'
// import Chart from 'react-google-charts'
// import { useSearchParams } from 'react-router-dom'

// const LineChart = ({historicalData}) => {

//     const [data, setData] = useState([["Date", "Prices"]]);

//     useEffect(()=>{
//         let dataCopy = [["Date", "Prices"]];
//         if(historicalData.prices){
//             historicalData.prices.map((item)=>{dataCopy.push([`${new Date(item[0]).toLocaleDateString().slice(0, -5)}`, item[1]])

//             })
//             setData(dataCopy);
//         } 
//     },[historicalData])

//   return (
//     <Chart
//         chartType='LineChart'
//         data={data}
//         height='100%'
//         legendToggle
//     />
//   )
// }

// export default LineChart

import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts'

const LineChart = ({ historicalData, loading }) => {
  const [data, setData] = useState([["Date", "Prices"]])

  useEffect(() => {
    let dataCopy = [["Date", "Prices"]]
    if (historicalData?.prices) {
      historicalData.prices.map(item => {
        dataCopy.push([`${new Date(item[0]).toLocaleDateString().slice(0, -5)}`, item[1]])
      })
      setData(dataCopy)
    }
  }, [historicalData])

  if (loading) {
    return (
      <div className='chart-loader'>
        <div className='spin'></div>
        <p>Loading chart...</p>
      </div>
    )
  }

  return (
    <Chart
      chartType='LineChart'
      data={data}
      height='100%'
      legendToggle
    />
  )
}

export default LineChart

