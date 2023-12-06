import React from 'react'
import {
    Button,
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@mui/material'

const Import = (props) => {

    return (

        <Container maxWidth="sm">
            <Button onClick={props.fetchMakes} variant="contained">Blah</Button>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="left">Make</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.makes.map(make => {
                        return (
                            <TableRow>
                                <TableCell>{make.MakeId}</TableCell>
                                <TableCell>{make.MakeName}</TableCell>
                                <TableCell>no one home</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>


        </Container>
    )

}

export default Import