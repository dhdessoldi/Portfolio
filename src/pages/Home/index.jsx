import PostModel from 'components/PostModel'
import React from 'react'
import styles from './Home.module.css'
import myPhoto from "assets/profile.jpg";

export default function Home() {
  function calculateAge (birthDate, otherDate) {
    birthDate = new Date(birthDate);
    otherDate = new Date(otherDate);

    var years = (otherDate.getFullYear() - birthDate.getFullYear());

    if ((otherDate.getMonth() < birthDate.getMonth()) || 
        (otherDate.getMonth() === birthDate.getMonth() && otherDate.getDate() < birthDate.getDate())) {
        years--;
    }

    return years;
}
  const today = Date.now()
  const age = calculateAge("12/15/1994", today)
  return (
    <PostModel>
      <h1 className={styles.subtitle}>Olá, eu sou o Daniel!</h1>
      <img
        src={myPhoto}
        alt="Foto em preto e branco do Daniel utilizando uma camisa. Sou um homem branco de cabelos curtos e castanhos escuros, barba curta e olhos castanhos escuros."
        className={styles.myPhoto}
      />
      <p className={styles.paragraph}>
        Olá! Seja bem vindo ao meu site pessoal. Meu nome é Daniel Hermano Dessoldi, tenho {age} anos, sou formado em Engenharia Mecânica Plena pelo Centro Universitário da FEI desde 2018 e atuo no mercado de trabalho como Calculista e Projetista de Estruturas em Aço.
      </p>
      <p className={styles.paragraph}>
        Enquanto frequentava a universidade, trabalhei no Itaú Unibanco, integrando o time de Gestão de Ativos e da Configuração de Data Center entre julho de 2017 e outubro de 2018. Atuava em duas frentes de trabalho, as atribuições da Gestão de Ativos eram gerenciar e garantir que todos os equipamentos do banco que estavam dentro dos Data Centers (mainframes, roteadores, switches, entre outros) tivessem seu ciclo de vida segundo as diretrizes da insituição e as recomendações da ITIL, além de garantir que todos esses equipamentos estivessem com as informações atualizadas, como endereço físico e contato da equipe responsável, para mitigar riscos e proporcionar um menor tempo de solução de problemas ou incidentes. Caso não conheça, ITIL é a sigla para Information Technology Infrastructure Library, em tradução: Biblioteca de Infraestrutura de Tecnologia da Informação, e consiste em um conjunto das melhores práticas para fornecer serviços de TI aos clientes de sua empresa. Como Gestão da Configuração, atuava com o CMDB (Configuration Management Database, em tradução: Banco de Dados de Gerenciamento da Configuração) e as atribuições consistiam em mapear os itens de configuração e as integrações entre eles. Assim, em caso de queda de algum serviço de negócio, era possível rastrear quais sistemas suportavam este serviço e quais servidores rodavam esses sistemas, providenciando um melhor tempo de resposta e atuação dos times da Gestão de Problemas e Gestão de Incidentes.
      </p>

      <p className={styles.paragraph}>
        Em outubro de 2018, já próximo de me graduar, optei por conhecer o mercado de engenharia e atuar na minha área de graduação. Comecei a trabalhar como projetista na <a href='http://ieengenharia.com.br/'>IE Industrial Engenharia</a>, da qual trabalho até então. Após me especializar, passei a atuar como Calculista e Projetista de Estruturas em Aço... continuar passando um link para saber mais, falando sobre a empresa ser de pequeno porte, fornecedora de serviços e minhas atribuições aqui, sobre todo meu ciclo de trabalho e contato com o cliente.
      </p>

      <p className={styles.paragraph}>
        Falar sobre os dias atuais, hobbies e meus estudos de programação.
      </p>

    </PostModel>
  )
}
