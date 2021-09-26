import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { formatWeatherDescription } from '../../utils/weather/formatters';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        color: theme.palette.common.white,
        fontWeight: 700,
        fontSize: 12
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 10,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

const WeatherResults = ({results = []}) => (
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="weather results table">
            <TableHead className="table__header">
                <TableRow>
                    <StyledTableCell align="center">Searched Term</StyledTableCell>
                    <StyledTableCell align="center">Temperature &#8451;</StyledTableCell>
                    <StyledTableCell align="center">Feels Like &#8451;</StyledTableCell>
                    <StyledTableCell align="center">Description</StyledTableCell>
                    <StyledTableCell align="center">Location</StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {results.length > 0 
                ? results.map( row => (
                    <StyledTableRow
                        key={row.searchedTerm}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <StyledTableCell component="th" scope="row">{row.submitSearchTerm}</StyledTableCell>
                        <StyledTableCell align="center">{row.temperature}</StyledTableCell>
                        <StyledTableCell align="center">{row.feelsLike}</StyledTableCell>
                        <StyledTableCell>{formatWeatherDescription(row.weatherDescriptions)}</StyledTableCell>
                        <StyledTableCell>{row.placeName}</StyledTableCell>
                    </StyledTableRow>
                )) 
                : (
                    <StyledTableRow
                        key={'emptyRow'}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <StyledTableCell align="center" colSpan={5}>Please search a location</StyledTableCell>
                    </StyledTableRow>
                )
            }
            </TableBody>
        </Table>
    </TableContainer>
);

export { WeatherResults as default }