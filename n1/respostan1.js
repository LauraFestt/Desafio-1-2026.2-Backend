function palindrome(str) {
  const textoLimpo = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  const textoInvertido = textoLimpo.split('').reverse().join('');
  return textoLimpo === textoInvertido;
}

palindrome("eye");
