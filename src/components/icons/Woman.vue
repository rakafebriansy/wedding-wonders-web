<template>
    <svg v-bind:class="classname" :fill="color" :stroke="color" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 32 32" xml:space="preserve">
    <path d="M26.7,27.2c-0.3-1.3-0.9-2.5-1.7-3.4c1.3-3.1,2.1-6.6,2.1-9.9c0-7.5-4.1-12-11-12S5,6.5,5,14c0,3.2,0.8,6.8,2.1,9.9
        c-0.9,0.9-1.5,2.1-1.7,3.4l-0.2,0.9c-0.1,0.5,0,0.9,0.3,1.3C5.8,29.8,6.2,30,6.7,30h18.7c0.5,0,0.9-0.2,1.2-0.6
        c0.3-0.4,0.4-0.8,0.3-1.3L26.7,27.2z M7.2,28l0.1-0.4c0.4-1.8,1.6-3.2,3.4-3.8c2-0.7,3.4-2.5,3.4-4.7c0-0.4-0.2-0.7-0.5-0.9
        C12,17.4,11,15.6,11,13.8v-2.3c2.3,2.2,5.7,3.8,9.7,4.3c-0.4,1.1-1.2,2-2.2,2.6c-0.3,0.2-0.5,0.5-0.5,0.9c0,2.1,1.3,4,3.4,4.7
        c1.7,0.6,3,2,3.4,3.8l0.1,0.4H7.2z"/>
    </svg>
</template>

<script>
    export default {
        props: {
            classname: String,
            color: String
        },
        name: 'Woman'
    }
</script>