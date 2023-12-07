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
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = (event, index) => {
        console.log("Clicked index:", index);
        setAnchorEl(event.currentTarget);
        setDeleteIndex(index);
        setIsMenuOpen(true);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setDeleteIndex(null);
        setIsMenuOpen(false);
    };

    const handleDeleteMake = () => {
        console.log("Deleting index:", deleteIndex);
        if (deleteIndex !== null) {
            props.removeCar(deleteIndex);
            handleMenuClose();
        }
    };

    return (
        <Container maxWidth="sm">
            <Button onClick={props.fetchMakes} variant="contained">
                Import
            </Button>

            <Menu
                anchorEl={anchorEl}
                open={isMenuOpen}
                onClose={handleMenuClose}
                autoFocus={false}
                onMouseLeave={() => setIsMenuOpen(false)}
                onMouseEnter={() => setIsMenuOpen(true)}
            >
                <MenuItem onClick={handleDeleteMake}>Delete</MenuItem>
            </Menu>

            {/* <MenuItem onClick={handleDeleteMake}>Delete</MenuItem>
            </Menu> */}

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

export default Import;
