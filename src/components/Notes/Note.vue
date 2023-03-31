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
            <a href="#"  class="card-footer-item">Edit</a>
            <a href="#" @click.prevent="handleDeleteClicked()" class="card-footer-item">Delete</a>
        </footer>
    </div>
</template> 
<script setup>

/**
 * imports
 */
 import { computed } from '@vue/reactivity';

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
 * emits
 */
    const emits = defineEmits(['deleteClicked'])
/**
 * computed
 */
    const charactersLentgh = computed(()=>
    {
        return props.note.content.replace(' ', '').replace('\n', '').length
    }) 
/**
 * handle delete clicked
 */
    const handleDeleteClicked = () => {
        emits('deleteClicked', props.note.id)
    }
</script>