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

} from "recharts";

const LineGraph = () => {
  return (
   <div className="Main">
         <h3>line chart</h3>
      <ResponsiveContainer  width="100%" aspect={2.5}>
        <LineChart
          data={Data}
          
        >
          <Legend />
          <CartesianGrid strokeDashoffset={(4, 4)} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip
            contentStyle={{
              backgroundColor: "beige",
              border: "2px solid black",
            }}
          />
          <Line
            type="linear"
            dataKey="student"
            stroke="red"
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
   </div>
  )
}

export default LineGraph