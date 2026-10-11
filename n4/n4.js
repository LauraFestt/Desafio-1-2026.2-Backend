function telephoneCheck(str) {
  const regexTelefone = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return regexTelefone.test(str);
}

telephoneCheck("555-555-5555");
