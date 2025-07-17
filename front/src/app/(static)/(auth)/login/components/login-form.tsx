'use client';

import React from 'react';
import {EyeIcon, EyeOff } from 'lucide-react';
import * as yup from 'yup';
import Input from '@/components/ui/input';
import { postLogin } from '@/services/utils/auth';
import { toast } from 'react-toastify';
import { useAuthContext } from '@/context/authContext';
import { useRouter } from 'next/navigation';
import { routes } from '@/routes';


const loginSchema = yup.object({
  email: yup.string().email('El email debe ser válido').required('El email debe ser valido'),
    password: yup.string().min(6, "La contraseña debe tener al menos 6 caracteres").required('La contraseña es obligatoria'),
});

const LoginForm = () => {
    const { saveUserData } = useAuthContext();
    const router = useRouter();
    const [formData, setFormData] = React.useState({
        email: "xavier@gmail.com",
        password: "123456",
    });
    const [errors, setErrors] = React.useState<Record<string, string>>({});
    const [loading, setLoading] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false);

    const handleValidation = async () => {
        try {
            await loginSchema.validate(formData, { abortEarly: false });
            console.log("Validación exitosa");
        } catch (error) {
            if (error instanceof yup.ValidationError) {
                const newErrors: Record<string, string> = {};
                error.inner.forEach((curr) => {
                    if (curr.path) {
                        newErrors[curr.path] = curr.message;
                    }
                });
                setErrors(newErrors);
            }
        }
    };

    const handleShowPassword = () => {
        setShowPassword((prev) => !prev);
    };

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        handleValidation();
        e.preventDefault();
        
        try{
            setLoading(true)
            const res = await postLogin(formData);

            if (res.errors) {
                console.log("error", res);
                return toast.error("Ocurrio un error al iniciar sesion")
                
            }

            console.log("respuesta", res.data)
            toast.success ("Iniciaste sesion con exito")
            saveUserData(res.data);
            // localStorage.setItem("token", res.data.token);
            setTimeout(() => {
                router.push(routes.home);
            }, 2000);
        }
        catch(error:unknown) {
            toast.error("Ocurrio un error al iniciar sesion");
            console.error("Error al iniciar sesión:", error);
        } finally {
            setTimeout(() => {setLoading(false)}, 2000)
        }


    };
    

    return (
        <form className="flex flex-col" onSubmit={onSubmit}>
            <Input
                label="Email"
                id="email"
                type="text"
                placeholder="Ingrese su email"
                className="mb-4"
                value={formData.email}
                onChange={handleOnChange}
                error={errors?.email}
            />
           
            <Input
                label="Contraseña"
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Ingrese su contraseña"
                className="mb-4"
                value={formData.password}
                onChange={handleOnChange}
                error={errors?.password}
            >
                <div onClick={handleShowPassword}>{showPassword ? <EyeIcon /> : <EyeOff  />}</div>
            </Input>
        
            <button className="bg-primary-500 text-white py-2 px-4 rounded hover:bg-primary-600 mb-4 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50" disabled={loading}>
                Iniciar Sesión
            </button>
        </form>
    );
};


export default LoginForm;