import {
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    Paper,
    TableBody

} from '@mui/material'
import data from '../utils/MOCK_DATA.json'

const MuiTable = () => {

    return (
        <TableContainer component={Paper}>
            <Table aria-label='simple-table'>
                <TableHead>
                    <TableRow>
                        <TableCell> pH Level </TableCell>
                        <TableCell> Temperature </TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {data.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.ph_level}</TableCell>
                            <TableCell>{row.temperature}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default MuiTable;