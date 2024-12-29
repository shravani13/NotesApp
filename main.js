import {renderNotes} from './app.js'


let notesContainer=document.querySelector(".notes-container");
let pinnedContainer=document.querySelector(".pinned-notes-container");
let otherNotesContainer=document.querySelector(".other-notes-container");
let addBtn=document.querySelector(".add-btn");
let title=document.querySelector(".input-title");
let notes=document.querySelector(".input-notes");
let showTag=document.querySelectorAll(".show-tag");
let arrayofnotes=JSON.parse(localStorage.getItem('notes')) || [];

console.log(arrayofnotes);
pinnedContainer.innerHTML=renderNotes(arrayofnotes.filter(({isPinned, isArchived})=>isPinned===true && isArchived===false));
otherNotesContainer.innerHTML=renderNotes(arrayofnotes.filter(({isPinned, isArchived})=>isPinned===false && isArchived===false));

function displayTag(){
    if(arrayofnotes.length===0){
        showTag[0].classList.remove('display-tag');
        showTag[1].classList.remove('display-tag');
    }
    else{
        showTag[0].classList.add('display-tag');
        showTag[1].classList.add('display-tag');
    }
}
displayTag();
addBtn.addEventListener("click",(event)=>{
    event.preventDefault();
    if(title.value.trim().length>0 && notes.value.trim().length>0){
        arrayofnotes=[...arrayofnotes,{title: title.value, notes: notes.value, id:Date.now(), isPinned: false, isArchived: false}];
        
    }
    console.log(arrayofnotes);
    otherNotesContainer.innerHTML=renderNotes(arrayofnotes);
    localStorage.setItem('notes',JSON.stringify(arrayofnotes));
    displayTag();
})
// let buttonContainer=document.querySelector(".buttons-container");
notesContainer.addEventListener("click",(event)=>{
    event.preventDefault();
    let type=event.target.dataset.type;
    let targetId=event.target.dataset.key;
    console.log(type,targetId);
    switch(type){
        case "delete":
            arrayofnotes=arrayofnotes.filter(({id})=>targetId!==id.toString());
            pinnedContainer.innerHTML=renderNotes(arrayofnotes.filter(({isPinned, isArchived})=>isPinned===true && isArchived===false));
            otherNotesContainer.innerHTML=renderNotes(arrayofnotes.filter(({isPinned, isArchived})=>isPinned===false && isArchived===false));
            localStorage.setItem('notes',JSON.stringify(arrayofnotes));;
            displayTag();
            break;
        case "pin":
            arrayofnotes=arrayofnotes.map((item)=>targetId===item.id.toString()?{...item,isPinned: !item.isPinned}:item);
            console.log(arrayofnotes)
            pinnedContainer.innerHTML=renderNotes(arrayofnotes.filter(({isPinned, isArchived})=>isPinned===true && isArchived===false));
            otherNotesContainer.innerHTML=renderNotes(arrayofnotes.filter(({isPinned, isArchived})=>isPinned===false && isArchived===false));
            localStorage.setItem('notes',JSON.stringify(arrayofnotes));
            break;
        case "archive":
            arrayofnotes=arrayofnotes.map((item)=>targetId===item.id.toString()?{...item,isArchived: !item.isArchived}:item);
            pinnedContainer.innerHTML=renderNotes(arrayofnotes.filter(({isPinned, isArchived})=>isPinned===true && isArchived===false));
            otherNotesContainer.innerHTML=renderNotes(arrayofnotes.filter(({isPinned, isArchived})=>isPinned===false && isArchived===false));
            localStorage.setItem('notes',JSON.stringify(arrayofnotes));
            break;

    }
})

