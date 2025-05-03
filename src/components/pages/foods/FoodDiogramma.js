import React, { useState } from "react";
import Styles from '@/styles/Aside.module.css'
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Label,
} from "recharts";

const chartData = [
  [{ name: "Foydali", value: 75 }, { name: "Qolgan", value: 25 }],
  [{ name: "Foydali", value: 32 }, { name: "Qolgan", value: 68 }],
  [{ name: "Foydali", value: 67 }, { name: "Qolgan", value: 33 }],
];

// Ranglar
const chartColors = [
  ["#66bb6a", "#e0e0e0"], // Yashil
  ["#42a5f5", "#e0e0e0"], // Ko‘k
  ["#ffa726", "#e0e0e0"], // To‘q sariq
];

// Diagramma komponenti
const SimplePie = ({ data, colors }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const mainValue = data[0].value;
  const total = data.reduce((sum, item) => sum + item.value, 0);
  const percentage = ((mainValue / total) * 100).toFixed(0);

  return (
    <div className={Styles['border11']}>
    <div
      className={`bg-white rounded-2xl shadow p-4 w-64 transition-all duration-300 transform ${
        activeIndex !== null ? "scale-105 shadow-xl" : "scale-100"
      }`}
    >
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={activeIndex !== null ? 80 : 70}
            innerRadius={40}
            isAnimationActive={true}
            labelLine={false}
            onMouseEnter={(_, index) => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            {data.map((_, index) => (
              <Cell key={index} fill={colors[index]} />
            ))}
            <Label
              value={`${percentage}%`}
              position="center"
              style={{ fill: "#333", fontSize: 20, fontWeight: "bold" }}
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
    </div>
  );
};

// Asosiy sahifa komponenti
export default function Home() {
  return (
    <>
    <div className={Styles['border11']}>
    <div className="min-h-screen bg-gray-100 flex flex-row justify-center items-start gap-6 p-6 flex-wrap">
      {chartData.map((data, idx) => (
        <SimplePie key={idx} data={data} colors={chartColors[idx]} />
      ))}
    </div>
    </div>
    </>
  );
}
