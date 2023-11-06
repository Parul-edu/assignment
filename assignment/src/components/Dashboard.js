import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { users } from '../utils/users';

const Dashboard = ({ userId }) => {
  const user = users.find((user) => user.id === parseInt(userId))
  return (
    <div>
      <h1>Dashboard</h1>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
            <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {user && ( 
              <TableRow key={user.id} style={{ backgroundColor: 'lightgreen' }}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.age}</TableCell>
                <TableCell>{user.score}</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Dashboard;
