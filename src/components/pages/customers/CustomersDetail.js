import React from 'react';
import Styles from "@/styles/CustomersDetail.module.css"
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell
} from 'recharts';

const data = [
  { name: 'Sunday', value: 400 },
  { name: 'Monday', value: 300 },
  { name: 'Tuesday', value: 500 },
  { name: 'Wednesday', value: 250 },
  { name: 'Thursday', value: 470 },
  { name: 'Friday', value: 230 },
  { name: 'Saturday', value: 420 },
];

const colors = ['#00CFE8', '#EA5455', '#28C76F', '#00CFE8', '#F9C80E', '#EA5455', '#F9C80E'];

export default function CustomBarChart() {
  return (
    <div className={Styles['Style']}>
    <div  className="bg-white p-4 rounded-lg shadow-md w-full h-64">
      <ResponsiveContainer width="100px" height="100px">
        <BarChart  data={data}>
          <XAxis  dataKey="name" />
          <YAxis  />
          <Tooltip />
          <Bar  dataKey="value">
            {data.map((entry, index) => (
              <Cell  key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Bar>
        </BarChart >
      </ResponsiveContainer>
    </div>
    </div>
  );
}
