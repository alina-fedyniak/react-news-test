import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';

const LoginForm = () => {
    const { t } = useTranslation(['common']);

    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh"
        }}>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                    boxShadow: '0px 10px 20px 5px rgba(0, 0, 0, 0.5)',
                    padding: 5,
                    borderRadius: 5,
                    textAlign: 'center'
                }}
                noValidate
                autoComplete="off"
            >
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{textAlign: 'center', color: '#72c0b5'}}
                >
                    {t('profileForm')}
                </Typography>
                <div>
                    <TextField
                        id="filled-login-input"
                        label="User Name"
                        type="userName"
                        autoComplete="current-userName"
                        variant="filled"
                    />
                </div>
                <div>
                    <TextField
                        id="filled-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="filled"
                    />
                </div>
                <Button
                    type="submit"
                    variant="contained"
                    sx={{
                        background: '#72c0b5',
                        marginTop: 3
                }}
                >
                    {t('login')}
                </Button>
            </Box>
        </Box>
    );
}

export default LoginForm;
