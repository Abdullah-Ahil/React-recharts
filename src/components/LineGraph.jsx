import Data from "./Data"
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  BarChart,
  Bar,
  AreaChart,
  Area,
} from "recharts";

const LineGraph = () => {
  return (
   <>
         <h1>1. line chart</h1>
      <ResponsiveContainer width="70%" aspect={3}>
        <LineChart
          data={Array}
          width={500}
          height={300}
          margin={{ top: 5, right: 300, left: 20, bottom: 5 }}
        >
          <Legend />
          <CartesianGrid strokeDashoffset={(4, 4)} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip
            contentStyle={{
              backgroundColor: "bisque",
              border: "1px solid black",
            }}
          />
          <Line
            type="linear"
            dataKey="student"
            stroke="maroon"
            activeDot={{ r: 5 }}
          />
          <Line
            type="linear"
            dataKey="fees"
            stroke="green"
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
   </>
  )
}

export default LineGraph
