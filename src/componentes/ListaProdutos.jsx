import { Button, Table } from "react-bootstrap";
export default function ListaProdutosCarrinho(props){
    return(
        <>
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Produto</th>
                    <th>Descrição</th>
                    <th>Quantidade</th>
                    <th>Preço</th>
                    <th>SubTotal</th>
                    <th>Excluir</th>
                </tr>
            </thead>
            <tbody>
                {props.listaProdutosCarrinho.map((item,index)=>{
                    return(
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.titulo}</td>
                        <td>{item.descricao}</td>
                        <td><input type='number'value={item.quantidade} min='1'/></td>
                        <td>{item.preco}</td>
                        <td>{item.quantidade * item.preco}</td>
                        <td><button>Excluir</button></td>
                    </tr>);
                })}
            </tbody>
        </Table>
        <Button onClick={props.mostrarLista(false)}>Voltar</Button>
        </>
    )
}