"use strict";

//Mod 1
//Exercio 3
var arr = [1, 2, 3, 4, 5];
/*arr.map(function(item) {
 return item + 10;
});*/

var newArr = arr.map(function (item) {
  return item + 10;
});
console.log(newArr);
/*function mostraIdade(usuario) {
 return usuario.idade;
}
mostraIdade(usuario);*/

var usuario = {
  nome: 'Diego',
  idade: 23
};

var mostraIdade = function mostraIdade(item) {
  return usuario.idade;
};

console.log(mostraIdade());
/*function mostraUsuario(nome = 'Diego', idade = 18) {
 return { nome, idade };
}*/

var nome = "Diego";
var idade = 23;

var mostraUsuario = function mostraUsuario() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Diego';
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nome: nome,
    idade: idade
  };
};

console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));
/*
const promise = function() {
 return new Promise(function(resolve, reject) {
 return resolve();
 })
}
*/

var promise = function promise() {
  return new promise(function (resolve, reject) {
    return resolve();
  });
};
