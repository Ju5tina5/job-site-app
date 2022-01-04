import React from 'react';

const Footer = () => {
    return (
        <footer className={'d-flex flex-column justify-center'}>
            <h4>Copyright &copy; 2020</h4>
            <div className={'socialLinks d-flex m-5'}>
                <a href="#">GIT</a>
                <a href="#">Linked</a>
                <a href="#">Twitter</a>
                <a href="#">Facebook</a>
            </div>
        </footer>
    );
};

export default Footer;