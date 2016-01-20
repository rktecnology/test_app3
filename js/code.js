(function(){
'use strict'
self.Personaje = function(name, imagen, serie, genero, sexo){
	this.name = name;
	this.imagen = imagen;
	this.serie = serie;
	this.genero = genero;
	this.sexo = sexo;
}

self.Personaje.prototype = {
	present: function(){
		return console.log(`Hola me llamo ${this.name}, soy de la serie ${this.serie}`);
	},
	speak: function(){
		return console.log("Yeah!!!");
	}
}

})();

(function(){
'use strict'
var txt_name = $('#txt_name');
var txt_imagen = $('#txt_imagen');
var btn_send = $('#btn_send');
var txt_data_serie = $('#txt_data_serie');
var txt_data_genero = $('#txt_data_genero');
var txt_data_sexo = $('#txt_data_sexo');

btn_send.addEventListener("click", Btn_send);
$("form").addEventListener("keypress", function (event){
	if(event.keyCode == 13){
		Btn_send()
	}
	// console.log(event.keyCode);
});
function Btn_send(){
	if(txt_name.value === "" || txt_imagen.value === "" || txt_data_sexo.value === "" || txt_data_genero.value === "" || txt_data_serie.value === ""){
		// alert("Necesitas llenar los campos");
		function close2All(){
			var elements = document.querySelectorAll(".close2");
			for(var i = elements.length -1 ; i >= 0 ; i --){
				var el = elements[i];
				el.addEventListener("click", function(){
					this.parentNode.style.display = "none";
				})
			}
		}

		txt_name.value = "";
		txt_imagen.value = "";
		txt_data_serie.value ="";
		txt_data_sexo.value = "";
		txt_data_genero.value = "";

		var notice_me = document.createElement("div");
		notice_me.innerHTML = "Necesitas llenar los campos";

		var close2 = document.createElement("div");
		close2.innerHTML = "X";
		close2.classList.add("close2");
		close2.style.float = "right";
		close2.style.cursor = "pointer";
		notice_me.appendChild(close2);

		$("body").appendChild(notice_me);
		close2All();
		return false;
	}
	// Creando elemento en el DOM
	var div = document.createElement("div");
	var h2 = document.createElement("h2");
	var imagen = document.createElement("img");
	var p = document.createElement("p");

	var pj = new Personaje(txt_name.value, txt_imagen.value, txt_data_serie.value, txt_data_genero.value, txt_data_sexo.value);
	h2.innerHTML = pj.name;
	imagen.src= pj.imagen;
	imagen.width = "200"
	p.innerHTML= `Serie Anime: ${pj.serie}, Genero Anime: ${pj.genero}, Sexo: ${pj.sexo}`;

	div.classList.add("box-article");

	// Delete Publicacion
	var close = document.createElement("div");
	close.innerHTML= "X";
	close.style.float= "right";
	close.style.cursor= "pointer";
	close.classList.add("close_this");
	div.appendChild(close);

	div.appendChild(h2);
	div.appendChild(imagen);
	div.appendChild(p);



	$('body').insertBefore(div, $('.box-article'));

	delete_all();

	txt_name.value = "";
	txt_imagen.value = "";
	txt_data_serie.value ="";
	txt_data_sexo.value = "";
	txt_data_genero.value = "";
 }


})();

delete_all();

function delete_all(){
	var elements = document.querySelectorAll(".close_this");

	for (var i = elements.length - 1; i >= 0; i--) {
		var el = elements[i];
		el.addEventListener("click", function(){
			this.parentNode.style.display = "none";
		})
	};
}

window.addEventListener("load", main);

function main(){

}

function $(selector){
	return document.querySelector(selector);
}






















// (function(){
// 	self.Persona = function(name, lastname){
// 		this.name = name;
// 		this.lastname = lastname;
// 		this.move = false;
// 		this.skill = [];
// 	}

// 	self.Persona.prototype = {
// 		saludo: function(){
// 			return console.log("Holllaa mi nombre es " + this.name);
// 		},
// 		attack: function(){
// 			return console.log("Ratatatata!!!! soy " + this.lastname)
// 		}
// 	}

// })();

// (function(){
// 	self.Office = function(width, height, internet){
// 		this.width = width;
// 		this.height = height;
// 		this.internet = internet;
// 	}

// 	self.Office.prototype ={
// 		wifi: function(){
// 			return console.log("Se encendio el wifi :D");
// 		}
// 	}

// })();

// (function(){
// 	self.Work = function(worker, area){
// 		this.worker = worker;
// 		this.area = area;
// 		this.area.width = area.width;
// 	}
// 	self.Work.prototype = {
// 		saludo: function(){
// 			return console.log(`Hola me llamo ${this.worker.name} ${this.worker.lastname}`);
// 		}
// 	}

// })();

// window.addEventListener("load", main);

// function main(){

// 	var joel = new Persona("joel","gonzales");
// 	var Office_01 = new Office(300,400,true);
// 	var my_work = new Work(joel,Office_01);
// 	// console.log(joel.name);
// 	joel.attack();
// 	my_work.saludo();

// }





























// 'use strict'

// class Persona {
// 	constructor(name, lastname, age, skill){
// 		this.name = name;
// 		this.lastname = lastname;
// 		this.age = age;
// 		this.skill = skill;
// 	}

// 	saludo(){
// 		this.msg = `Hola me llamo ${this.name} ${this.lastname}`;
// 		return this.msg;
// 	}
// }


// (function(){
// 	// self.Persona = function(name, lastname, age, skill){
// 	// 		this.name = name;
// 	// 		this.lastname = name;
// 	// 		this.age = age;
// 	// 		this.skill = skill;
// 	// 	}



// })();

// function Tutor(){
// 	this.name = "juan";
// 	setTimeout(() => {
// 		console.log(this);
// 		this.name = "Cromlu"
// 	},500);
// }

// // Closure



// self.addEventListener("load", main);

// function main(){
// 	var joel = new Persona("joel", "gonzales", 19,["joel","juan","pepe","maria","felipe","nigga"]);
	 
// 	// var div = document.createElement("div");

// 	var max = joel.skill.length - 1;
// 	var min = 0;
// 	var select = Math.round(Math.random() * (max - min) + min);
		

// 	console.log("Estos son los Participantes");
// 	joel.skill.forEach(function (element, index, array){
// 		console.log(array[index]);
// 	});

// 	console.log("El es el ganador :D");
// 	console.log(joel.skill[select]); 
// 	// document.body.appendChild(div);
	
// 	console.log(joel.saludo());

// var juan = new Tutor();

// juan.volar = function(){
// 	return console.log("fly in the sky!!!!")
// }

// juan.volar();

// var curso = {
// 	name : 'javascript',
// 	videos : 34,
// 	get nameChange(){
// 		return this.name.toUpperCase();
// 	},
// 	set nameChange(value){
// 		if(value === "" || value === "undefined"){
// 			return
// 		}
// 		this.name = value;
// 	}
// }

// curso.nameChange = "Python";

// console.log(curso.nameChange);

// setTimeout(function(){
// 	console.log(juan.name);
// },3000);

// // self.Saludo = function (name, msg){
// // 	this.nombre = name;
// // 	this.m = msg;
// // 	function Contructor(message){
// // 		this.message = `Hola me llamo ${this.nombre} , Este es mi mensaje: ${this.m}`
// // 		return this.message;
// // 	}
// // 	return Contructor();
// // }
// // Saludo("Felipiyo","hahhahaha");

// }