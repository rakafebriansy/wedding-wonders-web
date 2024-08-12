
<template>
    <svg :class="classname" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.6871 15.75V14.25C15.6871 13.4544 15.371 12.6913 14.8084 12.1287C14.2458 11.5661 13.4827 11.25 12.6871 11.25H6.68707C5.89142 11.25 5.12836 11.5661 4.56575 12.1287C4.00314 12.6913 3.68707 13.4544 3.68707 14.25V15.75" stroke="#5C8692" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.68707 8.25C11.3439 8.25 12.6871 6.90685 12.6871 5.25C12.6871 3.59315 11.3439 2.25 9.68707 2.25C8.03022 2.25 6.68707 3.59315 6.68707 5.25C6.68707 6.90685 8.03022 8.25 9.68707 8.25Z" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
</template>

<script>
    export default {
        props: {
            classname: String,
            color: String
        },
        name: 'User'
    }
</script>