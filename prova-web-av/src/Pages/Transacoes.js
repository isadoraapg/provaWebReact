import React, { useState } from "react";

const lista = [
  { codigo: 1, descricao: "Salário", entrada: 5000.0, saida: 0.0, total: 5000.0 },
  { codigo: 2, descricao: "Aluguel", entrada: 0.0, saida: 1500.0, total: -1500.0 },
  { codigo: 3, descricao: "Supermercado", entrada: 0.0, saida: 300.0, total: -300.0 },
  { codigo: 4, descricao: "Internet", entrada: 0.0, saida: 100.0, total: -100.0 },
  { codigo: 5, descricao: "Transporte", entrada: 0.0, saida: 150.0, total: -150.0 },
  { codigo: 6, descricao: "Venda de produto", entrada: 200.0, saida: 0.0, total: 200.0 },
  { codigo: 7, descricao: "Cinema", entrada: 0.0, saida: 50.0, total: -50.0 },
  { codigo: 8, descricao: "Manutenção do carro", entrada: 0.0, saida: 400.0, total: -400.0 },
  { codigo: 9, descricao: "Academia", entrada: 0.0, saida: 70.0, total: -70.0 },
  { codigo: 10, descricao: "Rendimento de investimentos", entrada: 300.0, saida: 0.0, total: 300.0 },
  { codigo: 11, descricao: "Gasolina", entrada: 0.0, saida: 200.0, total: -200.0 },
  { codigo: 12, descricao: "Refeição", entrada: 0.0, saida: 120.0, total: -120.0 },
  { codigo: 13, descricao: "Consultas médicas", entrada: 0.0, saida: 200.0, total: -200.0 },
  { codigo: 14, descricao: "Rendimentos de poupança", entrada: 50.0, saida: 0.0, total: 50.0 },
  { codigo: 15, descricao: "Compras online", entrada: 0.0, saida: 500.0, total: -500.0 },
  { codigo: 16, descricao: "Serviços domésticos", entrada: 0.0, saida: 150.0, total: -150.0 },
  { codigo: 17, descricao: "Presente de aniversário", entrada: 0.0, saida: 100.0, total: -100.0 },
  { codigo: 18, descricao: "Freelance", entrada: 800.0, saida: 0.0, total: 800.0 },
  { codigo: 19, descricao: "Curso online", entrada: 0.0, saida: 250.0, total: -250.0 },
  { codigo: 20, descricao: "Doação", entrada: 0.0, saida: 50.0, total: -50.0 },
];

const Transacoes = () => {
  const [paginaAtual, setPaginaAtual] = useState(0);
  const itensPorPagina = 5;

  const indiceInicio = paginaAtual * itensPorPagina;
  const indiceFim = indiceInicio + itensPorPagina;
  const itensPagina = lista.slice(indiceInicio, indiceFim);

  const proximaPagina = () => {
    if (indiceFim < lista.length) {
      setPaginaAtual(paginaAtual + 1);
    }
  };

  const paginaAnterior = () => {
    if (paginaAtual > 0) {
      setPaginaAtual(paginaAtual - 1);
    }
  };

  return (
    <div>
      <h1>Lista de Transações</h1>
      <table>
        <thead>
          <tr>
            <th>  Código  </th>
            <th>  Descrição  </th>
            <th>  Entrada  </th>
            <th>  Saída  </th>
            <th>  Total  </th>
          </tr>
        </thead>
        <tbody>
          {itensPagina.map((transacao) => (
            <tr key={transacao.codigo}>
              <td>{transacao.codigo}</td>
              <td>{transacao.descricao}</td>
              <td>{transacao.entrada.toFixed(2)}</td>
              <td>{transacao.saida.toFixed(2)}</td>
              <td>
                {transacao.total.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <button onClick={paginaAnterior} disabled={paginaAtual === 0}>
          &lt; Anterior
        </button>
        <button
          onClick={proximaPagina}
          disabled={indiceFim >= lista.length}
        >
          Próxima &gt;
        </button>
      </div>
    </div>
  );
};

export default Transacoes;
