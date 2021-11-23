import CustomBarChart from './components/charts/CustomBarChart';
import CustomLineChart from './components/charts/CustomLineChart';
import CustomScatterChart from './components/charts/CustomScatterChart';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function getSampleData() {
  return [
    { x: 100, y: 100 },
    { x: 200, y: 100 },
    { x: 200, y: 150 },
    { x: 150, y: 200 },
    { x: 125, y: 150 },
  ];
}

function App() {
  return (
    <div className="container">
      <div className="header">
        <div>
          <h1>Data Report</h1>
        </div>
      </div>

      <h3 className="title">Chart 01</h3>
      <div className="row">
        <CustomBarChart data={data} />
        <p>
          Pulvinar pellentesque habitant morbi tristique senectus et netus. Nunc eget lorem dolor sed viverra ipsum nunc
          aliquet bibendum. Enim ut tellus elementum sagittis vitae et leo duis ut. Adipiscing vitae proin sagittis
          nisl. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Id nibh tortor id aliquet
          lectus proin nibh nisl condimentum. Platea dictumst vestibulum rhoncus est pellentesque.
        </p>
      </div>

      <h3 className="title">Chart 02</h3>
      <div className="row">
        <p>
          Adipiscing vitae proin sagittis nisl. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt
          tortor. Id nibh tortor id aliquet lectus proin nibh nisl condimentum. Platea dictumst vestibulum rhoncus est
          pellentesque.
        </p>
        <CustomLineChart data={data} />
      </div>

      <h3 className="title">Chart 03</h3>
      <CustomScatterChart data={getSampleData()} width={800} height={300} />
    </div>
  );
}

export default App;
