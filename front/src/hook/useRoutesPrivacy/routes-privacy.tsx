"use client";
import React from 'react';
import useRoutesPrivacy from './useRoutesPrivacy';
import { Loader2 } from 'lucide-react';

const RoutesPrivacy = ({children}: {children: React.ReactNode}) => {
    const {loading} = useRoutesPrivacy()

    if (loading) {
        return (

            <div className="flex justify-center items-center h-screen w-screen"><Loader2 className=" animate-spin" /></div>
        )
    }
    return (
        <>
            {children}
        </>
    )

}

export default RoutesPrivacy;