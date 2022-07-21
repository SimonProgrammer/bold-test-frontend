<script lang="ts" src="./table-data.ts"></script>
<template>
    <table className="bold-table" cellspacing="0" cellpadding="0">
        <thead className="bold-table__title">
            <tr>
                <th colspan="5">Tus ventas de septiembre</th>
            </tr>
        </thead>
        <thead className="bold-table__head">
            <tr>
                <th>Transacción</th>
                <th>Fecha y hora</th>
                <th>Método de pago</th>
                <th>ID Transacción Bold</th>
                <th>Monto</th>
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
                        <span className="blue">Cobro exitoso</span>
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
                        <span className="blue">Cobro no realizado</span>
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
                        <span className="gray">Deducción bold</span>
                        <span className="red">-$15.000</span>
                    </article>
                </td>
            </tr>
            <tr className="bold-table__body__success">
                <td>
                    <article className="row">
                        <img 
                            src="/icons/url_icon.png" 
                            alt="dataphone" 
                            className="icon"
                        />
                        <span className="blue">Cobro exitoso</span>
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
            <tr className="bold-table__body__success">
                <td>
                    <article className="row">
                        <img 
                            src="/icons/url_icon.png" 
                            alt="dataphone" 
                            className="icon"
                        />
                        <span className="blue">Cobro exitoso</span>
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
        </tbody>
    </table>
</template>
<style lang="scss" scoped src="./table-data.scss"></style>
