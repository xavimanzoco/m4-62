import React, { FC } from "react";
import Footer from "@/components/layout/navbar/footer";
import Container from "@/components/layout/container";
import { Navbar } from "@/components/layout/navbar/navbar";

interface LayoutMainViewsProps {
    children: React.ReactNode;
    }

    const LayoutMainViews: FC<LayoutMainViewsProps> = ({ children }) => {
        return (
            <>
                <Navbar />
                <Container>{children}</Container> 
                <Footer />
            </>
        );
        }

export default LayoutMainViews;