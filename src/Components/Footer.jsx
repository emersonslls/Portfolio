import styles from "./Footer.module.css";

import Logo from "../Assets/logo.png";

function Footer() {

  return (
    <div>
      <footer className={styles.Footer}>

        <div className={styles.Logo}>
          <img src={Logo} />
        </div>
       <div className={styles.Direitos}>
        <h1>© Todos direitos reservados</h1>
       </div>
      </footer>
    </div>
  );
}

export default Footer;