"use client";
import React from "react";
import { Formik } from 'formik';
import Input from "@/components/ui/input";
import * as Yup from 'yup';
import { postRegister } from "@/services/utils/auth";
import { RegisterUserDto } from "@/types";

const RegisterSchema = Yup.object().shape({
    email: Yup.string().email('Email inválido').required('Requerido'),
    password: Yup.string()
        .min(6, 'La contraseña debe tener al menos 6 caracteres')
        .required('Requerido'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), ''], 'Las contraseñas deben coincidir')
        .required('Requerido'),
    phone: Yup.string().required('Requerido'),
    address: Yup.string().required('Requerido'),
    name: Yup.string().required('Requerido'),
});

interface RegisterUserForm extends RegisterUserDto {
    confirmPassword: string;
}

const RegisterForm = () => {

    const initialValues: RegisterUserForm = {
        name: 'Xavier',
        email: 'xavier@gmail.com',
        password: '123456',
        confirmPassword: '123456',
        address: '11 de sept 249',
        phone: '2477681549',
    };

    const handleOnSubmit = async (values: RegisterUserForm,
        { setSubmitting }: any) => {

        const { confirmPassword, ...data } = values;

        try {
            const res = await postRegister(data);

            if (res.errors) {
                return alert("Error al registrar el usuario");
            }

            alert("Usuario registrado correctamente");

        } catch (e) {

            alert("Error al registrar el usuario");
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <Formik

            initialValues={initialValues}
            validationSchema={RegisterSchema}
            onSubmit={handleOnSubmit}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
            }) => (
                <form onSubmit={handleSubmit}>
                    <Input
                        label="Nombre"
                        id="name"
                        type="text"
                        name="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        error={errors.name && touched.name ? errors.name : ''}
                    />
                    <Input
                        label="Email"
                        id="email"
                        type="text"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        error={errors.email && touched.email ? errors.email : ''}
                    />

                    <Input
                        label="Contraseña"
                        id="password"
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        error={errors.password && touched.password ? errors.password : ''}

                    />
                    <Input
                        label="Confirmar Contraseña"
                        id="confirmPassword"
                        type="password"
                        name="confirmPassword"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.confirmPassword}
                        error={errors.confirmPassword && touched.confirmPassword ? errors.confirmPassword : ''}

                    />
                    <Input
                        label="Telefono"
                        id="phone"
                        type="text"
                        name="phone"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phone}
                        error={errors.phone && touched.phone ? errors.phone : ''}

                    />

                    <Input
                        label="Direccion"
                        id="address"
                        type="text"
                        name="address"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.address}
                        error={errors.address && touched.address ? errors.address : ''}

                    />

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full mt-4 py-2 px-4 rounded-md text-white font-semibold bg-primary mb-4
                            ${isSubmitting ? 'hover:bg-primary-500 cursor-not-allowed' : 'hover:bg-primary-300'}
                        `}
                    >
                        Registrarse
                    </button>
                </form>
            )}
        </Formik>
    );
}

export default RegisterForm;

