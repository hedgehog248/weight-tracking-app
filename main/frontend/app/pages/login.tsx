import React, {useState} from 'react';
import { Box, Button, FormControl, TextField } from '@mui/material';
import { useRouter } from 'next/router';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const onSubmit = () => {
    const response = true
    console.log(`username: ${username}`, `password: ${password}`)
    if (response) {
      router.push('/dashboard')
    } else {
      alert('ログインに失敗しました')
    }
  }
  
  return (
    <Box width='100v' height='100v' sx={ {backgroundColor: 'white'}}>
      <FormControl>
        <TextField id="username" label="Username" variant='outlined' onChange={(e) => setUsername(e.target.value)}/>
      </FormControl>
      <FormControl>
        <TextField id="password" label="Password" variant='outlined' onChange={(e) => setPassword(e.target.value)}/>
      </FormControl>
      <Button type='submit' variant="contained" onClick={onSubmit}>ログイン</Button>
    </Box>
  )
}

export default LoginPage;
