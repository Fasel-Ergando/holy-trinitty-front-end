import {
  RadarChart,
  Radar,
  PolarAngleAxis,
  PolarRadiusAxis,
  PolarGrid,
  BarChart,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  Bar,
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";
import {
  histogramData,
  lineChartData,
  radarChartData,
  boxPlotData,
} from "../../../constants/";
export default function ResultHome() {
  return (
    <div>
      <div className="flex my-3 gap-2 flex-wrap sm:flex-nowrap">
        <div className="w-full sm:w-1/2 h-[240px] glass">
          <ResponsiveContainer>
            <RadarChart data={radarChartData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis />
              <Radar
                name="Student"
                dataKey="score"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.6}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        <div className="w-full sm:w-1/2 h-[240px] glass">
          <ResponsiveContainer>
            <LineChart data={lineChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="score" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="flex mt-3 gap-2 flex-wrap sm:flex-nowrap">
        <div className="w-full sm:w-1/2 h-[240px] glass">
          <ResponsiveContainer>
            <BarChart data={histogramData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="bin" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="w-full sm:w-1/2 h-[240px] glass">
          <ResponsiveContainer>
            <BarChart data={boxPlotData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="subject" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="q1" fill="#8884d8" />
              <Bar dataKey="median" fill="#82ca9d" />
              <Bar dataKey="q3" fill="#ffc658" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
