interface Mydata{
    id:number,
    name:string,
    email:string
}

const data:Mydata[]=[
    {
        id:1,
        name:'cj',
        email:'cj@gmail.com'
    },
    {
        id:2,
        name:'chi',
        email:'chi@gmail.com'
    }
]



let Editbtn:any=''

const readAll=()=>{
    localStorage.setItem('object',JSON.stringify(data))
    let getObj:any=localStorage.getItem('object')
    let retrive_data:any=JSON.parse(getObj)
        // tbody
        const table_data:any=document.querySelector('.tableBody')

        // tbody child variable
        let element='';
        console.log(retrive_data.length )

        if(retrive_data.length >=1){

            retrive_data.map((record:any)=>{
                element += `
                <tr>
                    <td>${record.name}
                    </td>
                    <td>
                        ${record.email}
                    </td>
                    <td>
                        <button class='editBtn' id=${record.id}>Edit+</button>
                        <button class='deleteBtn' onclick=deleteBtn(${record.id})>Delete</button>
                    </td>
                </tr>
            `
            //    onclick=editBtn(${record.id},this)
            //    onclick=edit_btn(${record.id},this)

            })
            table_data.innerHTML=element;
        }else{
            // let empty=document.querySelector('.empty')
            // table_data.appendChild(empty)
            // empty?.classList.add('show')
            
            element=`
            <tr class="empty">
            <td colspan="3" height="200px">YOUR DATA IS EMTY</td>
            </tr>
            `
            table_data.innerHTML=element;
        }

         Editbtn=document.querySelectorAll('.editBtn')
         Editbtn.forEach((btn:any)=>{
             btn.addEventListener('click',(e:any)=>{
                 let recordID= e.target.getAttribute('id')
                 edit_btn(+recordID,e);
             })
         })
    }
    //  Editbtn=document.querySelectorAll('.editBtn')
    // console.log('edit=',Editbtn)
    
    // Editbtn=readAll();



    const updateDiv:any=document.querySelector('.update-form')
    const addinner:any=document.querySelector('.add-div button')

    const edit_btn=(id:any,e:any)=>{
        console.log(id,e.target.innerText)

        if(e.target.innerText==='Edit+' && updateDiv.classList.contains('add')===false && addinner.classList.contains('added')===false){
       
        updateDiv.classList.add('add')
        e.target.innerText='Edit-';

        let obj=data.find((rec:any)=>{
            console.log('ok',rec.id,id)
            return rec.id===id;
        })
        // console.log(obj,retrive_data[0].id,id,data)
        const inputName:any=document.querySelector('.unname');
        inputName.value=obj?.name;
        const inputEmail:any=document.querySelector('.unemail');
        inputEmail.value=obj?.email;
        const inputID:any=document.querySelector('#id');
        inputID.value=obj?.id;
        // console.log('see',inputID.value)

        
        }else if(e.target.innerText==='Edit-'){
            updateDiv.classList.remove('add')
            e.target.innerText='Edit+'

        }
        else{
            e.target.innerText='Edit+'
        }

    }

    const update=()=>{

        const clientID:any=document.querySelector('#id')
        const id= +clientID.value
        const namesel:any=document.querySelector('.unname')
        const name=namesel.value
        const emailsel:any=document.querySelector('.unemail')
        const email=emailsel.value
        const index=data.findIndex((rec:any)=>rec.id===id)
        data[index]={id,name,email}
        console.log(data[index],data)


        // localStorage.setItem('object',JSON.stringify(data))
        // let getObj:any=localStorage.getItem('object')
        // let  retrive_data:any=JSON.parse(getObj)
        readAll();
        const updateDiv:any=document.querySelector('.update-form')
        updateDiv.classList.remove('add')

        // edit_btn(id,e);
    }




const addBtn=()=>{
    // const updateBtn:any=document.querySelector('.update-form')
    const createDiv:any=document.querySelector('.create-form')
    addinner.classList.toggle('added')
    if(addinner.classList.contains('added') && updateDiv.classList.contains('add')===false){
        addinner.innerText='add -'
        createDiv.classList.add('add')
    }else{
        addinner.innerText='add +'
        createDiv.classList.remove('add')

    }
    // createBtn.style.display='block'
    // updateBtn.style.display='none'
}

const create=()=>{
    const createDiv:any=document.querySelector('.create-form')
    const namesel:any=document.querySelector('.name')
    const emailsel:any=document.querySelector('.email')
    let name:any=namesel.value;
    let email:any=emailsel.value;
    const id:any=data.length+1
    console.log('see d id',id)
    const nwobj:any={id:id,name:name,email:email}
    data.push(nwobj)
    createDiv.classList.remove('add')
    readAll();
    addinner.innerText='add +'
     name=namesel.value=''
     email=emailsel.value=''

}
// ENTER
const enter:any=document.querySelector('.enterInput')
enter.addEventListener('keypress',()=>{

})

const editBtn=(id:any,e:any)=>{
    let editinner:any=document.querySelectorAll('.editBtn')
    let obj:any=data.find((obj:any)=>obj.id===id)
    editinner.forEach((element:any )=> {
        element.addEventListener('click',()=>{

            console.log(id)
            // if (id===obj.id){
            //     console.log('okay',element)
            // }
        })
    });
    // if(e.innerText==='Edit+'){
    //     const updateDiv:any=document.querySelector('.update-form')
    //     updateDiv.classList.add('add')
    //     e.innerText='Edit-'
        
    // }else{
    //     const updateDiv:any=document.querySelector('.update-form')
        
    //     updateDiv.classList.remove('add')
    //     e.innerText='Edit+'

    // }
    console.log(e.parentElement.parentElement.parentElement)
}

const deleteBtn=(id:any)=>{
    console.log(id)
    alert('delete rght')

    
}
window.onload=()=>{
    readAll();
}