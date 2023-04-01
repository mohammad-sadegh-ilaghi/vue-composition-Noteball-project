<template>
    <div class="stats">
        <table class="table is-fullwith">
            <thead>
                <tr>
                    <th>Stat</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Number of Notes</td>
                    <td>{{ storeNotes.totalNotesCount }}</td>
                </tr>
                <tr>
                    <td>Number of Character (of all notes)</td>
                    <td>{{ storeNotes.totalCharactersCount }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template> 
<script setup>
/**
 * imports
 */
    import { useStoreNotes } from '../stores/storeNote';
/**
 * stores
 */
    const storeNotes = useStoreNotes()
</script>