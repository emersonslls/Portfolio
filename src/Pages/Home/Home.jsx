import Header from "../../Components/Header";

import styles from "./Home.module.css";

import Footer from "../../Components/Footer";

import Linkedin from "../../Assets/LinkeDin.png";
import GitHub from "../../Assets/GitHub.png";
import Figma from "../../Assets/Figma.png";

function Home() {
  return (
    <div className={styles.Home}>
      <Header />
      <div className={styles.Inicio}>
        <div className={styles.Apresentacao}>
          <h1>
            Olá, sou
            <span className={styles.Degarde}> Emerson</span>
          </h1>
        </div>
        <div className={styles.Star1}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 165 166" fill="none">
            <path d="M37.7198 148.712L37.2283 149.828L38.3794 150.231L75.6019 163.257L76.753 163.659L77.0646 162.48L89.1398 116.794L117.29 155.117L118.015 156.104L118.939 155.3L148.879 129.236L149.794 128.439L148.932 127.585L115.492 94.4425L162.301 89.3823L163.508 89.2518L163.289 88.0579L156.132 49.0133L155.912 47.8083L154.729 48.128L108.826 60.5365L127.872 17.2897L128.364 16.1737L127.213 15.7709L89.99 2.74534L88.839 2.34254L88.5273 3.52156L76.4521 49.2076L48.3022 10.8854L47.5769 9.89809L46.653 10.7024L16.713 36.7657L15.7974 37.5627L16.6596 38.4172L50.1 71.5595L3.29114 76.6197L2.08431 76.7502L2.30315 77.9441L9.45952 116.989L9.68037 118.194L10.863 117.874L56.7654 105.465L37.7198 148.712Z" stroke="#E6E8E6" stroke-opacity="0.2" stroke-width="2.25533" />
          </svg>
        </div>
      </div>

      <div className={styles.Sobre}>
        <div className={styles.Nome}>
          <h1>Emerson Sales</h1>
        </div>
        <div className={styles.Star2}>
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path d="M5.54688 15L5.92448 10.1823L1.91406 12.9297L0 9.57031L4.34896 7.5L0 5.42969L1.91406 2.07031L5.92448 4.81771L5.54688 0H9.38802L9.01042 4.81771L13.0208 2.07031L14.9349 5.42969L10.5859 7.5L14.9349 9.57031L13.0208 12.9297L9.01042 10.1823L9.38802 15H5.54688Z" fill="url(#paint0_linear_26_18)" />
            <defs>
              <linearGradient id="paint0_linear_26_18" x1="0" y1="0" x2="15" y2="15" gradientUnits="userSpaceOnUse">
                <stop stop-color="#3772FF" />
                <stop offset="1" stop-color="#F46036" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className={styles.Profissao}>
          <h1>
            UI/UX
            <span className={styles.Degarde}> & </span>
            Front-End
          </h1>
          <h2>Junior</h2>
        </div>
        <div className={styles.SobreMim}>
          <h1>Olá, meu nome é Emerson Santos Sales, tenho 18 anos e sou um ex-aluno da Etec, onde me formei em Desenvolvimento de Sistemas. Desenvolvi uma paixão especial pela área de front-end e design ao longo do curso.</h1>
          <h2>Estou à procura de oportunidades de trabalho na área, onde eu possa desenvolver experiência e aprimorar minhas habilidades em front-end e design.</h2>
          <h3>
            Estou entusiasmado em aplicar meus conhecimentos e habilidades nesse campo dinâmico e criativo.</h3>
        </div>
        <div className={styles.StarFundo}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 369 370" fill="none">
            <path d="M87.0981 333.762L85.8628 336.762L88.9501 337.759L172.653 364.793L175.74 365.79L176.493 362.634L200.715 261.097L264.934 344.225L266.927 346.804L269.332 344.606L334.685 284.873L337.068 282.694L334.72 280.477L259.105 209.081L362.197 195.404L365.398 194.979L364.739 191.817L346.673 105.142L346.008 101.952L342.883 102.878L242.172 132.738L281.918 36.2148L283.153 33.2148L280.066 32.2177L196.364 5.18386L193.276 4.18674L192.523 7.34252L168.301 108.879L104.082 25.7513L102.09 23.1722L99.684 25.3709L34.3315 85.1041L31.9478 87.2828L34.2959 89.4998L109.911 160.895L6.81933 174.573L3.61808 174.998L4.27702 178.159L22.3433 264.834L23.0083 268.025L26.1329 267.099L126.844 237.239L87.0981 333.762Z" stroke="black" stroke-opacity="0.2" stroke-width="6" />
          </svg>
        </div>
        <div className={styles.quadrado1} />
      </div>

      <div className={styles.Projetos}>
        <div className={styles.ProjetoMy}>
          <h1>
            Projeto
            <span className={styles.invisivel}>ooo</span>
            <span className={styles.Degarde}> My Service</span>
          </h1>
        </div>
        <div className={styles.Star3}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 165 166" fill="none">
            <path d="M37.7198 148.712L37.2283 149.828L38.3794 150.231L75.6019 163.257L76.753 163.659L77.0646 162.48L89.1398 116.794L117.29 155.117L118.015 156.104L118.939 155.3L148.879 129.236L149.794 128.439L148.932 127.585L115.492 94.4425L162.301 89.3823L163.508 89.2518L163.289 88.0579L156.132 49.0133L155.912 47.8083L154.729 48.128L108.826 60.5365L127.872 17.2897L128.364 16.1737L127.213 15.7709L89.99 2.74534L88.839 2.34254L88.5273 3.52156L76.4521 49.2076L48.3022 10.8854L47.5769 9.89809L46.653 10.7024L16.713 36.7657L15.7974 37.5627L16.6596 38.4172L50.1 71.5595L3.29114 76.6197L2.08431 76.7502L2.30315 77.9441L9.45952 116.989L9.68037 118.194L10.863 117.874L56.7654 105.465L37.7198 148.712Z" stroke="#E6E8E6" stroke-opacity="0.2" stroke-width="2.25533" />
          </svg>
        </div>
        <div className={styles.SobreProjeto}>
          <h1>O Projeto My Service foi desenvolvido por mim e outras três pessoas como parte de nossa apresentação de TCC (Trabalho de Conclusão de Curso).</h1>
          <h2>O My Service é uma plataforma inovadora dedicada a resolver os desafios enfrentados por profissionais autônomos na busca por serviços. Equipada com recursos como visualização de imagens e avaliações, a plataforma permite que os clientes contratem autônomos de forma informada.</h2>
          <h3>Para os profissionais autônomos, oferecemos a oportunidade de criar perfis detalhados, evidenciando suas habilidades e compartilhando projetos anteriores. Nosso objetivo é simplificar a conexão entre autônomos e clientes, proporcionando uma experiência completa e confiável</h3>
        </div>
        <div className={styles.quadrado2} />
        <a href="https://myservice-iota.vercel.app" target="_blank">
          <button className={styles.SaibaMais}>
            Saiba mais
          </button>
        </a>

      </div>

      <div className={styles.Contatos}>
        <div className={styles.Contato}>
          <h1>Contatos</h1>
        </div>
        <div className={styles.Star4}>
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path d="M5.54688 15L5.92448 10.1823L1.91406 12.9297L0 9.57031L4.34896 7.5L0 5.42969L1.91406 2.07031L5.92448 4.81771L5.54688 0H9.38802L9.01042 4.81771L13.0208 2.07031L14.9349 5.42969L10.5859 7.5L14.9349 9.57031L13.0208 12.9297L9.01042 10.1823L9.38802 15H5.54688Z" fill="url(#paint0_linear_26_18)" />
            <defs>
              <linearGradient id="paint0_linear_26_18" x1="0" y1="0" x2="15" y2="15" gradientUnits="userSpaceOnUse">
                <stop stop-color="#3772FF" />
                <stop offset="1" stop-color="#F46036" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className={styles.SobreContato}>
          <h1>Caso tenha interesse em contratar meus serviços ou mesmo oferecer sugestões, sinta-se à vontade para entrar em contato comigo por mensagem ou e-mail.</h1>
          <h2>Fique à vontade para dar uma passada nos meus perfis do LinkedIn, GitHub e Figma. Lá você vai encontrar alguns dos meus projetos e publicações. Seria ótimo ter sua visita e trocar algumas ideias. Espero que encontre algo interessante por lá!</h2>
        </div>
        <div className={styles.StarFundo2}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 369 370" fill="none">
            <path d="M87.0981 333.762L85.8628 336.762L88.9501 337.759L172.653 364.793L175.74 365.79L176.493 362.634L200.715 261.097L264.934 344.225L266.927 346.804L269.332 344.606L334.685 284.873L337.068 282.694L334.72 280.477L259.105 209.081L362.197 195.404L365.398 194.979L364.739 191.817L346.673 105.142L346.008 101.952L342.883 102.878L242.172 132.738L281.918 36.2148L283.153 33.2148L280.066 32.2177L196.364 5.18386L193.276 4.18674L192.523 7.34252L168.301 108.879L104.082 25.7513L102.09 23.1722L99.684 25.3709L34.3315 85.1041L31.9478 87.2828L34.2959 89.4998L109.911 160.895L6.81933 174.573L3.61808 174.998L4.27702 178.159L22.3433 264.834L23.0083 268.025L26.1329 267.099L126.844 237.239L87.0981 333.762Z" stroke="black" stroke-opacity="0.2" stroke-width="6" />
          </svg>
        </div>
        <div className={styles.Redes}>
          <a
            href="https://www.linkedin.com/in/emerson-sales-9a5a49277/"
            target="_blank"
            className={styles.Linkedin}
          >
            <span></span>
            <img src={Linkedin} />
          </a>
          <a
            href="https://github.com/emersonslls"
            target="_blank"
            className={styles.GitHub}
          >
            <span></span>
            <img src={GitHub} />
          </a>
          <a
            href="https://www.figma.com/@emersonssales15"
            target="_blank"
            className={styles.Figma}
          >
            <span></span>
            <img src={Figma} />
          </a>
        </div>
        <div className={styles.quadrado3} />
        <Footer />
      </div>

    </div>
  );
}

export default Home;