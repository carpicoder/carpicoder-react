import { Youtube, Instagram, Twitter, Discord, Github, Envelope } from 'react-bootstrap-icons';

const Footer = () =>{
    return (
       <footer className="footer">
        <div className="container">
            <div className="social">
                <a href="https://youtube.com/carpicoder"><Youtube/></a>
                <a href="https://instagram.com/carpicoder"><Instagram/></a>
                <a href="https://twitter.com/carpicoder"><Twitter/></a>
                <a href="https://discord.gg/wHKxGbMt4A"><Discord/></a>
                <a href="https://github.com/carpicoder"><Github/></a>
                <a href="mailto:hola@carpicoder.com"><Envelope/></a>
            </div>
        </div>
       </footer>
    )
};

export default Footer;