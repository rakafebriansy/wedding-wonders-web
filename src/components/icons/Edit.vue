<template>
    <svg :class="classname" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_25_382)">
        <path d="M7.33337 2.66724H2.66671C2.31309 2.66724 1.97395 2.80771 1.7239 3.05776C1.47385 3.30781 1.33337 3.64695 1.33337 4.00057V13.3339C1.33337 13.6875 1.47385 14.0267 1.7239 14.2767C1.97395 14.5268 2.31309 14.6672 2.66671 14.6672H12C12.3537 14.6672 12.6928 14.5268 12.9428 14.2767C13.1929 14.0267 13.3334 13.6875 13.3334 13.3339V8.66724" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12.3334 1.6669C12.5986 1.40168 12.9583 1.25269 13.3334 1.25269C13.7084 1.25269 14.0682 1.40168 14.3334 1.6669C14.5986 1.93212 14.7476 2.29183 14.7476 2.6669C14.7476 3.04197 14.5986 3.40168 14.3334 3.6669L8.00004 10.0002L5.33337 10.6669L6.00004 8.00023L12.3334 1.6669Z" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_25_382">
        <rect width="16" height="16" fill="white"/>
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
        name: 'Edit'
    }
</script>