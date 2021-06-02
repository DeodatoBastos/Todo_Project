import './Card.css'

export default function Card(props){

    function achar(subject){
        //acha um subject no local storage
        let id =eval (localStorage.getItem('id'))
        for (let i=1; i<=id; i++){
            if (JSON.parse(localStorage.getItem(i.toString())).subject==subject)
                return i
        }
    }

    function apagar(){
        if (!window.confirm('Tal ação não pode ser desfeita. Continuar mesmo assim?')){
            return
        }
        let id=localStorage.getItem('id')
        let i=achar(props.subject)
        localStorage.removeItem(i.toString())
        for (let j=i+1;j<=id;j++)
            {
                let data_j=JSON.parse(localStorage.getItem(j.toString()))
                localStorage.removeItem(j.toString())
                localStorage.setItem((j-1).toString(),JSON.stringify(data_j))
            }
            id-=1
            localStorage.setItem('id',id.toString())
            return
    }
    return(
        <>
        <div id='cartao'>
            <div id='subject'>{props.subject}</div>
            <div id='text'>
                {props.text}
            </div>
            <div id='apagar'><a href="index.html" id='btn_apagar' onClick={apagar}>Apagar</a></div>
        </div>
        </>
    )
}