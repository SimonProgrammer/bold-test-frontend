<script lang="ts" src="./filter-data.ts"></script>
<template>
    <div className="bold-filter">
        <select className="bold-filter__select" v-model="periodFilter" @change="assignFilterTime">
            <option value="today">{{ t('common_text_today') }}</option>
            <option value="week">{{ t('common_text_week') }}</option>
            <option value="monthly">{{ monthName }}</option>
        </select>
        <ul className="bold-filter__list">
            <li 
                :class="{ 'bold-filter__list__item': true, 'bold-filter__list__item--selected': periodSelected == 'today' }"
                @click="selectTimeFilter('today')">
                {{ t('common_text_today') }}
            </li>
            <li 
                :class="{ 'bold-filter__list__item': true, 'bold-filter__list__item--selected': periodSelected == 'week' }"
                @click="selectTimeFilter('week')">
                {{ t('common_text_week') }}
            </li>
            <li 
                :class="{ 'bold-filter__list__item': true, 'bold-filter__list__item--selected': periodSelected == 'monthly' }"
                @click="selectTimeFilter('monthly')">
                {{ monthName }}
            </li>
        </ul>
        <button className="bold-filter__cta" @click.stop="changeStatusFilter(true)">
            <span>{{ t('common_text_filter') }}</span>
            <img src="/icons/filter_icon.png" alt="filter icon" />
            <div className="bold-filter__cta__filter">
                <widget-filter 
                    v-if="showFilter" 
                    @close="changeStatusFilter(false)"
                    @filter="assignFilter"
                    :filterInit="filterInit" />
            </div>
        </button>
    </div>
</template>
<style lang="scss" scoped src="./filter-data.scss"></style>
