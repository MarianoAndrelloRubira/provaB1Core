import GradeProdutos from "./componentes/GradeProdutos";
import BarraBusca from "./templates/BarraBusca";
import Cabecalho from "./templates/Cabecalho";
import { useEffect, useState } from "react";

function App() 

{

  const [listaProdutos, setListaProdutos] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((resposta) => resposta.json())
      .then((produtos) => {
        setProdutos(produtos);
      });  
  },[]);

  const [produtos, setProdutos] = useState([]);
  return (
    <div className="App">
      <Cabecalho/>
      <BarraBusca qtdCarrinho = {listaProdutos.length}/>
      <GradeProdutos listaProdutos={produtos} setListaProdutos={setListaProdutos} listaProdutosCarrinho={listaProdutos}/>
    </div>
  );
}

export default App;
