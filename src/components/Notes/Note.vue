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
            <RouterLink :to="`/editNote/${ note.id }`" href="#"  class="card-footer-item">Edit</RouterLink>
            <a href="#" @click.prevent="storeNotes.deleteNote(note.id)" class="card-footer-item">Delete</a>
        </footer>
    </div>
</template> 
<script setup>

/**
 * imports
 */
 import { computed } from '@vue/reactivity';
import { useStoreNotes } from '../../stores/storeNote';
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
 * handle delete clicked
 */
    // const handleDeleteClicked = () => {
    //     emits('deleteClicked', props.note.id)
    // }
</script>