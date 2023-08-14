import List from "../List";
import TextArea from "../TextArea";
import "./Formulario.css";

const Formulario = () => {

  const times = [
    'Developers',
    'Front-End',
    'Data Science',
    'Devops',
    'UX e Mobile Design',
    'Mobile'
  ]

  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados abaixo</h2>
        <TextArea label="Nome" placeholder="Digite seu nome" />
        <TextArea label="Cargo" placeholder="Digite seu cargo" />
        <TextArea label="Imagem" placeholder="Informe o endereço de imagem" />
        <List label='Time' itens={times}/>
      </form>
    </section>
  );
};

export default Formulario;
