import React from 'react'
import {
  Box,
  IconButton,
  Grid,
  Typography,
  Card,
  Stack,
  Avatar,
  AvatarGroup,
  Button,
} from '@mui/material'
import {
  AccountCircle,
  ArrowDownward,
  ArrowUpward,
  Equalizer,
  PeopleAltOutlined,
  PieChart,
  TrendingUp,
} from '@mui/icons-material'

const SummaryUser = () => {
  return (
    <Box sx={{ flexGrow: 1, marginTop: '50px' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              maxWidth: 1,
              borderRadius: '20px',
              boxShadow:
                '0px 12px 24px -4px rgba(145, 158, 171, 0.12), 0px 0px 2px rgba(145, 158, 171, 0.2)',
              minHeight: 1,
              display: { xs: 'flex', sm: 'block' },
              flexDirection: { xs: 'column', sm: 'none' },
              justifyContent: { xs: 'space-between' },
              padding: '20px',
            }}
          >
            <Stack
              direction={{ xs: 'row' }}
              justifyContent='space-between'
              alignItems={{ xs: 'center' }}
            >
              <Typography variant='body2' color='text.secondary'>
                User sử dụng dịch vụ nhiều nhất
              </Typography>
              <IconButton>
                <Avatar
                  alt='Customer A'
                  src='https://img.freepik.com/photos-gratuite/portrait-homme-blanc-isole_53876-40306.jpg?w=2000'
                  sx={{
                    width: { xs: '56px', sm: '46px' },
                    height: { xs: '56px', sm: '46px' },
                  }}
                />
              </IconButton>
            </Stack>
            <Typography
              variant='h3'
              color='text.secondary'
              sx={{ marginTop: '9px', lineHeight: '32.63px' }}
            >
              Customer A
            </Typography>
            <Typography
              variant='h6'
              color='text.secondary'
              sx={{ display: 'flex', justifyContent: 'end', color: '#696969 ', marginTop: '9px' }}
            >
              Xem chi tiết
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              maxWidth: 1,
              borderRadius: '20px',
              boxShadow:
                '0px 12px 24px -4px rgba(145, 158, 171, 0.12), 0px 0px 2px rgba(145, 158, 171, 0.2)',
              minHeight: 1,
              display: { xs: 'flex', sm: 'block' },
              flexDirection: { xs: 'column', sm: 'none' },
              justifyContent: { xs: 'space-between' },
              padding: '20px',
            }}
          >
            <Stack
              direction={{ xs: 'row' }}
              justifyContent='space-between'
              alignItems={{ xs: 'center' }}
            >
              <Typography variant='body2' color='text.secondary'>
                Số user đặt dịch vụ
              </Typography>
              <IconButton>
                <PeopleAltOutlined
                  sx={{
                    color: '#696969',
                    width: { xs: '30px', sm: '35px' },
                    height: { xs: '30px', sm: '35px' },
                  }}
                />
              </IconButton>
            </Stack>
            <Typography
              variant='h3'
              color='text.secondary'
              sx={{ marginTop: '9px', lineHeight: '32.63px' }}
            >
              12 user
            </Typography>
            <Typography
              variant='h6'
              color='text.secondary'
              sx={{ display: 'flex', justifyContent: 'end', color: '#229B16', marginTop: '8px' }}
            >
              2% <ArrowUpward />
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              maxWidth: 1,
              borderRadius: '20px',
              boxShadow:
                '0px 12px 24px -4px rgba(145, 158, 171, 0.12), 0px 0px 2px rgba(145, 158, 171, 0.2)',
              minHeight: 1,
              display: { xs: 'flex', sm: 'block' },
              flexDirection: { xs: 'column', sm: 'none' },
              justifyContent: { xs: 'space-between' },
              padding: '20px',
            }}
          >
            <Stack
              direction={{ xs: 'row' }}
              justifyContent='space-between'
              alignItems={{ xs: 'center' }}
            >
              <Typography variant='body2' color='text.secondary'>
                Số người dùng mới
              </Typography>
              <IconButton>
                <AvatarGroup
                  max={4}
                  sx={{
                    color: '#27BD2D',
                    width: { xs: '30px', sm: '35px' },
                    height: { xs: '30px', sm: '35px' },
                  }}
                >
                  <Avatar
                    alt='Remy Sharp'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-BWgSJvrTWlEgAq_Sr3z441SIuprijLFg7u_qC4qJwiS8JXnlkqz-F8cnkpZb9GJOHNE&usqp=CAU'
                  />
                  <Avatar
                    alt='Travis Howard'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr0kSiU0p5gAMglPUbBXIYSuvUbpiCISPXxXRNi1freoji9szplI-zu68CVVcL2D6_S1A&usqp=CAU'
                  />
                  <Avatar
                    alt='Cindy Baker'
                    src='data:image/jpeg;base64,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'
                  />
                  <Avatar
                    alt='Agnes Walker'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ6IXuJhik3AOVNu75nht2LC9_L6lU8GVD5Q&usqp=CAU'
                  />
                  <Avatar
                    alt='Trevor Henderson'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzu40PKjBteFRsGV2RQNRTmFaH6dZ5FehiJw&usqp=CAU'
                  />
                </AvatarGroup>
              </IconButton>
            </Stack>
            <Typography
              variant='h3'
              color='text.secondary'
              sx={{ marginTop: '9px', lineHeight: '32.63px' }}
            >
              5 user
            </Typography>
            <Typography
              variant='h6'
              color='text.secondary'
              sx={{ display: 'flex', justifyContent: 'end', color: '#FF0000', marginTop: '8px' }}
            >
              1% <ArrowDownward />
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default SummaryUser
