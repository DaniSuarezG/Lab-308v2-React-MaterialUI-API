import { Email, Lock, Visibility, VisibilityOff } from "@mui/icons-material"
import { Button, Card, CardActions, CardContent, CardHeader, Divider, IconButton, TextField } from "@mui/material"
import { blue } from "@mui/material/colors"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function LoginCard() {

  const [ isPassVisible, setIsPassVisible ] = useState(false)

  const navigate = useNavigate()

  function handleVisibleClick() {
    setIsPassVisible(!isPassVisible)
  }

  function handleLoginClick() {
    return navigate('/picoftheday')
  }

  return (
    <Card 
      sx={{ width: '700px', backgroundColor: blue[50] }}
      raised={true}
    >
      <CardHeader title='Login'/>
      <CardContent>
        <TextField
          classes={{root: 'myClaseNameDani'}}
          label='Email'
          variant='outlined'
          placeholder="Introduce Email"
          fullWidth={true}
          margin='dense'
          InputProps={{
            startAdornment: <Email/>
          }}
          />
        <TextField
          label='Password'
          variant='outlined'
          placeholder="Introduce Password"
          fullWidth={true}
          margin='dense'
          type={ isPassVisible ? 'text' : 'password' }
          InputProps={{
            startAdornment: <Lock/>,
            endAdornment: 
              <IconButton
                onClick={ handleVisibleClick }
              >
                { isPassVisible ? <Visibility/> : <VisibilityOff/> }
              </IconButton>
          }}
          />
      </CardContent>
      <Divider/>
      <CardActions sx={{display: 'flex', justifyContent: 'flex-end'}}>
        <Button
          size='small'
          color='secondary'
          variant='contained'
          >
          Register
        </Button>
        <Button
          size='small'
          color='primary'
          variant='contained'
          onClick={ handleLoginClick }
          >
          Login
        </Button>
      </CardActions>

    </Card>
  )
}

export default LoginCard