const a = parseFloat(prompt('Digite o valor de a: '));
const b = parseFloat(prompt('Digite o valor de b: '));
const c = parseFloat(prompt('Digite o valor de c: '));
const delta = b**2 - 4*a*c;

if (delta < 0) {
  console.log('A equação não possui raízes reais.');
} else {
  const xv = -b/(2*a);
  const yv = -delta/(4*a);

  const tipo = a > 0 ? 'máximo' : 'mínimo';

  console.log(`O ponto de ${tipo} da parábola é (${xv}, ${yv}).`);
}
