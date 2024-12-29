{/* <span class="material-symbols-outlined">
delete
</span>
<span class="material-symbols-outlined">
keep
</span>
<span class="material-symbols-outlined">
archive
</span> */}

export const renderNotes=(notes)=>{
    let note=notes.map(({title,notes,id})=>{
        console.log(title,notes)
        return `<div class="show-notes-container">
            <textarea name="title" class="input-title" placeholder="Title" rows="2" cols="30">${title}</textarea>
            <textarea name="notes" class="input-notes" placeholder="Make a note" rows="8" cols="30">${notes}</textarea>
            <div class="buttons-container">
                <button type="submit" class="arch-btn">
                    <span data-type="edit" data-key=${id} class="material-symbols-outlined">
                        edit
                    </span>
                 </button>
            
                <button type="submit" class="arch-btn">
                    <span data-type="archive" data-key=${id} class="material-symbols-outlined">
                        archive
                    </span>
                </button>
                <button  type="submit" class="del-btn">
                    <span data-type="delete" data-key=${id} class="material-symbols-outlined">
                        delete
                    </span>
                </button>
                <button style="font-variation-settings: 'FILL' 1, 'wght' 700, 'GRAD' 0, 'opsz' 48;" type="submit" class="pin-btn">
                    <span data-type="pin" data-key=${id} class="material-symbols-outlined">
                        keep
                    </span>
                </button>
            </div>
        </div>`
    })
    return note.join("");
}
    