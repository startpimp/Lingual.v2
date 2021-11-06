const REMOVED_ANTONYMS = []
const HIDDEN_ANTONYMS_INPUT = document.querySelector('input[name="antonyms_hidden"]')
HIDDEN_ANTONYMS_INPUT.value = JSON.stringify($(hidden_antonyms))
document.querySelector("#icbaa-form_icbaaf").addEventListener("submit", event => {
	event.preventDefault()
	const DATA = new FormData(event.srcElement)
	const VALUES = Array.fromIterator(DATA.values())

	const ANTONYM = VALUES[0]

	const INPUT = JSON.parse(HIDDEN_ANTONYMS_INPUT.value)
	const LAST_INDEX = INPUT.length
	if(REMOVED_ANTONYMS.includes(LAST_INDEX)) REMOVED_ANTONYMS.splice(REMOVED_ANTONYMS.indexOf(LAST_INDEX), 1);
	INPUT.push(ANTONYM)
	HIDDEN_ANTONYMS_INPUT.value = JSON.stringify(INPUT)

	const TO_SEE = document.createElement("div")
	TO_SEE.setAttribute("onclick", `removeAntonym(${LAST_INDEX})`)
	TO_SEE.classList.add("icbaaaa-antonym_icbaaaaa")
	TO_SEE.innerHTML = `<p lang="$(language)" class="icpbaaaaa-antonym_icpbaaaaaa">${ANTONYM}</p>`

	TO_SEE.addEventListener("click", event => TO_SEE.remove())

	document.querySelector("#icbaa-addedAntonyms_icbaaaa").appendChild(TO_SEE)
});

document.querySelectorAll(".icbaaaa-antonym_icbaaaaa").forEach(antonyms => {
	antonyms.addEventListener("click", event => {
		antonyms.remove();
	});
});

function removeAntonym(index) {
	const INPUT = JSON.parse(HIDDEN_ANTONYMS_INPUT.value)
	var y = 0
	for(var i = 0; i < REMOVED_ANTONYMS.length; i++) {
		if(i < index) y++;
	}
	INPUT.splice(index - y , 1)
	HIDDEN_ANTONYMS_INPUT.value = JSON.stringify(INPUT)
	REMOVED_ANTONYMS.push(index)
}