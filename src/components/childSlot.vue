<script setup>

</script>

<template>
    <div>這是 child slot 子元件</div>
    <div>
        <slot name="header"></slot>
    </div>
    <div>
        <slot name="content"></slot>
    </div>
    <div>
        <slot name="footer"></slot>
    </div>
    <div>
        這是 child slot 子元件~~~~~~
    </div>

</template>