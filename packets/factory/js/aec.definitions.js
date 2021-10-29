const REMOVED_DEFINITIONS = []
const HIDDEN_DEFINITIONS_INPUT = document.querySelector('input[name="definitions_hidden"]')
HIDDEN_DEFINITIONS_INPUT.value = JSON.stringify($(hidden_definitions))
document.querySelector("#icbda-form_icbdaf").addEventListener("submit", event => {
	event.preventDefault()
	const DATA = new FormData(event.srcElement)
	const VALUES = Array.fromIterator(DATA.values())

	const CONTEXT = VALUES[0].trim() == "" ? null : VALUES[0].replace(/\"/g, "&quot;")
	const DEFINITION = VALUES[1].replace(/\"/g, "&quot;")
	const EXAMPLE = VALUES[2].trim() == "" ? null : VALUES[2].replace(/\"/g, "&quot;")

	const INPUT = JSON.parse(HIDDEN_DEFINITIONS_INPUT.value)
	if(!INPUT[navigator.language]) INPUT[navigator.language] = [];
	const LAST_INDEX = INPUT[navigator.language].length
	if(REMOVED_DEFINITIONS.includes(LAST_INDEX)) REMOVED_DEFINITIONS.splice(REMOVED_DEFINITIONS.indexOf(LAST_INDEX), 1);
	INPUT[navigator.language].push([CONTEXT, DEFINITION, EXAMPLE])
	HIDDEN_DEFINITIONS_INPUT.value = JSON.stringify(INPUT)

	const TO_SEE = document.createElement("div")
	TO_SEE.setAttribute("onclick", `removeDefinition(${LAST_INDEX})`)
	TO_SEE.classList.add("icbda-definition_icbdad")
	TO_SEE.innerHTML = `${CONTEXT ? `<p class="icbtt-context_icbttc">${CONTEXT}</p>` : ""}<p class="icbtt-definition_icbttt">${DEFINITION}</p>${EXAMPLE ? `<p class="icbtt-example_icbtte">${EXAMPLE}</p>` : ""}`

	TO_SEE.addEventListener("click", event => TO_SEE.remove())

	document.querySelector("#icbda-addedDefinitions_icbdaad").appendChild(TO_SEE)
});

document.querySelectorAll(".icbda-definition_icbdad").forEach(pronunciations => {
	pronunciations.addEventListener("click", event => {
		pronunciations.remove();
	});
});

function removeDefinition(index) {
	const INPUT = JSON.parse(HIDDEN_DEFINITIONS_INPUT.value)
	var y = 0
	for(var i = 0; i < REMOVED_DEFINITIONS.length; i++) {
		if(i < index) y++;
	}
	INPUT[navigator.language].splice(index - y , 1)
	HIDDEN_DEFINITIONS_INPUT.value = JSON.stringify(INPUT)
	REMOVED_DEFINITIONS.push(index)
}