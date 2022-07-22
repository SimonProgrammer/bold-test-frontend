<script lang="ts" src="./widget-filter.ts"></script>
<template>
    <div className="bold-widget">
        <div className="bold-widget__header">
            <span className="bold-widget__header__title">{{ t('common_text_filter') }}</span>
            <button className="bold-widget__header__close" @click.stop="closeWidget()">&times;</button>
        </div>
        <div className="bold-widget__body">
            <article className="bold-widget__body__item">
                <input 
                    type="checkbox" 
                    id="cbox1" 
                    value="dataphone"
                    v-model="filters" />
                <label for="cbox1">{{t('common_text_payment_with_dataphone') }}</label>
            </article>
            <article className="bold-widget__body__item">
                <input 
                    type="checkbox" 
                    id="cbox2" 
                    value="link"
                    v-model="filters" />
                <label for="cbox2">{{t('common_text_collections_payment_link') }}</label>
            </article>
            <article className="bold-widget__body__item">
                <input 
                    type="checkbox" 
                    id="cbox2" 
                    value="all"
                    v-model="filters" />
                <label for="cbox2">{{t('common_text_see_all') }}</label>
            </article>
        </div>
        <div className="bold-widget__footer">
            <button 
                className="bold-widget__footer__cta"
                :disabled="filters.length == 0"
                @click.stop="applyFilter">
                {{ t('common_text_apply') }}
            </button>
        </div>
    </div>
</template>
<style lang="scss" scoped src="./widget-filter.scss"></style>
