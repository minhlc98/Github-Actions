const sum = (a, b) => {
  const tmp_a = Number(a) || 0;
  const tmp_b = Number(b) || 0;

  return tmp_a + tmp_b;
}

module.exports = { sum };