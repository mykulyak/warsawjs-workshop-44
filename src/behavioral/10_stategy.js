function creditRate1(params) {
  return params.age * 0.1 + params.wibor;
}

function creditRate2(params) {
  return params.age * 0.1 + params.wibor / 2;
}

function creditAmount(value, params, strategy) {
  const rate = strategy(params);
  return value * (1 + rate / 100);
}
