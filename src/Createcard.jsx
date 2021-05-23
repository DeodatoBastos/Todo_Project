import './App.css'
import  {DB} from './classes'
import {Data} from './classes'

let db=new DB()

export default function CreateCard(props){

    function saveCard(){
        let subject=document.getElementById('inptText')
        let text=document.getElementById('text')
        if (subject!=null){
            let new_data=new Data(subject.value,text.value)
            db.gravar(new_data)       
        }
    
    }

    return (
        <>
            <div id='card'>
                <h3>Novo cartão</h3>
                <p><input type="text" id='inptText' placeholder="Assunto"/></p>
                <p><textarea name="" id="text" placeholder="Digite aqui seu lembrete"></textarea></p>
                <button id="criar_btn" onClick={saveCard}><b>Criar cartão</b></button>
                
            </div>
        </>
    )
}