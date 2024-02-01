import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from './Formulario.module.css';

const Formulario = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Valores do formulário:', { nome, email, mensagem });

    // Configuração do serviço de e-mail (substitua pelos seus dados)
    const serviceID = 'service_ivbujc5';
    const templateID = 'template_2dovpyn';
    const userID = 'SnUnYWaU-oP3ax0IA';

    // Parâmetros para enviar ao serviço de e-mail
    const templateParams = {
      to_name: 'Emersons Sales', // Substitua pelo destinatário, se aplicável
      from_name: nome, // Usa o nome inserido no campo do formulário
      message: mensagem,
    };
    

    // Envia e-mail usando o serviço Email.js
    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log('E-mail enviado com sucesso!', response);
        // Limpar o formulário ou redirecionar para uma página de agradecimento
      })
      .catch((error) => {
        console.error('Erro ao enviar o e-mail:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.Forms}>
      <div className={styles.Text}>
        <h1>Envie sua mensagem</h1>
      </div>
      <div className={styles.quadrado} />
      <div className={styles.Nome}>
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Digite seu nome" // Adiciona o placeholder
          required
        />
      </div>
      <div className={styles.Email}>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu email" // Adiciona o placeholder
          required
        />
      </div>
      <div className={styles.Mensagem}>
        <label htmlFor="mensagem">Mensagem</label>
        <textarea
          id="mensagem"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          placeholder="Escreva sua mensagem" // Adiciona o placeholder
          required
        ></textarea>
      </div>
      <button className={styles.Enviar} type="submit">
        Enviar
      </button>

      
    </form>
  );
};

export default Formulario;
