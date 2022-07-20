<script lang="ts" src="./sales-day.ts"></script>
<template>
    <div className="bold-sales">
        <header className="bold-sales__header">
            <span>{{ t('filter_text_header_all_sales') }}</span>
            <img src="/icons/information_icon.png" alt="information icon" />
        </header>
        <section className="bold-sales__body">
            <span className="bold-sales__body__amount">$1'560.000</span>
            <p className="bold-sales__body__period">Septiembre, 2020</p>
        </section>
    </div>
</template>
<style lang="scss" scoped src="./sales-day.scss"></style>
