import React from 'react';
import '../assets/css/stadisticsBody.scss';
import {Pie, PieChart, Tooltip} from 'recharts';

function StadisticsBody({data}) {
  return (
    <div className="stadistics-body">
      <PieChart width={1400} height={800}>
        <Pie isAnimationActive={true} data={data} dataKey={'availableImages'} cx={700} cy={400} outerRadius={300}
             fill="#8884d8"
             label={({cx, cy, midAngle, innerRadius, outerRadius, value, index}) => {
               const RADIAN = Math.PI / 180;
               const radius = 25 + innerRadius + (outerRadius - innerRadius);
               const x = cx + radius * Math.cos(-midAngle * RADIAN);
               const y = cy + radius * Math.sin(-midAngle * RADIAN);
               return (
                 <text x={x} y={y} fill="#000" textAnchor={x > cx ? "start" : "end"} dominantBaseline="central"
                       fontSize={12}>
                   {data[index].name} ({value})
                 </text>
               );
             }}/>
        <Tooltip/>
      </PieChart>
    </div>
  );
}

export default StadisticsBody;