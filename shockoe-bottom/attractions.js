// Suggestion data for SHOCKOE BOTTOM ATTRACTIONS
var document = "";

var data = [
     {
        "name":"Edgar Allen Poe Museum",
        "neighborhood":"Shockoe Bottom",
        "address":"1914 E Main St # 16",
        "note":"Illustrations of the famous poem The Raven and numerous other artifacts surrounding the life of this great American author."
    },
    {
        "name":"Erie Nights Ghost Tour",
        "neighborhood":"Shockoe Bottom",
        "address":"100 N. 17th St",
        "note":"Even if you don't believe in the paranormal you will learn true, historic facts about the city of Richmond!"
    },
    {
        "name":"Canal Walk & Boat Tours",
        "neighborhood":"Shockoe Bottom",
        "address":"12th & Canal Streets",
        "note":"Civil war info abounds. Very knowledgeable guides. The boat tours are worth the price."
    },
    {
        "name":"Virginia Holocaust Museum",
        "neighborhood":"Shockoe Bottom",
        "address":"2000 E Cary St",
        "note":"Founded to educate the community about the tragedies of the Holocaust, the Virginia Holocaust Museum strives to memorialize and document the atrocities of World War II."
    }
];

function printSuggestion(inputData) {
  var suggestion = inputData[Math.floor(Math.random() * inputData.length)];
  console.group("Suggestion");
  console.log(JSON.stringify(suggestion, null, '  '));
  console.groupEnd();
  document.getElementById("suggestion").innerHTML =
    '<div class="vcard">' +
      '<div class="org">' + suggestion.name + '</div>' +
      '<div class="adr">' +
        '<div class="street-address">' + suggestion.address + '</div>' +
        '<span class="locality">Richmond</span>, ' +
        '<span class="state">VA</span>' +
      '</div>' +
      '<div class="note">' + suggestion.note + '</div>' +
    '</div>';
}
