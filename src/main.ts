const userinput=document.querySelector<HTMLInputElement|any|null>('input')
const addUserInput=document.querySelector<any>('.add')
const ul=document.querySelector('ul')
// let newword:any|undefined;



console.log(userinput,addUserInput,'let nw=not here')
// add func
const addItem=(e:any)=>{
    if(userinput.value===''){
        // console.log(userinput.value)
        alert('not good')
    }else{
        // [1,2].forEach

        console.log(userinput.value,'=val',e.target.parentElement.nextElementSibling.childNodes,'=e target oh')

        e.target.parentElement.nextElementSibling.childNodes.forEach((ite:any)=>{
            // console.log(ite)

            if(ite.tagName==='LI'){
                console.log('good iner',ite.firstElementChild.nextElementSibling.innerText)
                // return ite.firstElementChild.nextElementSibling;


            }else{
                console.log('not good')
            }
        })
        // console.log('come one=',newwordList)
        let newword=''
        if(userinput.value ===newword){
            console.log('work!!!')

            // let newwordList=userinput.value
            console.log(newword,'isee')


            // userinput.value=''
            // console.log(e.target.tagName)
           
        }else{
            
           
            // console.log(newword,'das new word')
            const items=document.querySelector('.items')
            const item=document.createElement('li')
            const listStyle=document.createElement('span')
            const para=document.createElement('p')
            const del=document.createElement('button')
            const editbtn=document.createElement('button')
            // work on the el
            // add class
            listStyle.classList.add('list-style')
            del.classList.add('del')
            editbtn.classList.add('edit')
            del.innerText='Delete'
            editbtn.innerText='Edit'
            para.innerText=userinput.value
            items?.appendChild(item)
            item.appendChild(listStyle)
            item.appendChild(para)
            item.appendChild(editbtn)
            item.appendChild(del)
            
        }



    }
    userinput.value=''
}


addUserInput.addEventListener('click',(e:any)=>{
    addItem(e);
})
userinput.addEventListener('keypress',(e:any)=>{
    if(e.key==='Enter'){
        // let newword=''
        addItem(e);
    }
})
ul?.addEventListener('click',(e:any)=>{
    console.log(e.target.classList)
    // console.log(e.target.tagName,e.target.parentElement)
    if (e.target.classList[0]==='del'){
        e.target.parentElement.remove();
        // console.log('u just clicked delete ?')
    }else if(e.target.tagName==='SPAN'){
        e.target.parentElement.classList.toggle('checked')
    }else if(e.target.classList.contains('edit')){
        // console.log(e.target.previousElementSibling)
        let oldwd:string=e.target.previousElementSibling.innerText
        // console.log(oldwd)
        userinput.value=oldwd
        // let newword=e.target.previousElementSibling
        // addItem(e,newword);
    }
})