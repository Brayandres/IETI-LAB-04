import React from 'react';
import {
  Checkbox,
  Grid,
  TextField,
  FormControlLabel,
  Paper,
  Button
} from '@mui/material';

const Login = () => {
    const [checked, setChecked] = React.useState(true);
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    return(
        <div className="App" style={{padding:30, marginTop:100}}>
            <Paper>
                <Grid
                container
                spacing={3}
                direction={'column'}
                justify={'center'}
                alignItems={'center'}
                >
                <Grid item xs={12}>
                    <TextField label="Mail / Username"></TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Password"></TextField>
                </Grid>
                <Grid  item xs={12}>
                    <FormControlLabel
                    control={
                        <Checkbox
                        checked={checked}
                        onChange={handleChange}
                        label={'Remember me'}
                        inputProps={{'aria-label':'primary checkbox'}}
                        />
                    }
                    label="Remember me"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button
                    fullWidth
                    variant="contained"
                    size='medium'
                    >Login</Button>
                </Grid>
                <div style={{marginBottom:50}}/>
                </Grid>
            </Paper>
        </div>
    );
};

export default Login;