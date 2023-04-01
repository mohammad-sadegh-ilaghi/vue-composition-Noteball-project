import { defineStore } from "pinia";
export const useStoreNotes = defineStore('storeNotes', {
    state: () => {
    return {
            notes: [
                {
                    id:"id1",
                    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quo expedita quidem harum   molestiae cum
                                repellat maiores pariatur, soluta inventore consectetur vero voluptatem quam adipisci! Esse distinctio
                                aspernatur incidunt ipsum.`
                },
                {
                    id:"id2",
                    content: `this is two note but is short note`
                }
            ]
      }
    },
    actions: {
        addNote(newNote){
            this.notes.unshift({
                id : new Date().getTime().toString(),
                content: newNote
            })
        },
        deleteNote(id){
            this.notes = this.notes.filter(note => note.id !== id)
        },
        updateNote(id, content){
            let index = this.notes.findIndex(note => note.id === id)
            this.notes[index].content = content
        }
    },
    getters: {
        getNoteContent: (state) => {
            return (id) =>  state.notes.filter(note => note.id === id)[0].content
        },
        totalNotesCount: (state) => {
            return state.notes.length
        },
        totalCharactersCount: (state) => state.notes.map(note=> note.content).reduce(
            (accumulator, currentValue) => accumulator + currentValue.length, 0
        )

    }
})