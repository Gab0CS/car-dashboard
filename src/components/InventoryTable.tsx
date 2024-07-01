"use client"
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Paper,
} from '@mui/material';
import { InventoryData } from '../../constants/tableDataFunctions';

interface InventoryTableProps {
  data: InventoryData[];
}

const InventoryTable: React.FC<InventoryTableProps> = ({ data }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>DATE</TableCell>
              <TableCell>NEW INVENTORY</TableCell>
              <TableCell>NEW TOTAL MSRP</TableCell>
              <TableCell>NEW AVERAGE MSRP</TableCell>
              <TableCell>USED INVENTORY</TableCell>
              <TableCell>USED TOTAL MSRP</TableCell>
              <TableCell>USED AVERAGE MSRP</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow key={row.date}>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.newInventory}</TableCell>
                <TableCell>{`$${row.newTotalMsrp.toLocaleString()}`}</TableCell>
                <TableCell>{`$${row.newAverageMsrp.toFixed(2)}`}</TableCell>
                <TableCell>{row.usedInventory}</TableCell>
                <TableCell>{`$${row.usedTotalMsrp.toLocaleString()}`}</TableCell>
                <TableCell>{`$${row.usedAverageMsrp.toFixed(2)}`}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={data.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default InventoryTable;
