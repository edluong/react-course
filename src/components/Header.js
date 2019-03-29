import React from 'react';

//stateless functional component
// Display the title and subtitle
const Header = (props) => (
        <div className="header">
            <h1 className="header__title">{props.title}</h1>
            {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
        </div>
);


//default props
//this can be used after creating the object
Header.defaultProps = {
    title: 'Indecision'
};

export default Header;
