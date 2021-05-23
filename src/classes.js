export class Data{
    constructor(subject,text,plant_date,image){
        this.subject=subject
        this.text=text
    }
    
}

export class DB{
    constructor(){
        if (localStorage.getItem('id')===null)
            localStorage.setItem('id', '0')
    }

    getId(){
        let id=localStorage.getItem('id')
        id=eval(id)+1
        id=id.toString()
        localStorage.setItem('id',id)
        return id
    }
    gravar(data){
        if (this.validarDados(data)){
            let id=this.getId()
            console.log(id)
            localStorage.setItem(id,JSON.stringify(data))
        }

        
    }
    
    validarDados(data){
        let id=eval(localStorage.getItem('id'))
        console.log('id= ',id)
        if (data.subject=='' || data.text=='')
            return false
        for (let i=1; i<=id; i++){
            let data_i=JSON.parse(localStorage.getItem(i.toString()))
            console.log('i= ', i)
            console.log('data_i= ', data_i)
            if (data_i.subject===data.subject && data_i.text===data.text){
                return false
            }

        }
        return true
    }
}
