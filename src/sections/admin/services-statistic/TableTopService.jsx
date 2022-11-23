import {
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import GlassBox from '../../../components/GlassBox'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: 'rgba(255, 99, 132, 0.5)',
    color: '#ffff',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#00000',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))

const TableTopService = () => {
  return (
    <GlassBox
      sx={{
        overflowX: 'auto',
        margin: '25px 0 0',
        padding: { xs: '15px', sm: '30px' },
        height: '500px',
      }}
    >
      <Typography variant='h2' color='text.secondary' paddingBottom={{ md: '10px', xs: '15px' }}>
        Top doanh thu
      </Typography>
      <Divider sx={{ marginBottom: '40px' }} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label='customized table'>
          <TableHead>
            <TableRow>
              <StyledTableCell>Dịch vụ </StyledTableCell>
              <StyledTableCell align='right'>Giá tiền&nbsp;(vnd)</StyledTableCell>
              <StyledTableCell align='right'>Số lượt sử dụng</StyledTableCell>
              <StyledTableCell align='right'>Doanh thu&nbsp;(vnd)</StyledTableCell>
              <StyledTableCell align='right'>Trạng thái</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <StyledTableRow>
              <StyledTableCell component='th' scope='row'>
                gdgdfgdf
              </StyledTableCell>
              <StyledTableCell align='right'>fdgdgdfg</StyledTableCell>
              <StyledTableCell align='right'>ghmghjgh</StyledTableCell>
              <StyledTableCell align='right'>yututu</StyledTableCell>
              <StyledTableCell align='right'>jjjjjjj</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component='th' scope='row'>
                gdgdfgdf
              </StyledTableCell>
              <StyledTableCell align='right'>fdgdgdfg</StyledTableCell>
              <StyledTableCell align='right'>ghmghjgh</StyledTableCell>
              <StyledTableCell align='right'>yututu</StyledTableCell>
              <StyledTableCell align='right'>jjjjjjj</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component='th' scope='row'>
                gdgdfgdf
              </StyledTableCell>
              <StyledTableCell align='right'>fdgdgdfg</StyledTableCell>
              <StyledTableCell align='right'>ghmghjgh</StyledTableCell>
              <StyledTableCell align='right'>yututu</StyledTableCell>
              <StyledTableCell align='right'>jjjjjjj</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component='th' scope='row'>
                gdgdfgdf
              </StyledTableCell>
              <StyledTableCell align='right'>fdgdgdfg</StyledTableCell>
              <StyledTableCell align='right'>ghmghjgh</StyledTableCell>
              <StyledTableCell align='right'>yututu</StyledTableCell>
              <StyledTableCell align='right'>jjjjjjj</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component='th' scope='row'>
                gdgdfgdf
              </StyledTableCell>
              <StyledTableCell align='right'>fdgdgdfg</StyledTableCell>
              <StyledTableCell align='right'>ghmghjgh</StyledTableCell>
              <StyledTableCell align='right'>yututu</StyledTableCell>
              <StyledTableCell align='right'>jjjjjjj</StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </GlassBox>
  )
}

export default TableTopService
