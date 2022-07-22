<script lang="ts" src="./item-data.ts"></script>
<template>
    <section className="bold-container">
        <div v-for="(item, index) in items" className="bold-container__item" :key="index">
            <div className="bold-container__item__content">
                <span>{{ t('list_data_text_transaction') }}</span>
                <article className="row">
                    <template v-if="item.paymentType === 'link'">
                        <img 
                            src="/icons/url_icon.png" 
                            alt="url" 
                            className="icon"
                        />
                    </template>
                    <template v-if="item.paymentType === 'dataphone'">
                        <img 
                            src="/icons/dataphone.png" 
                            alt="dataphone" 
                            className="icon"
                        />
                    </template>
                    <template v-if="item.paymentStatus === 'successful_charge'">
                        <span className="blue">{{ t('list_data_text_successful_collection') }}</span>
                    </template>
                    <template v-if="item.paymentStatus === 'payment_not_made'">
                        <span className="blue">{{ t('list_data_text_collection_not_made') }}</span>
                    </template>
                </article>
            </div>
            <div className="bold-container__item__content">
                <span>{{ t('list_data_text_datetime') }}</span>
                <span className="gray">{{ formatDateItem(item.datePayment) }}</span>
            </div>
            <div className="bold-container__item__content">
                <span>{{ t('list_data_text_payment_method') }}</span>
                <article className="row">
                    <img 
                        src="/icons/logo_mastercard.png" 
                        alt="mastercard"
                        className="card" 
                    />
                    <span className="gray">**** **** *** {{ item.lastDigit }}</span>
                </article>
            </div>
            <div className="bold-container__item__content">
                <span>{{ t('list_data_text_transaction_bold_id') }}</span>
                <span className="gray">{{ item.transactionId }}</span>
            </div>
            <div className="bold-container__item__content">
                <span>{{ t('list_data_text_amount') }}</span>
                <template v-if="item.deductionStatus">
                    <article className="column">
                        <span className="blue">{{ currency(item.amount) }}</span>
                        <span className="gray">{{ t('list_data_text_bold_deduction') }}</span>
                        <span className="red">-{{ currency(item.deductionAmount) }}</span>
                    </article>
                </template>
                <template v-else-if="!item.deductionStatus">
                    <span className="blue">{{ currency(item.amount) }}</span>
                </template>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped src="./item-data.scss"></style>
