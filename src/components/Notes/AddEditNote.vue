<template>

    <div :class="`has-background-${ bgColor }-dark`" class="card  p-4 mb-5 ">
        <label  class="label has-text-white">
            {{ label }}
        </label>
        <div class="field">
            <div class="control">

                <textarea v-model="model" @input="$emit('update:modelValue', model)" class="textarea" :placeholder="placeholder" />
            </div>
        </div>

        <div class="field is-grouped is-grouped-right">
            <div class="control">
                <slot name="buttons" />
            </div>

        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';


    const model = ref('')
    model.value = props.modelValue
/**
 * props
 */
const props = defineProps({
    modelValue: {
        type: String,
        required: true
    },
    bgColor: {
        type:String,
        default: 'success'
    }
    ,
    placeholder: {
        type: String, 
        default: 'Type something ...'
    },
    label: {
        type:String,
        required: true
    }
})
/**
 * emits
 */
const emit = defineEmits(['update:modelValue'])

/**
 * clear model
 */
const clearModel = () => { model.value = '' }
/**
 * define expose
 */
 defineExpose({
    clearModel
  })

</script>