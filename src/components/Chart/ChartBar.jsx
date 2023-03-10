import React from 'react'
import './ChartBar.css'
function ChartBar(props) {
  let chartFill='0%'
  if (props.maxValue > 0) {
    chartFill = Math.round((props.value / props.maxValue) * 100) + '%';
  }

  return (
    <div key={props.id}>
    <div className='chart-bar'>
      <div className='chart-bar__inner'>
        <div className='chart-bar__fill' style={{height:chartFill}}></div>
      </div>
      <div className='chart-bar__label'>{props.label}</div>
        
    </div>
    </div>
  )
}

export default ChartBar