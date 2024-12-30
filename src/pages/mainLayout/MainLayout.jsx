import React from 'react';

const MainLayout = ({children, heading, routeName}) => {
    return (
        <section>
            <span className="text-dusty-gray text-xs font-inter-regular">Dashboard / {routeName}</span>
            <h2 className="text-mine-shaft text-2xl font-inter-semiBold tracking-[-3%] pt-3">{heading}</h2>
            {children}
        </section>
    )
}
export default MainLayout;
