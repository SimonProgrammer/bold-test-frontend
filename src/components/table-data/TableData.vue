<script lang="ts" src="./table-data.ts"></script>
<template>
    <div>
        <table className="bold-table" cellspacing="0" cellpadding="0">
            <thead className="bold-table__title">
                <tr>
                    <th colspan="5">{{ t('common_text_your_sales',{ periodSales }) }}</th>
                </tr>
            </thead>
            <thead className="bold-table__head">
                <tr>
                    <th>{{ t('list_data_text_transaction') }}</th>
                    <th>{{ t('list_data_text_datetime') }}</th>
                    <th>{{ t('list_data_text_payment_method') }}</th>
                    <th>{{ t('list_data_text_transaction_bold_id') }}</th>
                    <th>{{ t('list_data_text_amount') }}</th>
                </tr>
            </thead>
            <tbody className="bold-table__body">
                <tr v-for="(item, index) in items" className="bold-table__body__success" :key="index">
                    <td>
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
                    </td>
                    <td>
                        <span className="gray">{{ formatDateItem(item.datePayment) }}</span>
                    </td>
                    <td>
                        <article className="row">
                            <img 
                                src="/icons/logo_mastercard.png" 
                                alt="mastercard"
                                className="card" 
                            />
                            <span className="gray">**** **** *** {{ item.lastDigit }}</span>
                        </article>
                    </td>
                    <td>
                        <span className="gray">{{ item.transactionId }}</span>
                    </td>
                    <td>
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
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<style lang="scss" scoped src="./table-data.scss"></style>
