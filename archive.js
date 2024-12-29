import { renderNotes } from "./app.js";

let arrayofnotes=JSON.parse(localStorage.getItem('notes')) || [];
const archivesContainer=document.querySelector('.notes-container');


archivesContainer.innerHTML=renderNotes(arrayofnotes.filter(({isArchived})=>isArchived===true));
archivesContainer.addEventListener('click',(event)=>{
    event.preventDefault();
    let targetId=event.target.dataset.key;
    let type=event.target.dataset.type;
    switch(type){
        case 'delete':
            arrayofnotes=arrayofnotes.filter(({id})=>targetId!==id.toString());
            archivesContainer.innerHTML=renderNotes(arrayofnotes.filter(({isArchived})=>isArchived===true));
            localStorage.setItem('notes',JSON.stringify(arrayofnotes));
            break;
        case 'archive':
            arrayofnotes=arrayofnotes.map((item)=>targetId===item.id.toString()?{...item,isArchived: !item.isArchived}:item);
            console.log(arrayofnotes);
            archivesContainer.innerHTML=renderNotes(arrayofnotes.filter(({isArchived})=>isArchived===true));
            localStorage.setItem('notes',JSON.stringify(arrayofnotes));
            break;
    }
})


