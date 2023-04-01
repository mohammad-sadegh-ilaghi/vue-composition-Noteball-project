<template>
    <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-card" ref="modalCardRef">
            <header class="modal-card-head">
                <p class="modal-card-title">Delete Note</p>
                <button @click="closeModal" class="delete" aria-label="close"></button>
            </header>
            <section class="modal-card-body">
                You sure you want to delete this note ?
            </section>
            <footer class="modal-card-foot is-justify-content-flex-end">
                <button class="button" @click="closeModal">Cancel</button>
                <button  class="button is-danger" @click="deleteClicked">Delete</button>
            </footer>
        </div>
    </div>
</template> 
<script setup>
/**
 * imports
 */
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue';
import { useStoreNotes } from '../../stores/storeNote';

/**
 * refs and reactives
 */
    const  modalCardRef = ref(null)

/** 
 * emits
 */
    const emits = defineEmits(['update:modelValue'])
 /**
  * props
  */
    const props = defineProps({
        modelValue: {
            type: Boolean,
            default: false
        },
        noteId:{
            type: String, 
            required: true
        }
    })
/**
 * close Modal
 */
    const closeModal = () =>{
        emits('update:modelValue', false)
    }
/**
 * click outside to close
 */
    onClickOutside(modalCardRef,(event) => {
        closeModal() 
    })
/** 
 * store
 */
    const storeNote = useStoreNotes()

/**
 * delete clicked
 */
    const deleteClicked = ()=>{
        console.log("kdf");
        storeNote.deleteNote(props.noteId)
    }
</script> 