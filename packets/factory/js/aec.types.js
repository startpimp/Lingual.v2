function onKey(key) {
	const TYPES_DIV = document.querySelector("#ic-types_ict")
	const TYPES_INPUT = document.querySelector('input[name="types"]')
	if(key.data === ",") {
		const DATA = TYPES_INPUT.value.replaceAll(',', '').trim()
		if(DATA == " " || DATA == "") return;
		TYPES_INPUT.value = " "
		
		const ARRAY = JSON.parse(HIDDEN_TYPES_INPUT.value)
		ARRAY.push(DATA)
		HIDDEN_TYPES_INPUT.value = JSON.stringify(ARRAY)

		const TYPE = document.createElement("p")
		TYPE.classList.add("ict-type_ictt")
		TYPE.innerHTML = DATA
		
		TYPE.addEventListener("click", event => {
			removeType(event.srcElement.innerHTML)
			event.srcElement.remove()
		});

		TYPES_DIV.appendChild(TYPE)
	}
}

document.querySelectorAll(".ict-type_ictt").forEach(type => {
	type.addEventListener("click", event => {
		removeType(event.srcElement.innerHTML)
		event.srcElement.remove()
	});
});

function removeType(type) {
	const ARRAY = JSON.parse(HIDDEN_TYPES_INPUT.value)
	ARRAY.splice(ARRAY.indexOf(type), 1)
	HIDDEN_TYPES_INPUT.value = JSON.stringify(ARRAY)
}