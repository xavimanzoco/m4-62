import React from "react";
import LoginForm from "./components/login-form";
import Link from "next/link";


const LoginPage = () => {
    return (
        <div>

        <h2 className="text-center">Iniciar sesion</h2>
        <LoginForm />
        <p className="text-center">
            ¿No tienes cuenta? <Link href="/register" className="text-primary hover:underline">Registrate</Link>
            </p>
        
        </div>
    )
        
    
}


export default LoginPage;