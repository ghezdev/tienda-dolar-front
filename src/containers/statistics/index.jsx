import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { buildData, buildConfig, options } from "../../utils/chart";
import * as UNITS from "../../components/atoms/unit";

function Statistics({ playersWhoArePlaying }) {
  const [dataChart, setDataChart] = useState(buildConfig(buildData()));

  useEffect(() => {
    const data = buildData();
    setDataChart(buildConfig(data));
  }, [playersWhoArePlaying]);

  return <Bar data={dataChart} options={options} width={UNITS.UNIT_600} height={UNITS.UNIT_300}/>;
}

export default Statistics;
