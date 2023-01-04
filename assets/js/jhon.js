
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


const skill1IncreaseButton = document.querySelector("#skill1-increase");
const skill1DecreaseButton = document.querySelector("#skill1-decrease");
const skill2IncreaseButton = document.querySelector("#skill2-increase");
const skill2DecreaseButton = document.querySelector("#skill2-decrease");

const statsArea = document.querySelector(".stats-area");
const statsAreaToggleButton = document.querySelector(".character-stats-toggle-button");
const statsAreaSwitchButton = document.querySelector(".character-stats-switch-button");
const skillsArea = document.querySelector(".skills-area");



const lifeBar = document.querySelector(".life-bar");
const manaBar = document.querySelector(".mana-bar");
const lifeValue = document.querySelector(".life-value");
const manaValue = document.querySelector(".mana-value");


const strengthAttribute = document.querySelector("#strength");
const defenseAttribute = document.querySelector("#defense");
const agilityAttribute = document.querySelector("#agility");
const perceptionAttribute = document.querySelector("#perception");


const skillDescriptionScreen = document.querySelector(".skill-description");
const skillDescriptionScreenCloseButton = document.querySelector(".skill-description .close-button");
const skillDescriptionText = document.querySelector(".skill-description p");
const skill1Label = document.querySelector("#skill1-label");
const skill2Label = document.querySelector("#skill2-label");
const transformationLabel = document.querySelector("#transformation-label");

const skill1 = document.querySelector("#skill1");
const skill2 = document.querySelector("#skill2");

const skill1Text = 'Combustão: Combustão.';
const skill2Text = 'Berserk: Berserk.';
const transformationText = 'Transformação: Pode se transformar em qualquer animal.<br/>"Até um vampiro pode ter presas de lobo".';



let jhon;


function increaseAttribute(propertyName, element){
	jhon[propertyName] ++;
	element.innerHTML = jhon[propertyName];
}

function decreaseAttribute(propertyName, element){
	jhon[propertyName] --;
	element.innerHTML = jhon[propertyName];
}

function displayAttributes(){
	lifeValue.innerHTML = jhon.life;
	manaValue.innerHTML = jhon.mana;
	lifeBar.style.width = `${percentage(jhon.life, jhon.maxLife)}%`;
	manaBar.style.width = `${percentage(jhon.mana, jhon.maxMana)}%`;
	strengthAttribute.innerHTML = jhon.strength;
	defenseAttribute.innerHTML = jhon.defense;
	agilityAttribute.innerHTML = jhon.agility;
	perceptionAttribute.innerHTML = jhon.perception;
	skill1.innerHTML = jhon.skill1;
	skill2.innerHTML = jhon.skill2;
}

function resetStats(){
	window.localStorage.removeItem("jhon_key");
	getJhon();
	displayAttributes();
	confirmResetScreen.classList.add("d-none");
}


const getJhon = () =>{
	try {
	//Variável recebendo o objeto salvo (não significa que ele exista, sendo assim, o teste não falha mesmo se o objeto não existir)
		jhon = JSON.parse(window.localStorage.getItem("jhon_key"));
	//Já a partir daqui, o código tenta atribuir os valores salvos no objeto da variável aos elementos html, algo que só vai acontecer se a variável jhon possuir esses valores, ou seja, se ela recebeu um objeto salvo no localStorage.
	
	//Se os elementos não conseguirem receber os valores, significa que essees valores não existem, assim como o objeto requisitado, então o teste falha e passa para o catch
		lifeValue.innerHTML = jhon.life;
		manaValue.innerHTML = jhon.mana;
		lifeBar.style.width = `${percentage(jhon.life, jhon.maxLife)}%`;
		manaBar.style.width = `${percentage(jhon.mana, jhon.maxMana)}%`;
		strengthAttribute.innerHTML = jhon.strength;
		defenseAttribute.innerHTML = jhon.defense;
		agilityAttribute.innerHTML = jhon.agility;
		perceptionAttribute.innerHTML = jhon.perception;
		skill1.innerHTML = jhon.skill1;
		skill2.innerHTML = jhon.skill2;
	}
	catch {
		jhon = {
		life: 275,
		mana: 100,
		maxLife: 275,
		maxMana: 100,
		strength: 1,
		defense: 1,
		agility: 1,
		perception: 1,
		skill1: 1,
		skill2: 1
		};
	}
	finally{
		displayAttributes();
	}
};

getJhon();


function percentage(numA, numB){
	return (numA/numB) * 100;
}

function changeHpMp(bar, barValue, propertyName, maxPropertyName){
	let newValue = prompt("Insira o novo valor:");
	if (newValue !== "" && newValue !== null){
		if (newValue > jhon[maxPropertyName]){
			jhon[maxPropertyName] = newValue;
		}
		jhon[propertyName] = newValue;
		bar.style.width = `${percentage(jhon[propertyName], jhon[maxPropertyName])}%`;
	}
	barValue.innerHTML = jhon[propertyName];
	window.localStorage.setItem("jhon_key", JSON.stringify(jhon));
}


function displayDescriptionScreen(text){
	skillDescriptionScreen.classList.remove("d-none");
	statsAreaToggleButton.classList.add("pe-none");
	statsAreaSwitchButton.classList.add("pe-none");
	skillDescriptionText.innerHTML = text;
}



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

skill1IncreaseButton.addEventListener("click", function(){
	increaseAttribute("skill1", skill1);
});

skill1DecreaseButton.addEventListener("click", function(){
	decreaseAttribute("skill1", skill1);
});

skill2IncreaseButton.addEventListener("click", function(){
	increaseAttribute("skill2", skill2);
});

skill2DecreaseButton.addEventListener("click", function(){
	decreaseAttribute("skill2", skill2);
});

lifeValue.addEventListener("click", function(){
	changeHpMp(lifeBar, lifeValue, "life", "maxLife");
});
manaValue.addEventListener("click", function(){
	changeHpMp(manaBar, manaValue, "mana", "maxMana");
});

attributeButtons.forEach(function(element){
	element.addEventListener("click", function(){
		window.localStorage.setItem("jhon_key", JSON.stringify(jhon));
	});
});

resetButton.addEventListener("click", function(){
	confirmResetScreen.classList.remove("d-none");
});

confirmResetButton.addEventListener("click", function(){
	resetStats();
});

cancelResetButton.addEventListener("click", function(){
	confirmResetScreen.classList.add("d-none");
});


statsAreaToggleButton.addEventListener("click", function(){
	statsAreaToggleButton.classList.toggle("character-stats-toggle-button-hidden");
	statsArea.classList.toggle("stats-area-disabled");
	statsAreaSwitchButton.classList.toggle("opacity-0");
	statsAreaSwitchButton.classList.toggle("pe-none");
});

statsAreaSwitchButton.addEventListener("click", function(){
	statsArea.classList.add("stats-area-disabled");
	setTimeout(function(){
		skillsArea.classList.toggle("d-none");
		statsArea.classList.remove("stats-area-disabled");
	}, 700);
});

skillDescriptionScreenCloseButton.addEventListener("click", function(){
	statsAreaToggleButton.classList.remove("pe-none");
	statsAreaSwitchButton.classList.remove("pe-none");
	skillDescriptionScreen.classList.add("d-none");
});

skill1Label.addEventListener("click", function(){
	displayDescriptionScreen(skill1Text);
});

skill2Label.addEventListener("click", function(){
	displayDescriptionScreen(skill2Text);
});

transformationLabel.addEventListener("click", function(){
	displayDescriptionScreen(transformationText);
});
