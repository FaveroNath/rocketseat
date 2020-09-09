//Mod 1
//Exercio 3
const arr = [1, 2, 3, 4, 5];
/*arr.map(function(item) {
 return item + 10;
});*/
const newArr = arr.map(item => item+10);
console.log(newArr);

/*function mostraIdade(usuario) {
 return usuario.idade;
}
mostraIdade(usuario);*/
const usuario = { nome: 'Diego', idade: 23 };
const mostraIdade = (item) => usuario.idade;
console.log(mostraIdade());

/*function mostraUsuario(nome = 'Diego', idade = 18) {
 return { nome, idade };
}*/
const nome = "Diego";
const idade = 23;

const mostraUsuario = (nome = 'Diego', idade = 18) => ({nome,idade});
console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));

/*
const promise = function() {
 return new Promise(function(resolve, reject) {
 return resolve();
 })
}
*/
const promise = () => {return new promise((resolve,reject)=>resolve())};