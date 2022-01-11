import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Layout from "../components/Layout";
import Tabela from '../components/Tabela';
import Botao from '../components/Botao';
import Formulario from '../components/Formulario';
import Cliente from '../core/Cliente';
import { useState } from 'react';

export default function Home() {
  const clientes = [
    new Cliente('Regis', 36, 'R10'),
    new Cliente('Agathe', 38, 'A29'),
    new Cliente('Aurora', 3, 'A18'),
  ]

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome);
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(`${cliente.id} - ${cliente.nome}`);
  }

  function salvarCliente(cliente: Cliente) {
    console.log(cliente);
  }
  
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
  
  return (
    <div className="flex h-screen justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <Layout titulo="Cadastro simples">
        {visivel === 'tabela' ? (
          <>
          <div className="flex justify-end">
            <Botao className="mb-4" cor="blue" onClick={() => setVisivel('form')}>Novo cliente</Botao>
          </div>
          <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido}></Tabela>
          </>
        ) : (
          <Formulario cliente={clientes[0]} clienteMudou={salvarCliente} cancelado={() => setVisivel('tabela')} />
        )}
      </Layout>
    </div>
  )
}
