let listElement = document.querySelector('#app ul');
let inputElement = document.querySelector('#app input');
let buttonElement = document.querySelector('#app button');
buttonElement.onclick = () => {
	listElement.innerHTML = "";
	var car = document.createElement('li');
	var textCar = document.createTextNode("Carregando...");
	
	car.appendChild(textCar);
	listElement.appendChild(car);
	
	//console.log(inputElement.value);
	//console.log("https://api.github.com/users/"+inputElement.value+"/repos");
	axios.get('https://api.github.com/users/'+inputElement.value+'/repos')
	.then((response) => {
		listElement.innerHTML = ""; 
		for(var i = 0; i < response.data.length; i++){
			var repositorio = document.createElement('li');
			//console.log(response.data[i].name);
			var reposUser = document.createTextNode(response.data[i].name);
			repositorio.appendChild(reposUser);
			listElement.appendChild(repositorio);	
		}
		
	})
	.catch((error) => {
		listElement.innerHTML = "";
		var car = document.createElement('label');
		var textCar = document.createTextNode("erro 404");
		car.appendChild(textCar);
		listElement.appendChild(car);
		console.log(error);
	});
};
