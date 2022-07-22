<script lang="ts" src="./sales-day.ts"></script>
<template>
    <div className="bold-sales">
        <header className="bold-sales__header">
            <span>{{ t('filter_text_header_all_sales') }}</span>
            <img src="/icons/information_icon.png" alt="information icon" />
        </header>
        <section className="bold-sales__body">
            <span className="bold-sales__body__amount">{{ amount }}</span>
            <p className="bold-sales__body__period">{{ namePeriod }}</p>
        </section>
    </div>
</template>
<style lang="scss" scoped src="./sales-day.scss"></style>
