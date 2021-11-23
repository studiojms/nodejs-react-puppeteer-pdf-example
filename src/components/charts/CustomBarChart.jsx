import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';

import CustomAxisTick from '../CustomAxisTick';

function CustomBarChart({ data }) {
  return (
    <BarChart
      height={250}
      width={450}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 50,
      }}
      data={data}
    >
      <CartesianGrid />
      <XAxis dataKey="name" tick={<CustomAxisTick />} tickMargin={10} />
      <YAxis fontSize={12} tickMargin={10} />
      <Bar dataKey="pv" fill="#8884d8" />
      <Bar dataKey="uv" fill="#82ca9d" />
    </BarChart>
  );
}

export default CustomBarChart;
