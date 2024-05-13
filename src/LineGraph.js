import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const LineGraph = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchPopulationData = async () => {
      const response = await fetch(
        "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
      );
      const populationData = await response.json();

      const reversedData = populationData.data.reverse();

      const processedData = reversedData.map((entry) => ({
        ...entry,
        Year: parseInt(entry.Year),
      }));

      setData(processedData);
    };
    fetchPopulationData();
  }, []);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <h2 style={{ textAlign: "center" }}>Overview of Population (USA)</h2>
      <LineChart
        width={500}
        height={320}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 30,
          bottom: 20,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#333333" />
        <XAxis dataKey="Year" />
        <YAxis tickCount={20} />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="Population"
          stroke="#96F32B"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineGraph;
