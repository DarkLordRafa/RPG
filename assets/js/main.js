
const strengthIncreaseButton = document.querySelector("#strength-increase");
const strengthDecreaseButton = document.querySelector("#strength-decrease");
const defenseIncreaseButton = document.querySelector("#defense-increase");
const defenseDecreaseButton = document.querySelector("#defense-decrease");
const agilityIncreaseButton = document.querySelector("#agility-increase");
const agilityDecreaseButton = document.querySelector("#agility-decrease");
const perceptionIncreaseButton = document.querySelector("#perception-increase");
const perceptionDecreaseButton = document.querySelector("#perception-decrease");
const attributeButtons = document.querySelectorAll(".attribute-icon");
const resetButton = document.querySelector("#reset-button");
const confirmResetScreen = document.querySelector(".confirm-reset-screen");
const confirmResetButton = document.querySelector(".confirm-reset-button");
const cancelResetButton = document.querySelector(".cancel-reset-button");
const attributesArea = document.querySelector(".attributes-area");
const attributesAreaToggleButton = document.querySelector(".character-attributes-toggle-button");




const strengthAttribute = document.querySelector("#strength");
const defenseAttribute = document.querySelector("#defense");
const agilityAttribute = document.querySelector("#agility");
const perceptionAttribute = document.querySelector("#perception");

let player;


function increaseAttribute(propertyName, element){
	player[propertyName] ++;
	element.innerHTML = player[propertyName];
}

function decreaseAttribute(propertyName, element){
	player[propertyName] --;
	element.innerHTML = player[propertyName];
}


const getPlayer = () =>{
	try {
	//Variável recebendo o objeto salvo (não significa que ele exista, sendo assim, o teste não falha mesmo se o objeto não existir)
		player = JSON.parse(window.localStorage.getItem("player_key"));
	//Já a partir daqui, o código tenta atribuir os valores salvos no objeto da variável aos elementos html, algo que só vai acontecer se a variável player possuir esses valores, ou seja, se ela recebeu um objeto salvo no localStorage.
	
	//Se os elementos não conseguirem receber os valores, significa que essees valores não existem, assim como o objeto requisitado, então o teste falha e passa para o catch
		strengthAttribute.innerHTML = player.strength;
		defenseAttribute.innerHTML = player.defense;
		agilityAttribute.innerHTML = player.agility;
		perceptionAttribute.innerHTML = player.perception;
	}
	catch {
		player = {
		strength: 1,
		defense: 1,
		agility: 1,
		perception: 1
		};
	}
};

getPlayer();



strengthIncreaseButton.addEventListener("click", function(){
	increaseAttribute("strength", strengthAttribute);
});

strengthDecreaseButton.addEventListener("click", function(){
	decreaseAttribute("strength", strengthAttribute);
});

defenseIncreaseButton.addEventListener("click", function(){
	increaseAttribute("defense", defenseAttribute);
});

defenseDecreaseButton.addEventListener("click", function(){
	decreaseAttribute("defense", defenseAttribute);
});

agilityIncreaseButton.addEventListener("click", function(){
	increaseAttribute("agility", agilityAttribute);
});

agilityDecreaseButton.addEventListener("click", function(){
	decreaseAttribute("agility", agilityAttribute);
});

perceptionIncreaseButton.addEventListener("click", function(){
	increaseAttribute("perception", perceptionAttribute);
});

perceptionDecreaseButton.addEventListener("click", function(){
	decreaseAttribute("perception", perceptionAttribute);
});

attributeButtons.forEach(function(element){
	element.addEventListener("click", function(){
		window.localStorage.setItem("player_key", JSON.stringify(player));
	});
});

resetButton.addEventListener("click", function(){
	confirmResetScreen.classList.remove("d-none");
});

confirmResetButton.addEventListener("click", function(){
	window.localStorage.removeItem("player_key");
		location.reload();
});

cancelResetButton.addEventListener("click", function(){
	confirmResetScreen.classList.add("d-none");
});

attributesAreaToggleButton.addEventListener("click", function(){
	attributesAreaToggleButton.classList.toggle("character-attributes-toggle-button-hidden");
	attributesArea.classList.toggle("attributes-area-disabled");
});
