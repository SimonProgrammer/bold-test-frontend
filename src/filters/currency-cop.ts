function currencyCOP(number: number){
    return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' })
    .format(number)
    .replace(',00','');
}

export default currencyCOP;