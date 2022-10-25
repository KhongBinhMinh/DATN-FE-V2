import React from 'react'
import { Typography, Breadcrumbs, Link, Box, Grid } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import SummaryUser from '../../../sections/admin/users-statistic/SummaryUser'
import ChartUser from '../../../sections/admin/users-statistic/ChartUser'
import TableUser from '../../../sections/admin/users-statistic/TableUser'

const UserStatistic = () => {
  return (
    <>
      <Breadcrumbs separator='/'>
        <Link underline='none' color='GrayText' component={RouterLink} to='/admin/dashboard'>
          Dashboard
        </Link>
        <Typography variant='body1' color='GrayText'>
          Thống kê
        </Typography>
        <Typography variant='body1' color='primary'>
          Người dùng
        </Typography>
      </Breadcrumbs>
      <SummaryUser />
      <Grid container spacing={1}>
        <Grid item xs={1} md={6}>
          <ChartUser />
        </Grid>
        <Grid item xs={1} md={6}>
          <TableUser />
        </Grid>
      </Grid>
    </>
  )
}

export default UserStatistic
