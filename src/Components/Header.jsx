import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import Logo from '../Assets/logo.png';
import Email from '../Assets/Email.png';
import WhatsAppIcon from './WhatsAppIcon';
import WhatsApp from '../Assets/WhatsApp.png'

function Header() {
  const myPhoneNumber = '+5511916336118'; // Substitua pelo seu número de telefone
  const defaultMessage = 'Oi! Estou no site e queria [insira o motivo]. Alguma chance de conversarmos? Obrigado!'; // Mensagem padrão

  return (
    <div>
      <header className={styles.Header}>
        <Link to="/">
          <div className={styles.Logo}>
            <img src={Logo} alt="Logo" />
          </div>
        </Link>
        <div className={styles.ConatatosPessoais}>
          <WhatsAppIcon phoneNumber={myPhoneNumber} message={defaultMessage} iconSrc={WhatsApp} />
          <Link to="/email">
            <a
              href="https://mail.google.com/mail/u/1/?pli=1#inbox"
              target="_blank"
              className={styles.Email}
            >
              <span></span>
              <img src={Email} alt="Email" />
            </a>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Header;
