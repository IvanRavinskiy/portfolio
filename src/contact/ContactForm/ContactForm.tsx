import React from 'react';
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./ContactForm.module.css"
import {useForm} from "react-hook-form";

type FormType = {
    name: string,
    email: string,
    message: string,
}

export const ContactForm = () => {

    const {register, handleSubmit, formState: {errors}, reset} = useForm<FormType>({
        defaultValues: {
            name: '',
            email: '',
            message: '',
        }
    })

    return (
        <div>
            <Grid>
                <FormControl>
                    <form className={styles.form} onSubmit={handleSubmit((data) =>{
                        reset()
                        alert(JSON.stringify(data))
                    })}>
                        <FormGroup>
                            <TextField inputProps={{style: {fontFamily: 'Poppins'}}}
                                       {...register('name', {required: 'Name is required.'})}
                                       placeholder='Enter your name'
                                       margin='normal'/>
                            <div className={styles.formError}>{errors.name?.message}</div>
                            <TextField inputProps={{style: {fontFamily: 'Poppins'}}}
                                       type='email'
                                       {...register('email', {
                                           required: 'Email is required.', pattern:
                                               {
                                                   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                                   message: 'Invalid email'
                                               }
                                       })}
                                       placeholder='Enter email'
                                       margin='normal'/>
                            <div className={styles.formError}>{errors.email?.message}</div>
                            <TextField inputProps={{style: {fontFamily: 'Poppins'}}}
                                       {...register('message', {required: 'Message is required.'})}
                                       multiline rows='4'
                                       placeholder='Enter your message here'
                                       margin='normal'/>
                            <div className={styles.formError}>{errors.message?.message}</div>
                            <Button type='submit' variant='outlined' color='primary'>
                                Send message
                            </Button>
                        </FormGroup>
                    </form>
                </FormControl>
            </Grid>
        </div>
    );
};

