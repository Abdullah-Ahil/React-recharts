import Data from "./Data"
import {
  ResponsiveContainer,
 
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,

  AreaChart,
  Area,
} from "recharts";
const AreaGraph = () => {
  return (
    <div className="Main">
      <h3>Area Chart</h3>
      <ResponsiveContainer width="100%"  aspect={2.5}>
        <AreaChart  data={Data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="student"
            stroke="#3e3ee3"
            fill="green"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AreaGraph