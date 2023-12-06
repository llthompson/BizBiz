import React, { useState } from 'react'
import {
    Button,
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@mui/material'
import { MoreVert } from '@mui/icons-material'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Import = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [deleteIndex, setDeleteIndex] = useState(null);

    const handleMenuClick = (event, index) => {
        setAnchorEl(event.currentTarget);
        setDeleteIndex(index);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setDeleteIndex(null);
    };

    const handleDeleteMake = () => {
        if (deleteIndex !== null) {
            props.deleteMake(deleteIndex);
            handleMenuClose();
        }
    };

    return (
        <Container maxWidth="sm">
            <Button onClick={props.fetchMakes} variant="contained">
                Blah
            </Button>

            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
            >
                <MenuItem onClick={handleDeleteMake}>Delete</MenuItem>
            </Menu>

            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="left">Make</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.makes.map((make, index) => (
                        <TableRow key={make.MakeId}>
                            <TableCell>{make.MakeId}</TableCell>
                            <TableCell>{make.MakeName}</TableCell>
                            <TableCell align='center'>
                                <MoreVert onMouseEnter={(event) => handleMenuClick(event, index)} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Container>
    );
};

export default Import