import { Box, Link, Stack, Typography } from '@mui/material'
import React from 'react'
import GlassBox from '../../../components/GlassBox'

const TableUser = () => {
  return (
    <div>
      <GlassBox
        sx={{
          overflowX: 'auto',
          margin: '25px 0 0',
          padding: { xs: '15px', sm: '30px' },
          height: '500px',
          width: '580px',
        }}
      >
        <Typography variant='h6' color='text.secondary' margin='5px 0 25px'>
          Table User
        </Typography>
        <Stack direction='row' alignItems='center' spacing={2} margin='25px 0 0 '>
          <Box
            component='img'
            alt=''
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3mvvPfBAWS0l0yiCCDlfD9xvztrZ2NUa9uA&usqp=CAU'
            sx={{ width: 48, height: 48, borderRadius: 1.5, flexShrink: 0 }}
          />

          <Box sx={{ minWidth: 240, flexGrow: 1 }}>
            <Link color='inherit' variant='subtitle2' underline='hover' noWrap>
              Customer A
            </Link>

            <Typography variant='body2' sx={{ color: 'text.secondary' }} noWrap>
              Đ/C:Cầu Giấy, Hà Nội
            </Typography>
          </Box>

          <Typography variant='caption' sx={{ pr: 3, flexShrink: 0, color: 'text.secondary' }}>
            13 giờ trước
          </Typography>
        </Stack>
        <Stack direction='row' alignItems='center' spacing={2} margin='25px 0 0 '>
          <Box
            component='img'
            alt=''
            src='https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=600'
            sx={{ width: 48, height: 48, borderRadius: 1.5, flexShrink: 0 }}
          />

          <Box sx={{ minWidth: 240, flexGrow: 1 }}>
            <Link color='inherit' variant='subtitle2' underline='hover' noWrap>
              Customer B
            </Link>

            <Typography variant='body2' sx={{ color: 'text.secondary' }} noWrap>
              Đ/C:Từ Liêm, Hà Nội
            </Typography>
          </Box>

          <Typography variant='caption' sx={{ pr: 3, flexShrink: 0, color: 'text.secondary' }}>
            13 giờ trước
          </Typography>
        </Stack>
        <Stack direction='row' alignItems='center' spacing={2} margin='25px 0 0 '>
          <Box
            component='img'
            alt=''
            src='https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=600'
            sx={{ width: 48, height: 48, borderRadius: 1.5, flexShrink: 0 }}
          />

          <Box sx={{ minWidth: 240, flexGrow: 1 }}>
            <Link color='inherit' variant='subtitle2' underline='hover' noWrap>
              Customer C
            </Link>

            <Typography variant='body2' sx={{ color: 'text.secondary' }} noWrap>
              Đ/C:Hà Đông, Hà Nội
            </Typography>
          </Box>

          <Typography variant='caption' sx={{ pr: 3, flexShrink: 0, color: 'text.secondary' }}>
            13 giờ trước
          </Typography>
        </Stack>
        <Stack direction='row' alignItems='center' spacing={2} margin='25px 0 0 '>
          <Box
            component='img'
            alt=''
            src='https://images.pexels.com/photos/2887718/pexels-photo-2887718.jpeg?auto=compress&cs=tinysrgb&w=600'
            sx={{ width: 48, height: 48, borderRadius: 1.5, flexShrink: 0 }}
          />

          <Box sx={{ minWidth: 240, flexGrow: 1 }}>
            <Link color='inherit' variant='subtitle2' underline='hover' noWrap>
              Customer D
            </Link>

            <Typography variant='body2' sx={{ color: 'text.secondary' }} noWrap>
              Đ/C:Long Biên, Hà Nội
            </Typography>
          </Box>

          <Typography variant='caption' sx={{ pr: 3, flexShrink: 0, color: 'text.secondary' }}>
            13 giờ trước
          </Typography>
        </Stack>
        <Stack direction='row' alignItems='center' spacing={2} margin='25px 0 0 '>
          <Box
            component='img'
            alt=''
            src='https://images.pexels.com/photos/3536991/pexels-photo-3536991.jpeg?auto=compress&cs=tinysrgb&w=600'
            sx={{ width: 48, height: 48, borderRadius: 1.5, flexShrink: 0 }}
          />

          <Box sx={{ minWidth: 240, flexGrow: 1 }}>
            <Link color='inherit' variant='subtitle2' underline='hover' noWrap>
              Customer E
            </Link>

            <Typography variant='body2' sx={{ color: 'text.secondary' }} noWrap>
              Đ/C:Thanh Xuân, Hà Nội
            </Typography>
          </Box>

          <Typography variant='caption' sx={{ pr: 3, flexShrink: 0, color: 'text.secondary' }}>
            13 giờ trước
          </Typography>
        </Stack>
        <Stack direction='row' alignItems='center' spacing={2} margin='25px 0 0 '>
          <Box
            component='img'
            alt=''
            src='https://images.pexels.com/photos/2859616/pexels-photo-2859616.jpeg?auto=compress&cs=tinysrgb&w=600'
            sx={{ width: 48, height: 48, borderRadius: 1.5, flexShrink: 0 }}
          />

          <Box sx={{ minWidth: 240, flexGrow: 1 }}>
            <Link color='inherit' variant='subtitle2' underline='hover' noWrap>
              Customer F
            </Link>

            <Typography variant='body2' sx={{ color: 'text.secondary' }} noWrap>
              Đ/C:Mỹ Đình, Hà Nội
            </Typography>
          </Box>

          <Typography variant='caption' sx={{ pr: 3, flexShrink: 0, color: 'text.secondary' }}>
            13 giờ trước
          </Typography>
        </Stack>
      </GlassBox>
    </div>
  )
}

export default TableUser
