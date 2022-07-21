<script lang="ts" src="./filter-data.ts"></script>
<template>
    <div className="bold-filter">
        <select name="" id="" className="bold-filter__select">
            <option value="">Hoy</option>
            <option value="">Esta semana</option>
            <option value="">Septiembre</option>
        </select>
        <ul className="bold-filter__list">
            <li className="bold-filter__list__item bold-filter__list__item--selected">Hoy</li>
            <li className="bold-filter__list__item">Esta semana</li>
            <li className="bold-filter__list__item">Septiembre</li>
        </ul>
        <button className="bold-filter__cta" @click.stop="changeStatusFilter(true)">
            <span>Filtrar</span>
            <img src="/icons/filter_icon.png" alt="filter icon" />
            <div className="bold-filter__cta__filter">
                <widget-filter 
                    v-if="showFilter" 
                    @close="changeStatusFilter(false)"
                    @filter="assignFilter" />
            </div>
        </button>
    </div>
</template>
<style lang="scss" scoped src="./filter-data.scss"></style>
