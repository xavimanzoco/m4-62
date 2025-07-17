import React from "react";
import UserData from "./components/user-data";
import OrdersList from "./components/orders-list";

const PageProfile = () => {
  
  return (
	<div
		className="max-w-xl mx-auto my-8 p-8 border border-gray-200 rounded-xl bg-gray-50 shadow-md"
	>
		<h2 className="mb-6 text-gray-700 font-semibold text-2xl">
			Perfil de Usuario
		</h2>
        <UserData />
        <h3>Órdenes</h3>
        <OrdersList />
      </div>


    );

};

export default PageProfile;