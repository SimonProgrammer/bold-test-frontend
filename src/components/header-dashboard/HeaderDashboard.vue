<script lang="ts" src="./header-dashboard.ts"></script>
<template>
    <header className="bold-header">
        <img 
            src="/img/bold_icon.png" 
            alt="bold icon"
            className="bold-header__icon" 
        />
        <ul className="bold-header__nav">
            <li className="bold-header__nav__item">{{ t('header_nav_text_my_business') }}</li>
            <li className="bold-header__nav__item">
                <span>{{ t('header_nav_text_help') }}</span>
                <img src="/icons/question_icon.png" alt="question icon" />
            </li>
        </ul>
    </header>
</template>
<style lang="scss" scoped src="./header-dashboard.scss"></style>
