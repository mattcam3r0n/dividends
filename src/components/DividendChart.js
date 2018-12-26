import React, { Component } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const data = [
  { paymentDate: '2018-03-08', month: 'Mar', year: '2018', amount: 0.42 },
  { paymentDate: '2017-12-14', month: 'Dec', year: '2017', amount: 0.42 },
  { paymentDate: '2017-08-15', month: 'Aug', year: '2017', amount: 0.39 },
  { paymentDate: '2017-05-16', month: 'May', year: '2017', amount: 0.39 },
  { paymentDate: '2017-02-14', month: 'Feb', year: '2017', amount: 0.39 },
  { paymentDate: '2016-11-15', month: 'Nov', year: '2016', amount: 0.39 },
];

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

class CustomTick extends Component {
  render() {
    const { x, y, stroke, payload } = this.props;
    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={8}
          textAnchor="end"
          fill="#666"
        //   transform="rotate(-35)"
        >
          {payload.value}
        </text>
        {/* TODO: Only show year for first month of year */}
        <text
          x={0}
          y={16}
          dy={8}
          textAnchor="end"
          fill="#666"
        //   transform="rotate(-35)"
        >
          2018
        </text>
      </g>
    );
  }
}

class DividendChart extends Component {
  state = {};
  render() {
    return (
      <BarChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" tick={<CustomTick />} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="amount" fill="#8884d8" />
      </BarChart>
    );
  }
}

export default DividendChart;
