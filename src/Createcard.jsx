import './App.css'
import  {DB} from './classes'
import {Data} from './classes'
import './Card'
import Card from './Card'
import reactDom from 'react-dom'
import React from 'react'
import { render } from '@testing-library/react'


let db=new DB()

export default function CreateCard(props){
    let cards=[]
    let dados=db.resgatarDados()
    console.log(dados.length)
    for (let i=0;i<dados.length;i++){
        cards.push(<Card subject={dados[i].subject} text={dados[i].text}/>)
    }
    
    function saveCard(){
        let subject=document.getElementById('inptText')
        let text=document.getElementById('text_box')
        if (subject.value!='' && text.value!=''){
            let new_data=new Data(subject.value,text.value)
            db.gravar(new_data)       
            cards.push(<Card subject={subject.value} text={text.value}/>)
            reactDom.render(cards.slice(),document.getElementById('resultados'))
            if (cards.length==1)
                document.getElementById('hidden').id= 'center'
        }
        else{
            alert('Dados inseridos em branco')
        }
        

    }

    function gerarBotao(){
        if (cards.length==0){
            return 'hidden'
        }
        return 'center'
    }

    function apagarTudo(){
        if (window.confirm('Tal ação não pode ser desfeita. Continuar mesmo assim?'))
        localStorage.clear()
    }

    return (
        <>
            <div id='card'>
                <h3>Novo cartão</h3>
                <p><input type="text" id='inptText' placeholder="Assunto"/></p>
                <p><textarea id='text_box' placeholder="Digite aqui seu lembrete"></textarea></p>
                <button id="criar_btn" onClick={saveCard}><b>Criar cartão</b></button>
            </div>

            <div id='resultados'>{cards.slice()}</div>

            <div id={gerarBotao()} >
                <a href="index.html"  onClick={apagarTudo} id='apagar_tudo'><b>Apagar tudo</b> </a>
            </div>

        </>
    )
}