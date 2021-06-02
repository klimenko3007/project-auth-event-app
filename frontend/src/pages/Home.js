import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Plot from 'react-plotly.js';
import { format } from 'date-fns'


const array = [
  {
    date: "2015-01-04",
    feeling: 0.5
  },
  {
    date: "2015-01-05",
    feeling: 0.8
  },
  {
    date: "2015-02-05",
    feeling: 0.3
  },
  {
    date: "2015-02-10",
    feeling: 0.4
  },
  {
    date: "2015-03-06",
    feeling: 0.7
  },
  {
    date: "2015-04-07",
    feeling: 0.1
  }]

const Home = () => {
  const [x, setX] = useState([])
  const [y, setY] = useState([])
  useEffect(() => {
    fetch('http://localhost:8080/users/60acd8b3444886754daa614e/feelings')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setX(data.map(item => format(new Date(item.createdAt), 'd MMM H:mm:ss' )))
        setY(data.map(item => item.value))
      })

      console.log(format(new Date(array[0].date), 'yyyy MMMM dd'))
  }, [])
  
  return (
    <div>
      <Link to='/login'>
        Log in
      </Link>

      <div style={{ width: 100 }}>
        <Plot
          config={{ displayModeBar: false, responsive: true }}
          data={[
            {
              x: x,
              y: y,
              type: 'bar',
              mode: 'lines+markers+text',
              marker: { color: 'blue' },
              opacity: 0.5,
              hoverinfo: 'y'

            }
          ]}
          layout={
            {
              // width: 100,
              // height: 100,
              autosize: true,
              xaxis: {
                title: 'timeline'
              },
              yaxis: {
                title: 'mood',
                //showticklabels: false,
                range: [0, 1],
                tickvals: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9],
                ticktext: ['sad', 'depressed', 'stressed', 'excited', 'curious', 'fearsome', 'content', 'joyful', 'happy', 'extatic']
              },
              title: {
                text: 'My mood',
                font: {
                  family: "Arial", size: 50, color: "red"
                }
              }
            }
          }
        />
      </div>
    </div>
  )
}
export default Home