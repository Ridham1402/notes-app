const fs = require('fs')


const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find(note => note.title === title)

    if(duplicateNote === undefined){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)

    } else {
        console.log('Note title taken')
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e) {
        return []
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const newNotes = notes.filter((note) => note.title != title)
    

    if(newNotes.length === notes.length){
        console.log('Note doesn\'t exist')
    }else{
        console.log(title + ' note removed!')
        saveNotes(newNotes)
    }
}

const listNotes = () => {
    const notes = loadNotes()
    const fn = (element) => console.log(element)
    notes.forEach((note) => console.log(note.title))
}

const readNote = (title) => {
    const notes = loadNotes()
    const notesfind = notes.find((note) => note.title === title)

    if(notesfind){
        notesfind.forEach((note) => {
            console.log(note.title)
            console.log(note.body)
        })
    }else{
        console.log('note not found')
    }
}


module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}