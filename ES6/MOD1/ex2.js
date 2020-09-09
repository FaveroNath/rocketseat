//Mod 1
//Exercio 2
const usuarios = [
 { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
 { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
 { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

// Map - percorre o vetor
const listaIdade = usuarios.map(item => item.idade);
console.log(listaIdade);

//Filter - Filtra
const filtra = usuarios.filter(item => item.empresa === 'Rocketseat' && item.idade >= 18 );
console.log(filtra);

//find - busca um elemento no vetor

const find = usuarios.find(item => item.empresa === 'Google');
console.log(find);

//Unindo operações

const multiplicaIdade = usuarios.map(item =>({
	...item,
	idade: item.idade*2,
}));
const filtraIdade = multiplicaIdade.filter(item => item.idade <= 50);
console.log(filtraIdade);