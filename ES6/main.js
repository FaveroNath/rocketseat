//Mod 1
//Exercio 1
class Usuario{
	constructor(email,senha){
		this.email = email,
		this.senha = senha;
	}
	isAdmin(){
		return this.admin === true;
	}
}

class Admin extends Usuario{
	constructor(){
		super();
		this.admin = true;
	}
}
const user1 = new Usuario("email@gmail.com","123");
const admin1 = new Admin("email@gmail.com","123");

console.log(user1.isAdmin());
console.log(admin1.isAdmin());