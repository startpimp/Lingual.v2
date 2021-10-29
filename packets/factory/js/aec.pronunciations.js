const REMOVED_PRONUNCIATIONS = []
const HIDDEN_PRONUNCIATIONS_INPUT = document.querySelector('input[name="pronunciations_hidden"]')
HIDDEN_PRONUNCIATIONS_INPUT.value = JSON.stringify($(hidden_pronunciations))
document.querySelector("#icbpa-form_icbpaf").addEventListener("submit", event => {
	event.preventDefault()
	const DATA = new FormData(event.srcElement)
	const VALUES = Array.fromIterator(DATA.values())

	const ORIGIN = VALUES[0]
	const API = VALUES[1].replace(/\"/g, "&quot;")

	if(!LANGUAGES[ORIGIN]) {
		const ERROR_MESSAGE = "$[aec.text.error]".replace("<?word?>", `<p>${ORIGIN}</p>`)
		const ERROR = document.createElement("p")
		ERROR.setAttribute("id", "icbpa-error_icpbae")
		ERROR.innerHTML = ERROR_MESSAGE
		document.querySelector("#icbpa-addedPronunciations_icbpaap").appendChild(ERROR)
		setTimeout(() => ERROR.remove(), 5000)
		return;
	}

	const INPUT = JSON.parse(HIDDEN_PRONUNCIATIONS_INPUT.value)
	const LAST_INDEX = INPUT.length
	if(REMOVED_PRONUNCIATIONS.includes(LAST_INDEX)) REMOVED_PRONUNCIATIONS.splice(REMOVED_PRONUNCIATIONS.indexOf(LAST_INDEX), 1);
	INPUT.push([ORIGIN, API])
	HIDDEN_PRONUNCIATIONS_INPUT.value = JSON.stringify(INPUT)

	const TO_SEE = document.createElement("div")
	TO_SEE.setAttribute("onclick", `removePronunciation(${LAST_INDEX})`)
	TO_SEE.classList.add("icbaap-pronunciation_icpbaapp")
	TO_SEE.innerHTML = `<p class="icpbaapp-origin_icpbaappo">${LANGUAGES[ORIGIN]}</p><p class="icpbaapp-pronunciation_icpbaappp">${API}</p>`

	TO_SEE.addEventListener("click", event => TO_SEE.remove())

	document.querySelector("#icbpa-addedPronunciations_icbpaap").appendChild(TO_SEE)
});

document.querySelectorAll(".icbaap-pronunciation_icpbaapp").forEach(pronunciations => {
	pronunciations.addEventListener("click", event => {
		pronunciations.remove();
	});
});

function removePronunciation(index) {
	const INPUT = JSON.parse(HIDDEN_PRONUNCIATIONS_INPUT.value)
	var y = 0
	for(var i = 0; i < REMOVED_PRONUNCIATIONS.length; i++) {
		if(i < index) y++;
	}
	INPUT.splice(index - y , 1)
	HIDDEN_PRONUNCIATIONS_INPUT.value = JSON.stringify(INPUT)
	REMOVED_PRONUNCIATIONS.push(index)
}