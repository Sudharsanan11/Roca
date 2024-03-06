<template>
    <h1>{{ props.name }}</h1>
    <h1>Case Code {{ caseDocument.doc }}</h1>
</template>
<script setup>
import { createDocumentResource } from 'frappe-ui';


const props = defineProps(['name'])

const caseDocument = createDocumentResource({
    doctype: "Case Details",
    name: props.name,
    fields: ['name', 'case_code', 'case_category', 'case_status', 'case_state', 'date', 'hearing_date', 'victim_name', 'opposition_name', 'customer_name', 'case_satge', 'case_stage_description', 'case_description', 'conclusion']
})

caseDocument.reload()
</script>
<style>

</style>