import { useEffect, useState } from "react";
import "./styles.css";
const ConsultaCatalogo = () => {
  const [produtos, setProdutos] = useState([]);
  const [erro, setErro] = useState([]);
  useEffect(() => {
    const consulta = async () => {
      try {
        const resposta = await fetch("http://localhost:8080/api/v1/produtos");
        if (!resposta.ok) {
          throw new Error();
        }
        const dados = await resposta.json();
        console.log(JSON.stringify(dados));
        setProdutos(dados);
      } catch (error) {
        setErro(error.message);
      }
    };
    consulta();
  }, []);
  if (erro.length > 0) {
    return <div> Erro ao acessar a API: {erro} </div>;
  } else {
    return (
      <div className="Catalogo">
        <h3>Consulta Catalogo</h3>
        {JSON.stringify(produtos)}
      </div>
    );
  }
};

export default ConsultaCatalogo;
