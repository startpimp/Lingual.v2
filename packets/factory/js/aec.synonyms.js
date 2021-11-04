const REMOVED_SYNONYMS = []
const HIDDEN_SYNONYMS_INPUT = document.querySelector('input[name="synonyms_hidden"]')
HIDDEN_SYNONYMS_INPUT.value = JSON.stringify($(hidden_synonyms))
document.querySelector("#icbsa-form_icbsaf").addEventListener("submit", event => {
	event.preventDefault()
	const DATA = new FormData(event.srcElement)
	const VALUES = Array.fromIterator(DATA.values())

	const SYNONYM = VALUES[0]

	const INPUT = JSON.parse(HIDDEN_SYNONYMS_INPUT.value)
	const LAST_INDEX = INPUT.length
	if(REMOVED_SYNONYMS.includes(LAST_INDEX)) REMOVED_SYNONYMS.splice(REMOVED_SYNONYMS.indexOf(LAST_INDEX), 1);
	INPUT.push(SYNONYM)
	HIDDEN_SYNONYMS_INPUT.value = JSON.stringify(INPUT)

	const TO_SEE = document.createElement("div")
	TO_SEE.setAttribute("onclick", `removeSynonym(${LAST_INDEX})`)
	TO_SEE.classList.add("icbsaas-synonym_icbsaass")
	TO_SEE.innerHTML = `<p lang="$(language)" class="icpbsaass-synonym_icpbsaasss">${SYNONYM}</p>`

	TO_SEE.addEventListener("click", event => TO_SEE.remove())

	document.querySelector("#icbsa-addedSynonyms_icbsaas").appendChild(TO_SEE)
});

document.querySelectorAll(".icbsaas-synonym_icbsaass").forEach(synonyms => {
	synonyms.addEventListener("click", event => {
		synonyms.remove();
	});
});

function removeSynonym(index) {
	const INPUT = JSON.parse(HIDDEN_SYNONYMS_INPUT.value)
	var y = 0
	for(var i = 0; i < REMOVED_SYNONYMS.length; i++) {
		if(i < index) y++;
	}
	INPUT.splice(index - y , 1)
	HIDDEN_SYNONYMS_INPUT.value = JSON.stringify(INPUT)
	REMOVED_SYNONYMS.push(index)
}