<script lang="ts" src="./table-data.ts"></script>
<template>
    <div>
        <table className="bold-table" cellspacing="0" cellpadding="0">
            <thead className="bold-table__title">
                <tr>
                    <th colspan="5">Tus ventas de septiembre</th>
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
                <tr className="bold-table__body__success">
                    <td>
                        <article className="row">
                            <img 
                                src="/icons/url_icon.png" 
                                alt="dataphone" 
                                className="icon"
                            />
                            <span className="blue">{{ t('list_data_text_successful_collection') }}</span>
                        </article>
                    </td>
                    <td>
                        <span className="gray">04/04/2022 23:00</span>
                    </td>
                    <td>
                        <article className="row">
                            <img 
                                src="/icons/logo_mastercard.png" 
                                alt="mastercard"
                                className="card" 
                            />
                            <span className="gray">**** **** *** 1277</span>
                        </article>
                    </td>
                    <td>
                        <span className="gray">GZ323344MN</span>
                    </td>
                    <td>
                        <span className="blue">$25.000</span>
                    </td>
                </tr>
                <tr className="bold-table__body__error">
                    <td>
                        <article className="row">
                            <img 
                                src="/icons/dataphone.png" 
                                alt="dataphone" 
                                className="icon"
                            />
                            <span className="blue">{{ t('list_data_text_collection_not_made') }}</span>
                        </article>
                    </td>
                    <td>
                        <span className="gray">04/04/2022 23:00</span>
                    </td>
                    <td>
                        <article className="row">
                            <img 
                                src="/icons/logo_mastercard.png" 
                                alt="mastercard"
                                className="card" 
                            />
                            <span className="gray">**** **** *** 1277</span>
                        </article>
                    </td>
                    <td>
                        <span className="gray">GZ323344MN</span>
                    </td>
                    <td>
                        <article className="column">
                            <span className="blue">$25.000</span>
                            <span className="gray">{{ t('list_data_text_bold_deduction') }}</span>
                            <span className="red">-$15.000</span>
                        </article>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<style lang="scss" scoped src="./table-data.scss"></style>
