<template>
    <div class="notes">

        <AddEditNote
            v-model="newNote"    
            ref="addEditNoteRef"
            label="Add Note"
        >
            <template v-slot:buttons>
                <button @click="addNote" :disabled="!newNote" class="button is-link has-background-success">Add New Note</button>
            </template>
        </AddEditNote>
        <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />


    </div>
</template>


<script setup>
/**
 * imports
 */
import { ref } from 'vue'
import Note  from '@/components/Notes/Note.vue'
import AddEditNote from '../components/Notes/AddEditNote.vue'
import { useStoreNotes  } from '../stores/storeNote'

/**
 * stores
 */
    const storeNotes = useStoreNotes();
    
/**
 * notes
 */
const newNote = ref('')
const addEditNoteRef = ref(null)

const addNote = ()=>{
    storeNotes.addNote(newNote.value)
    newNote.value = '' 
    addEditNoteRef.value.clearModel()  

}
/**
 * delete note
 */
    const deleteNote = id => {
        storeNotes.notes = notes.value.filter(item => {return item.id !== id})
    }
</script>