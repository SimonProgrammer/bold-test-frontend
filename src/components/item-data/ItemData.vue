<script lang="ts" src="./item-data.ts"></script>
<template>
    <section className="bold-container">
        <div className="bold-container__item">
            <div className="bold-container__item__content">
                <span>Transacción</span>
                <article className="row">
                    <img 
                        src="/icons/dataphone.png" 
                        className="icon" 
                        alt="dataphone" 
                    />
                    <span className="blue">Cobro exitoso</span>
                </article>
            </div>
            <div className="bold-container__item__content">
                <span>Fecha y hora</span>
                <span className="gray">04/04/2022 23:00</span>
            </div>
            <div className="bold-container__item__content">
                <span>Método de pago</span>
                <article className="row">
                    <img 
                        src="/icons/logo_mastercard.png" 
                        alt="mastercard"
                        className="card" 
                    />
                    <span className="gray">**** **** *** 1277</span>
                </article>
            </div>
            <div className="bold-container__item__content">
                <span>ID Transacción Bold</span>
                <span className="gray">GZ323344MN</span>
            </div>
            <div className="bold-container__item__content">
                <span>Monto</span>
                <article className="column">
                    <span className="blue">$25.000</span>
                    <span className="gray">Deducción bold</span>
                    <span className="red">-$15.000</span>
                </article>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped src="./item-data.scss"></style>
