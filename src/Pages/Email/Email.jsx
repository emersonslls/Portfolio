import styles from './Email.module.css';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Formulario from '../../Components/Formulario';

function Email() {
    return (
        <div className={styles.Email}>
            <Header />
            <div className={styles.FooterE}>
                <Footer />
            </div>
            <div className={styles.StarFundo}>
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 685 686" fill="none">
                    <path d="M154.851 616.708L152.801 621.362L157.601 623.042L312.825 677.36L317.625 679.04L318.925 674.123L369.28 483.605L486.67 643.415L489.695 647.532L493.548 644.178L618.403 535.49L622.221 532.166L618.625 528.603L479.173 390.393L674.374 369.292L679.407 368.748L678.494 363.769L648.651 200.946L647.73 195.921L642.798 197.254L451.377 249L530.801 68.6536L532.85 63.9994L528.05 62.3196L372.826 8.00105L368.026 6.32131L366.726 11.238L316.371 201.756L198.981 41.9464L195.956 37.8292L192.103 41.1835L67.2485 149.872L63.4305 153.195L67.0259 156.759L206.478 294.968L11.2772 316.07L6.24451 316.614L7.1571 321.593L37.0004 484.415L37.9214 489.44L42.853 488.107L234.274 436.361L154.851 616.708Z" stroke="#E6E8E6" stroke-opacity="0.2" stroke-width="9.40508" />
                </svg>
            </div>
            <Formulario />
        </div>
    );
}

export default Email;