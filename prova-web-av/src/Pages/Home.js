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

const Home = () => {
  const totalEntradas = lista.reduce((acc, transacao) => acc + transacao.entrada, 0);
  const totalSaidas = lista.reduce((acc, transacao) => acc + transacao.saida, 0);
  const saldoAtual = totalEntradas - totalSaidas;

  return (
    <div>
      <h1>Home</h1>
          <p>Total Entradas: {totalEntradas.toFixed(2)}</p>
        
          <p>Total Saídas: {totalSaidas.toFixed(2)}</p>
        
          <p> Saldo Atual: {saldoAtual.toFixed(2)}</p>
     </div>
  );
};

export default Home;
