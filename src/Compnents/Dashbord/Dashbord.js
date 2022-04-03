import React from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

const Dashbord = () => {
    const data = [
        {
          "month": "Mar",
          "investment": 100000,
          "sell": 241,
          "revenue": 10401
        },
        {
          "month": "Apr",
          "investment": 200000,
         "sell": 423,
         "revenue": 24500
        },
        {
        "month": "May",
        "investment": 500000,
        "sell": 726,
        "revenue": 67010
        },
        {
         "month": "Jun",
         "investment": 500000,
         "sell": 529,
         "revenue": 40405
        },
        {
         "month": "Jul",
         "investment": 600000,
         "sell": 601,
         "revenue": 50900
        },
        {
        "month": "Aug",
        "investment": 700000,
        "sell": 670,
        "revenue": 61000
        },
      ]
    return (
        <div>
  <AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorinvestment" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorsell" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="month" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="investment" stroke="#8884d8" fillOpacity={1} fill="url(#colorinvestment)" />
  <Area type="monotone" dataKey="sell" stroke="#82ca9d" fillOpacity={1} fill="url(#colorsell)" />
</AreaChart> 
        </div>
    );
};

export default Dashbord;