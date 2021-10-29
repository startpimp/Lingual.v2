const REMOVED_TRANSLATIONS = []
const HIDDEN_TRANSLATIONS_INPUT = document.querySelector('input[name="translations_hidden"]')
HIDDEN_TRANSLATIONS_INPUT.value = JSON.stringify($(hidden_translations))
document.querySelector("#icbt-form_icbtf").addEventListener("submit", event => {
	event.preventDefault()
	const DATA = new FormData(event.srcElement)
	const VALUES = Array.fromIterator(DATA.values())

	const CONTEXT = VALUES[0].trim() == "" ? null : VALUES[0].replace(/\"/g, "&quot;")
	const TRANSLATION = VALUES[1].replace(/\"/g, "&quot;")
	const EXAMPLE = VALUES[2].trim() == "" ? null : VALUES[2].replace(/\"/g, "&quot;")

	const INPUT = JSON.parse(HIDDEN_TRANSLATIONS_INPUT.value)
	if(!INPUT[navigator.language]) INPUT[navigator.language] = [];
	const LAST_INDEX = INPUT[navigator.language].length
	if(REMOVED_TRANSLATIONS.includes(LAST_INDEX)) REMOVED_TRANSLATIONS.splice(REMOVED_TRANSLATIONS.indexOf(LAST_INDEX), 1);
	INPUT[navigator.language].push([CONTEXT, TRANSLATION, EXAMPLE])
	HIDDEN_TRANSLATIONS_INPUT.value = JSON.stringify(INPUT)

	const TO_SEE = document.createElement("div")
	TO_SEE.setAttribute("onclick", `removeTranslation(${LAST_INDEX})`)
	TO_SEE.classList.add("icbt-translation_icbtt")
	TO_SEE.innerHTML = `${CONTEXT ? `<p class="icbtt-context_icbttc">${CONTEXT}</p>` : ""}<p class="icbtt-translation_icbttt">${TRANSLATION}</p>${EXAMPLE ? `<p class="icbtt-example_icbtte">${EXAMPLE}</p>` : ""}`

	TO_SEE.addEventListener("click", event => TO_SEE.remove())

	document.querySelector("#icbt-addedTranslations_icbtat").appendChild(TO_SEE)
});

document.querySelectorAll(".icbt-translation_icbtt").forEach(pronunciations => {
	pronunciations.addEventListener("click", event => {
		pronunciations.remove();
	});
});

function removeTranslation(index) {
	const INPUT = JSON.parse(HIDDEN_TRANSLATIONS_INPUT.value)
	var y = 0
	for(var i = 0; i < REMOVED_TRANSLATIONS.length; i++) {
		if(i < index) y++;
	}
	INPUT[navigator.language].splice(index - y , 1)
	HIDDEN_TRANSLATIONS_INPUT.value = JSON.stringify(INPUT)
	REMOVED_TRANSLATIONS.push(index)
}