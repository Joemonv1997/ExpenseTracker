import React from 'react'
import './Chart.css'
import ChartBar from './ChartBar'
function Chart(props) {
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className='chart' >
      {props.dataPoints.map((singlepoint) => (
      <ChartBar
      value={singlepoint.value} 
      label={singlepoint.label} 
      id={singlepoint.id} 
      maxValue={totalMaximum}
      />)
      )}
    </div>
  )
}

export default Chart