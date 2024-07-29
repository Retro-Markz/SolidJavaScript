function processPayment(price, cardDetail) {
  //aqui el codigo para procesar el pago
  console.log(`Processing payment of$${price} with credict card`);
}

//la fiuncion, modulo o clase puede quedar abirrta a extenciones pero lista pra funcionar, osea cerrada o terminada patra su uso,  de manera que no se requiera modificar

//las siguientes funciones son un ejemplo

function processPaymentWithCard(price, cardDetail) {
  console.log(`Processing payment of $${price} with credit card`);
}

function processPaymentWithPayPal(price, paypalDetail) {
  console.log(`Processing payment of $${price} with PayPal`);
}
