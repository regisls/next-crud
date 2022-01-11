import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Layout from "../components/Layout";
import Tabela from '../components/Tabela';
import Botao from '../components/Botao';
import Formulario from '../components/Formulario';
import useClientes from '../hooks/useClientes';

export default function Home() {
  const { 
    cliente, 
    clientes, 
    novoCliente, 
    selecionarCliente, 
    salvarCliente, 
    excluirCliente,
    exibirTabela,
    tabelaVisivel,
  } = useClientes()
  
  return (
    <div className="flex h-screen justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <Layout titulo="Cadastro simples">
        {tabelaVisivel ? (
          <>
          <div className="flex justify-end">
            <Botao className="mb-4" cor="blue" onClick={novoCliente}>Novo cliente</Botao>
          </div>
          <Tabela clientes={clientes} clienteSelecionado={selecionarCliente} clienteExcluido={excluirCliente}></Tabela>
          </>
        ) : (
          <Formulario cliente={cliente} clienteMudou={salvarCliente} cancelado={exibirTabela} />
        )}
      </Layout>
    </div>
  )
}
