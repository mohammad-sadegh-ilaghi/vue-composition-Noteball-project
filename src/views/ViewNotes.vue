<template>
    <div class="notes">

        <div class="card has-background-success-dark p-4 mb-5 ">
            <div class="field">
                <div class="control">
                    <textarea v-model="newNote" class="textarea" placeholder="Add New Node"></textarea>
                </div>
            </div>
 
            <div class="field is-grouped is-grouped-right">
                <div class="control">
                    <button @click="addNote" :disabled="!newNote" class="button is-link has-background-success">Add New Note</button>
                </div>

            </div>
        </div>

        <Note v-for="note in notes" :key="note.id" :note="note" @deleteClicked="deleteNote" />


    </div>
</template>


<script setup>
/**
 * imports
 */
import { ref } from 'vue'
import Note  from '@/components/Notes/Note.vue'

/**
 * notes
 */
const newNote = ref('')
const notes = ref([
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
])
const addNote = ()=>{
    let currentDate = new Date().getTime();
    notes.value.unshift ({
        id: currentDate.toString(),
        content: newNote.value
    })
    newNote.value = ''   
}
/**
 * delete note
 */
    const deleteNote = id => {
        notes.value = notes.value.filter(item => {return item.id !== id})
    }
</script>