import { CartesianGrid, Scatter, ScatterChart, XAxis, YAxis } from 'recharts';

function CustomScatterChart({ width, height, data }) {
  return (
    <ScatterChart
      width={width}
      height={height}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 20,
      }}
    >
      <CartesianGrid />
      <XAxis name="x" dataKey="x" fontSize={12} tickMargin={10} />
      <YAxis name="y" dataKey="y" fontSize={12} />
      <Scatter name="My Scatter" data={data} fill="#008800" />
    </ScatterChart>
  );
}

export default CustomScatterChart;
