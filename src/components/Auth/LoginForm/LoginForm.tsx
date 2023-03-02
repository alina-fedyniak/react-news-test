import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import { useNavigate } from "react-router-dom";
import {logIn} from "../feature/authSlice";
import {useAppDispatch} from "../../../store/hooks";
import {DataBaseAuth} from "../helpers/authConfig";

export interface IValues {
    username: string;
    password: string;
}

const initialValues = { username: "", password: "" };

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const validate = (values: any) => {
    return sleep(2000).then(() => {
        const errors: any = {};
        if (
            ![DataBaseAuth.USERNAME].includes(values.username)
        ) {
            errors.username = 'Not correct User Name or Password';
        } else if (
            ![DataBaseAuth.PASSWORD].includes(values.password)
        ) {
            errors.password = 'Not correct User Name or Password';
        }

        return errors;
    });
};

const LoginForm = () => {
    const { t } = useTranslation(['common']);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const onSubmit = (data: IValues, actions: FormikHelpers<any>) => {
        localStorage.setItem("username", "admin");
        dispatch(logIn({username: data.username, password: data.password}));
        actions.resetForm({values: initialValues});
        navigate("/profile");
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validate={validate}
            validateOnChange={false}
            validateOnBlur={false}
        >
            {({errors}) => (
                <Form>
                    <Box sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100vh"
                    }}>
                        <Box
                            sx={{
                                '& .MuiTextField-root': {m: 1, width: '25ch'},
                                boxShadow: '0px 10px 20px 5px rgba(0, 0, 0, 0.5)',
                                padding: 5,
                                borderRadius: 5,
                                textAlign: 'center',
                                width: '100%',
                                maxWidth: '25ch'
                            }}
                        >
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                                sx={{textAlign: 'center', color: '#72c0b5'}}
                            >
                                {t('profileForm')}
                            </Typography>
                            <div
                                style={{
                                display: 'flex',
                                flexDirection: 'column',
                                textAlign: 'start'
                            }}
                            >
                                <label htmlFor="username">{t('userName')}</label>
                                <Field
                                    id="username"
                                    name="username"
                                    placeholder="username"
                                />
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    textAlign: 'start'
                                }}
                            >
                                <label htmlFor="Password">{t('password')}</label>
                                <Field
                                    id="password"
                                    name="password"
                                    placeholder="password"
                                    type="password"
                                />
                                {errors.password || errors.username ?
                                    <Alert severity="error">{errors.password}{errors.username}</Alert>
                                    : null
                                }
                            </div>
                            <Button
                                type="submit"
                                variant="contained"
                                size="large"
                                sx={{
                                    background: '#72c0b5',
                                    marginTop: 3
                                }}
                            >
                                {t('login')}
                            </Button>
                        </Box>
                    </Box>
                </Form>
            )}
        </Formik>
    );
}

export default LoginForm;
