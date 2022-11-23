import React, { useState } from 'react'
import { Button, Grid, Typography, Divider, MenuItem, Menu, Popper } from '@mui/material'
import GlassBox from '../../../components/GlassBox'
import {
  Archive,
  Edit,
  Equalizer,
  KeyboardArrowDown,
  MoreHoriz,
  Weekend,
} from '@mui/icons-material'
import { Bar } from 'react-chartjs-2'
import { useEffect } from 'react'
import axios from 'axios'
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js'
import serviceStatisticApi from '../../../api/service-statistic'

const ListServices = () => {
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
  const [anchorEl, setAnchorEl] = useState()
  const [] = useState()
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl()
  }
  const [chart, setChart] = useState({})

  const fetchData = async () => {
    try {
      const datas = await serviceStatisticApi.getChart()
      setChart(datas)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  console.log(chart)

  const data = {
    labels: chart?.services?.map((x) => x.name),
    datasets: [
      {
        label: `doanh thu`,
        data: chart?.services?.map((x) => x.serviceRevenue),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        yAxisID: 'y',
      },
      {
        label: `lượt đặt`,
        data: chart?.services?.map((x) => x.serviceOrder),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        yAxisID: 'y1',
      },
    ],
  }
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      stacked: false,
      title: {
        display: true,
        text: 'Chart Dịch Vụ',
      },
    },
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        grid: {
          drawOnChartArea: true,
        },
      },
    },
  }
  return (
    <GlassBox
      sx={{
        overflowX: 'auto',
        margin: '25px 0 0',
        padding: { xs: '15px', sm: '30px' },
        height: '700px',
      }}
    >
      <Grid container justifyContent='space-between' paddingBottom={{ md: '10px', xs: '15px' }}>
        <Grid item xs={10} md={6}>
          <Typography variant='h2' color='text.secondary'>
            Thống kê dịch vụ
          </Typography>
        </Grid>

        <Button
          item
          xs={2}
          md={4}
          sx={{ display: 'flex', alignItems: 'center', padding: '7px 7px' }}
          id='demo-customized-button'
          aria-controls={open ? 'demo-customized-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
          variant='contained'
          onClick={handleClick}
          endIcon={<KeyboardArrowDown />}
        >
          Options
        </Button>
        <Menu
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          id='demo-customized-menu'
          MenuListProps={{
            'aria-labelledby': 'demo-customized-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose} disableRipple>
            TUẦN
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose} disableRipple>
            THÁNG
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose} disableRipple>
            NĂM
          </MenuItem>
        </Menu>
      </Grid>
      <Divider />
      <Bar options={options} data={data} />
    </GlassBox>
  )
}
export default ListServices
