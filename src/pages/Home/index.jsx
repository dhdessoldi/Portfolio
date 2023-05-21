import PostModel from 'components/PostModel'
import React from 'react'
import styles from './Home.module.css'
import myPhoto from "assets/profile.jpg";

export default function Home() {
  function calculateAge (birthDate, otherDate) {
    birthDate = new Date(birthDate);
    otherDate = new Date(otherDate);

    let years = (otherDate.getFullYear() - birthDate.getFullYear());

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
      Olá! Seja bem-vindo ao meu site pessoal! Meu nome é Daniel Hermano Dessoldi, tenho {age} anos, sou formado em Engenharia Mecânica Plena, pelo Centro Universitário da FEI. 
      </p>
      <p className={styles.paragraph}>
      Entre julho de 2017 e outubro de 2018 estagiei no Itaú Unibanco, trabalhando com Governança de TI. Atuava em duas frentes: Gestão de Ativos e da Configuração de Data Center.  
      </p>
      <p className={styles.paragraph}>
      Em Gestão de Ativos, as principais atribuições eram gerenciar e garantir que todos os equipamentos do banco que estivessem dentro dos Data Centers (mainframes, roteadores, switches, entre outros), seguissem seu ciclo de vida segundo as diretrizes da instituição e as recomendações da ITIL, além de garantir a atualização das informações, como endereço físico e contato da equipe responsável. Para assim, mitigar riscos e proporcionar um menor tempo de solução de problemas ou incidentes.  
      </p>
      <p className={styles.paragraph}>
      Caso não conheça, ITIL é a sigla para Information Technology Infrastructure Library (em tradução: Biblioteca de Infraestrutura de Tecnologia da Informação). Consiste em um conjunto das melhores práticas para fornecer serviços de TI aos clientes de sua empresa.  
      </p>
      <p className={styles.paragraph}>
      Como Gestão da Configuração, atuava com o CMDB - Configuration Management Database, em tradução: Banco de Dados de Gerenciamento da Configuração. Uma das principais atribuições consistia em mapear os itens de configuração e as integrações entre eles. Assim, em caso de queda de algum serviço de negócio, era possível rastrear quais sistemas suportavam este serviço e quais servidores rodavam esses sistemas, providenciando um melhor tempo de resposta e atuação dos times da Gestão de Problemas e Gestão de Incidentes. 
      </p>
      <p className={styles.paragraph}>
      Em outubro de 2018, já próximo de me graduar, optei por atuar na minha área de graduação e a trabalhar como engenheiro projetista na <a href='http://ieengenharia.com.br/'>IE Industrial Engenharia</a>. Após me especializar, passei a atuar como Calculista e Projetista de Estruturas em Aço. Cuidando de todo o ciclo de elaboração e execução de projetos, desde o contato com o cliente, realizando visitas técnicas, levantamentos in loco, pré-projetos, elaboração de orçamentos, até a entrega final, gerenciando recursos, acompanhando a execução e montagem da obra.  
      </p>

      <p className={styles.paragraph}>
      Em 2022 iniciei meus estudos em programação, buscando a transição de carreira, para me tornar desenvolvedor em TI. Com foco em HTML, CSS, SCSS, JavaScript, React com JavaScript, Acessibilidade na Web, Testing Libraries. Com diversos cursos concluídos na <a href='https://cursos.alura.com.br/user/dhdessoldi'>Alura</a>,  Para conferir meu portfólio, que inclui o desenvolvimento deste site, acesse meu perfil no <a href='https://github.com/dhdessoldi'>Github</a>. 
      </p>

    </PostModel>
  )
}

