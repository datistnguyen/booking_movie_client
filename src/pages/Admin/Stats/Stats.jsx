import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import moment from 'moment';
import _ from 'lodash';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = [
    moment(new Date()).subtract(6, "days").format("ddd"),
    moment(new Date()).subtract(5, "days").format("ddd"),
    moment(new Date()).subtract(4, "days").format("ddd"),
    moment(new Date()).subtract(3, "days").format("ddd"),
    moment(new Date()).subtract(2, "days").format("ddd"),
    moment(new Date()).subtract(1, "days").format("ddd"),
    moment(new Date()).format("ddd"),
    ];

export default function Stats() {
    const [dataResult, setDataResult]= useState([])
    const [revenueThisMonth, setRevenueThisMonth]= useState(0)
    const [revenueLastMonth, setRevenueLastMonth]= useState(0)

    useEffect(()=> {
        (async()=> {
            const res= await axios({
                url: "http://localhost:8080/book/stats",
                method: "get"
            })
            const result= await res.data
            setRevenueThisMonth(_.sumBy(result?.revenue?.filter(item=> moment(item?.time_created).format("MM-YYYY") === moment(new Date()).format("MM-YYYY")), function(e) {return parseInt(e.price)}))
            setRevenueLastMonth(_.sumBy(result?.revenue?.filter(item=> moment(item?.time_created).format("MM-YYYY") === moment(new Date()).subtract(1, "months").format("MM-YYYY")), function(e) {return parseInt(e.price)}))
            
            return setDataResult(result)
        })()
      }, [])
    const data = {
        labels,
        datasets: [
          {
            label: 'Revenue',
            data: dataResult?.last7days,
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      };
  
  return (
    <>
        <div style={{marginBottom: 16, fontSize: 32}}>Revenue in the last 7 days</div>
        <Line options={options} data={data} />
        <div style={{marginBottom: 16, fontSize: 32, marginTop: 16}}>Revenue compared to the previous month</div>
        <div style={{padding: 12, background: "#fff", borderRadius: 10, width: 200}}>
            <div style={{marginBottom: 12}}>Revenue this month</div>
            <div style={{fontSize: 24}}>{revenueThisMonth}đ</div>
            <div className={"c-flex-center"} style={{justifyContent: "space-between", width: '100%'}}>
                <div>Compare with last month</div>
                <div>{revenueThisMonth / (revenueLastMonth === 0 ? 1 : revenueLastMonth) * 100}</div>
            </div>
        </div>
    </>
  )
}
