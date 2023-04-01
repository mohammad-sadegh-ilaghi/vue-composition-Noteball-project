<template>
    <div class="card mb-4">

        <div class="card-content">
            <div class="content">
                {{ note.content }}
                <div class="has-text-right has-text-grey-light mt-2">
                    <small>{{ charactersLentgh }} characters </small>
                </div>
            </div>
        </div>
        <footer class="card-footer">
            <RouterLink :to="`/editNote/${ note.id }`" class="card-footer-item">Edit</RouterLink>
            <a href="#" @click.prevent="modals.deleteNote = true" class="card-footer-item">Delete</a>
        </footer>
        <ModalDeleteNote 
            v-if="modals.deleteNote"
            v-model="modals.deleteNote"
            :noteId="note.id"
        />
    </div>
</template> 
<script setup>

/**
 * imports
 */
 import { computed, reactive } from '@vue/reactivity'
import { useStoreNotes } from '../../stores/storeNote'
import ModalDeleteNote from './ModalDeleteNote.vue'
/**
 * props
 */
    const props =defineProps({
        note: {
            type: Object,  
            required: true  
        }
    })
/**
 * store
 */
    const storeNotes = useStoreNotes()
/**
 * computed
 */
    const charactersLentgh = computed(()=>
    {
        return props.note.content.length
    }) 
/**
 * modals
 */
    const modals = reactive({
        deleteNote: false 
    })
</script> 