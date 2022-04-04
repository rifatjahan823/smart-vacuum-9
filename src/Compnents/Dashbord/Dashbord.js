import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ComposedChart, Label, LabelList, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

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
         "investment": 300000,
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
        <div className='container'>
        <div className='row mt-5'>
          {/*------------------ Chart -1------- */}
             <div className='col-lg-6 col-md-6 col-sm-12'>
             <ComposedChart width={350} height={250} data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid stroke="#f5f5f5" />
            <Area type="monotone" dataKey="revenue" fill="#8884d8" stroke="#8884d8" />
            <Bar dataKey="investment" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="sell" stroke="#ff7300" />
            </ComposedChart>
            </div> 
             {/*------------------ Chart -2------- */}
            <div className='col-lg-6 col-md-6 col-sm-12'>
            <PieChart width={350} height={250}>
            <Tooltip />
            <Pie data={data} dataKey="revenue" nameKey="month" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
            <Pie data={data} dataKey="revenue" nameKey="month" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
            </PieChart>
            </div>
             {/*------------------ Chart -3------- */}
            <div className='col-lg-6 col-md-6 col-sm-12 mt-5'>
            <LineChart width={350} height={250} data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sell" stroke="#8884d8" />
            <Line type="monotone" dataKey="investment" stroke="#82ca9d" />
            </LineChart>
            </div>
             {/*------------------ Chart -4------- */}
            <div className='col-lg-6 col-md-6 col-sm-12 mt-5'>
            <BarChart
            width={350}
            height={250}
            data={data}
            margin={{ top: 15, right: 30, left: 20, bottom: 5 }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month">
            </XAxis>
            <Tooltip />
            <Bar dataKey="sell" fill="#8884d8">
              <LabelList dataKey="name" position="insideTop" angle="45"  />
            </Bar>
            <Bar dataKey="investment" fill="#82ca9d">
              <LabelList dataKey="investment" position="top" />
            </Bar>
            </BarChart>
            </div>
        </div>
        </div>
    );
};

export default Dashbord;