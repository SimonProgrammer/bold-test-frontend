<script lang="ts" src="./list-data.ts"></script>
<template>
    <section className="bold-list">
        <table-data :items="listData"/>
        <item-data :items="listData"/>
    </section>
</template>
<style lang="scss" scoped src="./list-data.scss"></style>
