import React, { useEffect, useState } from 'react';


export const Home = () => {

    const [data, setData] = useState([]);

    var data_now = new Date();
    var _Year = data_now.getFullYear();
    var _Month = data_now.getMonth() +1

    const [data_view, setData_view] = useState({
        _Year, 
        _Month
    });

    // Função para navegar nos meses e anos anteriores
    const anterior = async () =>{
        if(data_view._Month === 1) {
            setData_view({
                _Year : data_view._Year -1,
                _Month : 12
            });
        } else {
            setData_view({
                _Year: data_view._Year,
                _Month:data_view._Month -1
            });
        }
    }

    // Função para navegar nos meses e anos posteriores
    const next = async () =>{
        if(data_view._Month === 12) {
            setData_view({
                _Year: data_view._Year +1,
                _Month: 1

            });
        } else {
            setData_view({
               _Year:data_view._Year,
               _Month:  data_view._Month +1
            });
        }

    }

    const listarExtrato = async e =>{
        var valores = [
            {
                "id":3,
                "nome":"Água",
                "valor": 435,
                "tipo": 1,
                "situaco":"Pg"
            },
            {
                "id":2,
                "nome":"Água",
                "valor": 435.12,
                "tipo": 1,
                "situacao":"Pen"
            },
            {
                "id":1,
                "nome":"Salário",
                "valor": 1000.23,
                "tipo": 2,
                "situacao":""
            }
        ]
        setData(valores);
        // console.log(data);
    }

    useEffect(() => {
        listarExtrato();
    }, []);

    return(
        <div>
            <h1>Situação Financeira a</h1>
            <p>Ano Corrente: {data_view._Year}</p>
            <p>Mês Corrente: {data_view._Month}</p>

            <button type="button" onClick={() => anterior()}>Back</button>
            <button type="button" onClick={() => next()}>Next</button>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Tipo</th>
                        <th>Status</th>
                        <th>Valor</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.tipo === 1 ? <p>Pag</p>: <p>Rec</p>}</td>
                            <td>{item.situacao}</td>
                            <td>{item.valor}</td>
                        </tr>
                    )) }
                </tbody>
                <tfoot>
                    <tr>
                        <td>Total</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>324,0</td>
                    </tr>
                </tfoot>
            </table>


        </div>
    );
}