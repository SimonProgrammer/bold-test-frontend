<script lang="ts" src="./body-dashboard.ts"></script>
<template>
    <section className="bold-body">
        <div className="bold-body__filter">
            <sales-day 
                :items="items" 
                :namePeriod="namePeriod"
                :titlePeriod="titlePeriod" />
            <filter-data />
        </div>
        <list-data />
    </section>
</template>
<style lang="scss" scoped src="./body-dashboard.scss"></style>
