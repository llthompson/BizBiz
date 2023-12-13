import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete'

const Listings = (props) => {
    console.log('here are the', props)
    return (
        <div>
            <div>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="business table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Hours</TableCell>
                                <TableCell>Location</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.businesses.map((business) => (
                                <TableRow
                                    key={business.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {business.name}
                                    </TableCell>
                                    <TableCell>{business.description}</TableCell>
                                    <TableCell>{business.hours}</TableCell>
                                    <TableCell>{business.location}</TableCell>
                                    {props.isLoggedIn && (
                                        <TableCell>
                                            <DeleteIcon
                                                onClick={() => {
                                                    const index = props.businesses.indexOf(business);
                                                    console.log('Deleting business at index:', index);
                                                    props.removeRow(index);
                                                }}
                                                className="icon text-red"
                                            />
                                        </TableCell>
                                    )}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
};

export default Listings;
