import React from "react";

import Primeiro from './Components/basicos/Primeiro'; // para importar o primeiro componente 
import ComParametro from './Components/basicos/ComParametro';
import Fragmento from './Components/basicos/Fragmento';
import Aleatorio from  './Components/basicos/Aleatorio';
import Familia from "./Components/basicos/Familia";
import ListaAlunos from "./Components/repetição/ListaAlunos";
import ListaProdutos from './Components/repetição/ListaProdutos'
import ParOuImpar from "./Components/condicional/ParOuImpar";
import UsuarioInfo from "./Components/condicional/UsuarioInfo";
import DiretaPai from "./Components/comunicação/DiretaPai";
import IndiretaPai from "./Components/comunicação/IndiretaPai";
import Input from "./Components/formulario/input";
import Contador from "./Components/contador/Contador";
import Mega from "./Components/mega/Mega";

import Card from "./Components/Layout/Card";

export default () => //usar () ou _ quando só se tem um parametro inutilizavel
       
   <div id= 'app'>

       <h1> Fundamentos React (arrow) </h1>

       <Card titulo= "#13 Mega Sena" color= "#0e9aa7">
        <Mega></Mega>
       </Card>

       <Card titulo= "#12 Contador" color= "#0e9aa7">
        <Contador numeroInicial = {10}></Contador>
       </Card>

       <Card titulo = "#11 Componente controlado" color= "#0e9aa7">
        <Input></Input>
       </Card>

       <Card titulo = "#10 Comunicação indireta" color= "#0e9aa7">
        <IndiretaPai></IndiretaPai>
       </Card>


       <Card titulo= "#9 - Comunicação direta" color= "#0e9aa7">
          <DiretaPai></DiretaPai>
       </Card>

       <Card titulo= "#8 - Renderização Condicional" color = "#0e9aa7">
         <div>
         <ParOuImpar numero = {20}></ParOuImpar>
         <UsuarioInfo usuario= {{nome: ''}}></UsuarioInfo>
         </div> 
       </Card>

       <Card titulo = "7# - Desafio Repetição" color ='#0e9aa7'>
         <ListaProdutos></ListaProdutos>
       </Card>

       <Card titulo = "#6 - Repetição" color = '#0e9aa7'>
         <ListaAlunos></ListaAlunos>
       </Card>

      <Card titulo = '#5 - Componente com Filhos' color = '#0e9aa7'>
         <Familia sobrenome ="Ferreira" />
      </Card>

        <Card titulo = '#4 - Desafio Aleatorio' color = "#6497b1"> 
        
        <Aleatorio
         min= {10} 
         max = {60} 
         /> 
        
        </Card> 

        <Card titulo = '#3 - Fragmento' color = "#005b96"> 

        <Fragmento/>

        </Card>

        <Card titulo = '#2 - Com Parametro' color = "#03396c">
       <ComParametro 
       titulo = 'segundo componente' 
       aluno = 'João Silva' 
       nota = {9.2} 
       />
       </Card>
       
        <Card titulo = '#1 - Primeiro Componente' color = "#011f4b">
        <Primeiro></Primeiro>
        </Card>
   </div> //REACT SENDO USADO, componentes são usados dentro de JSX como TAGS 

// FUNÇÃO MAIS ENXUTA POSSIVEL