export const metricReference = [
  {
    name: "allYearAverage",
    nonDimUnit: "none",
    dimUnit: "cfs",
    display: "Annual Average",
    isBoxplotOverlay: false,
    tableName: "AllYears",
    displayTableName: "Annual",
    columnName: "average",
    boxPlotOverLayMethods: ["", ""],
    colors: ["#f9a825", "#c17900"],
    hidden: true,
  },
  {
    name: "allYearStandardDeviation",
    display: "Annual Standard Deviation",
    isBoxplotOverlay: false,
    tableName: "AllYears",
    displayTableName: "Annual",
    columnName: "standardDeviation",
    boxPlotOverLayMethods: ["", ""],
    colors: ["#fbc02d", "#c49000"],
    nonDimUnit: "none",
    dimUnit: "cfs",
    hidden: true,
  },
  {
    name: "allYearCoeffientVariance",
    display: "Annual Coeffient of Variation",
    isBoxplotOverlay: false,
    tableName: "AllYears",
    displayTableName: "Annual",
    columnName: "coeffientVariance",
    boxPlotOverLayMethods: ["#fdd835", "#c6a700"],
    colors: ["#fbc02d", "#c49000"],
    nonDimUnit: "none",
    dimUnit: "none",
    hidden: true,
  },
  {
    name: "springTiming",
    display: "Recession Timing",
    isBoxplotOverlay: true,
    tableName: "Springs",
    displayTableName: "Spring Recession",
    columnName: "timing",
    boxPlotOverLayMethods: [
      "fetchSpringBoxPlotData",
      "removeSpringBoxPlotData",
    ],
    colors: ["#2e7d32", "#005005"],
    nonDimUnit: "Date",
    dimUnit: "Date",
  },
  {
    name: "springMagnitude",
    display: "Recession Magnitude",
    isBoxplotOverlay: true,
    tableName: "Springs",
    displayTableName: "Spring Recession",
    columnName: "magnitude",
    boxPlotOverLayMethods: [
      "fetchSpringBoxPlotData",
      "removeSpringBoxPlotData",
    ],
    colors: ["#388e3c", "#00600f"],
    nonDimUnit: "none",
    dimUnit: "cfs",
  },
  {
    name: "springDuration",
    display: "Recession Duration",
    isBoxplotOverlay: false,
    tableName: "Springs",
    displayTableName: "Spring Recession",
    columnName: "duration",
    boxPlotOverLayMethods: ["", ""],
    colors: ["#43a047", "#00701a"],
    nonDimUnit: "days",
    dimUnit: "days",
  },
  {
    name: "springRateOfChange",
    display: "Recession Rate of Change",
    isBoxplotOverlay: false,
    tableName: "Springs",
    displayTableName: "Spring Recession",
    columnName: "rateOfChange",
    boxPlotOverLayMethods: ["", ""],
    colors: ["#4caf50", "#087f23"],
    nonDimUnit: "%",
    dimUnit: "%",
  },
  {
    name: "summerTiming",
    display: "Dry Season Start Timing",
    isBoxplotOverlay: true,
    tableName: "Summers",
    displayTableName: "Dry Season",
    columnName: "timing",
    boxPlotOverLayMethods: [
      "fetchSummerBoxPlotData",
      "removeSummerBoxPlotData",
    ],
    colors: ["#d84315", "#9f0000"],
    nonDimUnit: "Date",
    dimUnit: "Date",
  },
  {
    name: "summerMagnitude10",
    display: "Low Flow Magnitude",
    isBoxplotOverlay: true,
    tableName: "Summers",
    displayTableName: "Dry Season",
    columnName: "magnitude10",
    boxPlotOverLayMethods: [
      "fetchSummerBoxPlotData",
      "removeSummerBoxPlotData",
    ],
    colors: ["#e64a19", "#ac0800"],
    nonDimUnit: "none",
    dimUnit: "cfs",
  },
  {
    name: "summerMagnitude50",
    display: "Low Flow Magnitude 50P",
    isBoxplotOverlay: false,
    tableName: "Summers",
    displayTableName: "Dry Season",
    columnName: "magnitude50",
    boxPlotOverLayMethods: [
      "fetchSummerBoxPlotData",
      "removeSummerBoxPlotData",
    ],
    colors: ["#f4511e", "#b91400"],
    nonDimUnit: "none",
    dimUnit: "cfs",
    hidden: true,
  },
  {
    name: "summerDurationFlush",
    display: "Duration until Wet Season Initiation",
    isBoxplotOverlay: false,
    tableName: "Summers",
    displayTableName: "Dry Season",
    columnName: "durationFlush",
    boxPlotOverLayMethods: ["", ""],
    colors: ["#ff5722", "#c41c00"],
    nonDimUnit: "days",
    dimUnit: "days",
  },
  {
    name: "summerDurationWet",
    display: "Duration until Wet Season",
    isBoxplotOverlay: false,
    tableName: "Summers",
    displayTableName: "Dry Season",
    columnName: "durationWet",
    boxPlotOverLayMethods: ["", ""],
    colors: ["#ff7043", "#c63f17"],
    nonDimUnit: "days",
    dimUnit: "days",
  },
  {
    name: "summerNoFlow",
    display: "# of no-flow days",
    isBoxplotOverlay: false,
    tableName: "Summers",
    displayTableName: "Dry Season",
    columnName: "noFlowCount",
    boxPlotOverLayMethods: ["", ""],
    colors: ["#ff8a65", "#c75b39"],
    nonDimUnit: "counts",
    dimUnit: "counts",
  },
  {
    name: "fallTiming",
    display: "Event Timing",
    isBoxplotOverlay: true,
    tableName: "Falls",
    displayTableName: "Wet Season Initiation",
    columnName: "timing",
    boxPlotOverLayMethods: ["fetchFallBoxPlotData", "removeFallBoxPlotData"],
    colors: ["#ff8f00", "#c56000"],
    nonDimUnit: "Date",
    dimUnit: "Date",
  },
  {
    name: "fallMagnitude",
    display: "Event Magnitude",
    isBoxplotOverlay: true,
    tableName: "Falls",
    displayTableName: "Wet Season Initiation",
    columnName: "magnitude",
    boxPlotOverLayMethods: ["fetchFallBoxPlotData", "removeFallBoxPlotData"],
    colors: ["#ffa000", "#c67100"],
    nonDimUnit: "none",
    dimUnit: "cfs",
  },
  {
    name: "fallDuration",
    display: "Event Duration",
    isBoxplotOverlay: false,
    tableName: "Falls",
    displayTableName: "Wet Season Initiation",
    columnName: "duration",
    boxPlotOverLayMethods: ["", ""],
    colors: ["#ffc107", "#c79100"],
    nonDimUnit: "days",
    dimUnit: "days",
  },
  {
    name: "fallTimingWet",
    display: "Wet Season Start Timing",
    isBoxplotOverlay: true,
    tableName: "Falls",
    displayTableName: "Wet Season",
    columnName: "timingWet",
    boxPlotOverLayMethods: ["fetchFallBoxPlotData", "removeFallBoxPlotData"],
    colors: ["#ffb300", "#c68400"],
    nonDimUnit: "Date",
    dimUnit: "Date",
  },
  {
    name: "fallwinterMagWet",
    display: "Baseflow Magnitude",
    isBoxplotOverlay: true,
    tableName: "FallWinters",
    displayTableName: "Wet Season",
    columnName: "magWet",
    boxPlotOverLayMethods: [
      "fetchFallWinterBoxPlotData",
      "removeFallWinterBoxPlotData",
    ],
    colors: ["#00695c", "#003d33"],
    nonDimUnit: "none",
    dimUnit: "cfs",
  },
  {
    name: "winterMagnitude2",
    display: "High Flow Magnitude 2P",
    isBoxplotOverlay: true,
    tableName: "Winters",
    displayTableName: "Peak Magnitude High Flows",
    columnName: "magnitude2",
    boxPlotOverLayMethods: [
      "fetchWinterBoxPlotData",
      "removeWinterBoxPlotData",
    ],
    colors: ["#6a1b9a", "#38006b"],
    nonDimUnit: "none",
    dimUnit: "cfs",
  },
  {
    name: "winterMagnitude5",
    display: "High Flow Magnitude 5P",
    isBoxplotOverlay: true,
    tableName: "Winters",
    displayTableName: "Peak Magnitude High Flows",
    columnName: "magnitude5",
    boxPlotOverLayMethods: [
      "fetchWinterBoxPlotData",
      "removeWinterBoxPlotData",
    ],
    colors: ["#8e24aa", "#5c007a"],
    nonDimUnit: "none",
    dimUnit: "cfs",
  },
  {
    name: "winterMagnitude10",
    display: "High Flow Magnitude 10P",
    isBoxplotOverlay: true,
    tableName: "Winters",
    displayTableName: "Peak Magnitude High Flows",
    columnName: "magnitude10",
    boxPlotOverLayMethods: [
      "fetchWinterBoxPlotData",
      "removeWinterBoxPlotData",
    ],
    colors: ["#9c27b0", "#6a0080"],
    nonDimUnit: "none",
    dimUnit: "cfs",
  },
  {
    name: "winterMagnitude20",
    display: "High Flow Magnitude 20P",
    isBoxplotOverlay: true,
    tableName: "Winters",
    displayTableName: "Peak Magnitude High Flows",
    columnName: "magnitude20",
    boxPlotOverLayMethods: [
      "fetchWinterBoxPlotData",
      "removeWinterBoxPlotData",
    ],
    colors: ["#ab47bc", "#790e8b"],
    nonDimUnit: "none",
    dimUnit: "cfs",
  },
  {
    name: "winterMagnitude50",
    display: "High Flow Magnitude 50P",
    isBoxplotOverlay: false,
    tableName: "Winters",
    displayTableName: "Peak Magnitude High Flows",
    columnName: "magnitude50",
    boxPlotOverLayMethods: [
      "fetchWinterBoxPlotData",
      "removeWinterBoxPlotData",
    ],
    colors: ["#ba68c8", "#883997"],
    nonDimUnit: "none",
    dimUnit: "cfs",
    hidden: true,
  },
  {
    name: "winterTiming2",
    display: "High Flow Timing 2P",
    isBoxplotOverlay: false,
    tableName: "Winters",
    displayTableName: "Peak Magnitude High Flows",
    columnName: "timing2",
    boxPlotOverLayMethods: ["", ""],
    colors: ["#6a1b9a", "#38006b"],
    nonDimUnit: "Date",
    dimUnit: "Date",
    hidden: true,
  },
  {
    name: "winterTiming5",
    display: "High Flow Timing 5P",
    isBoxplotOverlay: false,
    tableName: "Winters",
    displayTableName: "Peak Magnitude High Flows",
    columnName: "timing5",
    boxPlotOverLayMethods: ["", ""],
    colors: ["#8e24aa", "#5c007a"],
    nonDimUnit: "Date",
    dimUnit: "Date",
    hidden: true,
  },
  {
    name: "winterTiming10",
    display: "High Flow Timing 10P",
    isBoxplotOverlay: false,
    tableName: "Winters",
    displayTableName: "Peak Magnitude High Flows",
    columnName: "timing10",
    boxPlotOverLayMethods: ["", ""],
    colors: ["#9c27b0", "#6a0080"],
    nonDimUnit: "Date",
    dimUnit: "Date",
    hidden: true,
  },
  {
    name: "winterTiming20",
    display: "High Flow Timing 20P",
    isBoxplotOverlay: false,
    tableName: "Winters",
    displayTableName: "Peak Magnitude High Flows",
    columnName: "timing20",
    boxPlotOverLayMethods: ["", ""],
    colors: ["#ab47bc", "#790e8b"],
    nonDimUnit: "Date",
    dimUnit: "Date",
    hidden: true,
  },
  {
    name: "winterTiming50",
    display: "High Flow Timing 50P",
    isBoxplotOverlay: false,
    tableName: "Winters",
    displayTableName: "Peak Magnitude High Flows",
    columnName: "timing50",
    boxPlotOverLayMethods: ["", ""],
    colors: ["#ba68c8", "#883997"],
    nonDimUnit: "Date",
    dimUnit: "Date",
    hidden: true,
  },
  {
    name: "winterDuration2",
    display: "High Flow Duration 2P",
    isBoxplotOverlay: false,
    tableName: "Winters",
    displayTableName: "Peak Magnitude High Flows",
    columnName: "duration2",
    boxPlotOverLayMethods: ["", ""],
    colors: ["#6a1b9a", "#38006b"],
    nonDimUnit: "days",
    dimUnit: "days",
  },
  {
    name: "winterDuration5",
    display: "High Flow Duration 5P",
    isBoxplotOverlay: false,
    tableName: "Winters",
    displayTableName: "Peak Magnitude High Flows",
    columnName: "duration5",
    boxPlotOverLayMethods: ["", ""],
    colors: ["#8e24aa", "#5c007a"],
    nonDimUnit: "days",
    dimUnit: "days",
  },
  {
    name: "winterDuration10",
    display: "High Flow Duration 10P",
    isBoxplotOverlay: false,
    tableName: "Winters",
    displayTableName: "Peak Magnitude High Flows",
    columnName: "duration10",
    boxPlotOverLayMethods: ["", ""],
    colors: ["#9c27b0", "#6a0080"],
    nonDimUnit: "days",
    dimUnit: "days",
  },
  {
    name: "winterDuration20",
    display: "High Flow Duration 20P",
    isBoxplotOverlay: false,
    tableName: "Winters",
    displayTableName: "Peak Magnitude High Flows",
    columnName: "duration20",
    boxPlotOverLayMethods: ["", ""],
    colors: ["#ab47bc", "#790e8b"],
    nonDimUnit: "days",
    dimUnit: "days",
  },
  {
    name: "winterDuration50",
    display: "High Flow Duration 50P",
    isBoxplotOverlay: false,
    tableName: "Winters",
    displayTableName: "Peak Magnitude High Flows",
    columnName: "duration50",
    boxPlotOverLayMethods: ["", ""],
    colors: ["#ba68c8", "#883997"],
    nonDimUnit: "days",
    dimUnit: "days",
  },
  {
    name: "winterFrequency2",
    display: "High Flow Frequency 2P",
    isBoxplotOverlay: false,
    tableName: "Winters",
    displayTableName: "Peak Magnitude High Flows",
    columnName: "frequency2",
    boxPlotOverLayMethods: ["", ""],
    colors: ["#6a1b9a", "#38006b"],
    nonDimUnit: "counts",
    dimUnit: "counts",
  },
  {
    name: "winterFrequency5",
    display: "High Flow Frequency 5P",
    isBoxplotOverlay: false,
    tableName: "Winters",
    displayTableName: "Peak Magnitude High Flows",
    columnName: "frequency5",
    boxPlotOverLayMethods: ["", ""],
    colors: ["#8e24aa", "#5c007a"],
    nonDimUnit: "counts",
    dimUnit: "counts",
  },
  {
    name: "winterFrequency10",
    display: "High Flow Frequency 10P",
    isBoxplotOverlay: false,
    tableName: "Winters",
    displayTableName: "Peak Magnitude High Flows",
    columnName: "frequency10",
    boxPlotOverLayMethods: ["", ""],
    colors: ["#9c27b0", "#6a0080"],
    nonDimUnit: "counts",
    dimUnit: "counts",
  },
  {
    name: "winterFrequency20",
    display: "High Flow Frequency 20P",
    isBoxplotOverlay: false,
    tableName: "Winters",
    displayTableName: "Peak Magnitude High Flows",
    columnName: "frequency20",
    boxPlotOverLayMethods: ["", ""],
    colors: ["#ab47bc", "#790e8b"],
    nonDimUnit: "counts",
    dimUnit: "counts",
  },
  {
    name: "winterFrequency50",
    display: "High Flow Frequency 50P",
    isBoxplotOverlay: false,
    tableName: "Winters",
    displayTableName: "Peak Magnitude High Flows",
    columnName: "frequency50",
    boxPlotOverLayMethods: ["", ""],
    colors: ["#ba68c8", "#883997"],
    nonDimUnit: "counts",
    dimUnit: "counts",
  },
];
