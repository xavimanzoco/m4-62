import React from "react";
import Link from "next/link";
import RegisterForm from "./components/register-form";


const RegisterPage = () => {
    return (
        <div>

        <h2 className="text-center">Registrarse</h2>
        <RegisterForm />
        <p className="text-center">
            ¿Ya tienes cuenta? <Link href="/login" className="text-primary hover:underline">Inicia Sesion</Link>
            </p>
        
        </div>
    )
        
    
}


export default RegisterPage;