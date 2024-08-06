import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const uData = [5000, 7000, 4000, 6000, 8000, 9000, 10000];
const pData = [9000, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  "5",
  "9",
  "12",
  "16",
  "24",
  "40",
  "60",
];

export default function ActivityChart() {
  return (
    <BarChart
      height={200}
      series={[
        {
          data: pData,
          id: "pvId",
          yAxisId: "leftAxisId",
        },
        {
          data: uData,
          id: "uvId",
        },
      ]}
      xAxis={[{ data: xLabels, scaleType: "band" }]}
      yAxis={[{ id: "leftAxisId" }, { id: "rightAxisId" }]}
      rightAxis="rightAxisId"
    />
  );
}
