
<template>
    <svg :class="classname" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.56313 3.44824H14.3987C15.1437 3.44824 15.7532 4.00686 15.7532 4.68962V12.1379C15.7532 12.8207 15.1437 13.3793 14.3987 13.3793H3.56313C2.81818 13.3793 2.20868 12.8207 2.20868 12.1379V4.68962C2.20868 4.00686 2.81818 3.44824 3.56313 3.44824Z" stroke="#5C8692" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15.7532 4.6897L8.98092 9.03453L2.20868 4.6897" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
</template>

<script>
    export default {
        props: {
            classname: String,
            color: String
        },
        name: 'Email'
    }
</script>