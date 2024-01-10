import Data from "./Data"
import {
  ResponsiveContainer,
 
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  BarChart,
  Bar,

} from "recharts";

const BarGraph = () => {
  return (
    <div className="Main">
       <h3>Bar chart</h3>
      <ResponsiveContainer width="100%" aspect={2.5}>
        <BarChart data={Data} >
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray={(4, 5)} />
          <Legend />
          <Tooltip />
          <Bar dataKey="student" fill="skyblue" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BarGraph
