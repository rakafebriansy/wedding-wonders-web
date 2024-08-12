<template>
    <svg :class="classname" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_25_364)">
        <path d="M0.873047 0.649902H4.86117C5.56632 0.649902 6.24258 0.965973 6.74119 1.52858C7.2398 2.09119 7.51992 2.85425 7.51992 3.6499V14.1499C7.51992 13.5532 7.30983 12.9809 6.93587 12.5589C6.56192 12.137 6.05472 11.8999 5.52586 11.8999H0.873047V0.649902Z" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14.1668 0.649902H10.1787C9.47356 0.649902 8.7973 0.965973 8.29869 1.52858C7.80008 2.09119 7.51996 2.85425 7.51996 3.6499V14.1499C7.51996 13.5532 7.73005 12.9809 8.10401 12.5589C8.47796 12.137 8.98516 11.8999 9.51402 11.8999H14.1668V0.649902Z" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_25_364">
        <rect width="15" height="15" fill="white"/>
        </clipPath>
        </defs>
    </svg>
    
</template>

<script>
    export default {
        props: {
            classname: String,
            color: String
        },
        name: 'Book Open'
    }
</script>