import React from 'react';
import { Button, TextField } from '@mui/material';
import 'aos/dist/aos.css';

import { useFormik } from 'formik';
import { useForm } from '@formspree/react';

const Form = () => {
  const [state, handleSubmit] = useForm('myyalzwe');

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      adress: '',
    },
    onSubmit: values => {
      formik.resetForm();
    },
  });
  return (
    <form
      data-aos="zoom-in"
      data-aos-duration="2000"
      action="https://formspree.io/f/myyalzwe"
      method="POST"
      direction="column"
      onSubmit={handleSubmit}
    >
      <TextField
        variant="standard"
        label="Primeiro Nome"
        id="firstName"
        type="text"
        name="firstName"
        onChange={formik.handleChange}
        value={formik.values.firstName}
        className="inputField"
      />

      <TextField
        variant="standard"
        label="Ultimo Nome"
        id="lastName"
        type="text"
        name="lastName"
        onChange={formik.handleChange}
        value={formik.values.lastName}
        className="inputField"
      />

      <TextField
        variant="standard"
        label=" Email"
        id="email"
        type="email"
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <TextField
        variant="standard"
        label=" Telefone"
        id="phoneNumber"
        type="text"
        name="phoneNumber"
        onChange={formik.handleChange}
        value={formik.values.phoneNumber}
      />
      <TextField
        variant="standard"
        label="Endereco"
        id="adress"
        type="text"
        name="adress"
        onChange={formik.handleChange}
        value={formik.values.adress}
      />

      <Button
        variant="outlined"
        type="submit"
        sx={{
          borderColor: '#000',
          color: '#000',
        }}
      >
        Enviar Formulário
      </Button>
    </form>
  );
};

export default Form;
