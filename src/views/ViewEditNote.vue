<template>
    <div class="edit-note">
        <AddEditNote
            ref="addEditNoteRef"
            v-model="noteContent"
            bgColor="link"
            label="Edit Note"
        >
            <template v-slot:buttons>
                <button @click="$router.back()" class="button is-link is-light" >cancel</button>
                <button  @click="handleSaveClicked" class="button is-link has-background-link" :disabled="!noteContent">Save Note</button>
            </template>
        </AddEditNote>
    </div>
</template>
<script setup>
/**
 * imports
 */
import AddEditNote from "@/components/Notes/AddEditNote.vue"
import { ref } from "vue";
import { useRoute, useRouter } from 'vue-router'
import { useStoreNotes } from "../stores/storeNote";

/**
 * store
 */
 const storeNote = useStoreNotes()

/**
 * use router and route
 */
    const route = useRoute()
    const router = useRouter()
/**
 * notes
 */
    const noteContent = ref('')
    noteContent.value = storeNote.getNoteContent(route.params.id)  
    const addEditNoteRef = ref(null)

/**
 * save clicked
 */
    const handleSaveClicked = () => {
        storeNote.updateNote(route.params.id, noteContent.value)
        router.push('/')

    }

</script>