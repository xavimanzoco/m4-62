import React, { FC } from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
    return ( 
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[70vh]">
            <div className="py-8">
                {children}
            </div>
            
        </div>
    )
}
    export default Container;