const userinput=document.querySelector<HTMLInputElement|any|null>('input')
const addUserInput=document.querySelector<any>('.add')
const ul=document.querySelector('ul')

console.log(userinput,addUserInput)
// add func
const addItem=()=>{
    if(userinput.value===''){
        console.log(userinput.value)
        alert('not good')
    }else{
        console.log('okay')
        const items=document.querySelector('.items')
        const item=document.createElement('li')
        const listStyle=document.createElement('span')
        const para=document.createElement('p')
        const del=document.createElement('button')
        // add class
        listStyle.classList.add('list-style')
        del.classList.add('del')
        del.innerText='Delete'
        para.innerText=userinput.value

        items?.appendChild(item)
        item.appendChild(listStyle)
        item.appendChild(para)
        item.appendChild(del)

    }
    userinput.value=''
}
addUserInput.addEventListener('click',()=>{
    addItem();
})
userinput.addEventListener('keypress',(e:any)=>{
    if(e.key==='Enter'){
        addItem();
    }
})
ul?.addEventListener('click',(e:any)=>{
    // console.log(e.target)
    // console.log(e.target.tagName,e.target.parentElement)
    if (e.target.tagName==='BUTTON'){
        e.target.parentElement.remove();
        // console.log('u just clicked delete ?')
    }
})