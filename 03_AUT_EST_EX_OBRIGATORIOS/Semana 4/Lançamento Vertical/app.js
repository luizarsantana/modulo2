const v0 = parseFloat(prompt("Insira a velocidade inicial (em m/s):"));
const g = 10;
const hmax = (v0 * v0) / (2 * g);

alert(`A altura máxima atingida é de ${hmax.toFixed(2)} metros.`);
