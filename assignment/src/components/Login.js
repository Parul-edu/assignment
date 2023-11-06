import { Button, Grid, Paper, TextField } from '@mui/material'
import React, { useState } from 'react'
import { users } from '../utils/users'
const Login = () => {
   const paperStyle= {padding: 20, height: '70vh', width:300, margin: '20px auto'}
   const [name, setName] = useState('');

   const handleChange = (event) => {
     setName(event.target.value);
   };
 
   const handleSubmit = (event) => {
     event.preventDefault();
 
     const user = users.find((user) => user.name === name);
 
     if (user) {
       window.location.href = `/dashboard/${user.id}`;
     } else {
       window.location.href = '/error';
     }
   };
 
  return (
    <Grid container >
       <Paper style={paperStyle}>
          <Grid item xs={12} style={{alignItems: 'center' , justifyContent: 'center', display: 'flex'}}>
            <TextField
             label= 'UserName'
             placeholder=' Enter UserName'
             fullWidth
             value={name}
            onChange={handleChange}
            />
            
          </Grid>
         
          <Grid item xs={12} style={{alignItems: 'center' , justifyContent: 'center', display: 'flex', marginTop: '20px'}}>
            <Button style={{backgroundColor: 'blue', color: 'white'}} onClick={handleSubmit}>Login</Button>
          </Grid>
       </Paper>
    </Grid>
  )
}

export default Login