const space = " ", newLine = "\n", emptyString = "", squareCharacter = "&#9642;", totalTimesToPrint = 500;

function hex2bin(hex) {
  return (parseInt(hex, 16).toString(2)).padStart(8, '0');
}

function getChunksFromBinary(binarySequence) {
  binarySequence = binarySequence.split(emptyString);
  let chunks = [];
  for(let i = 0; i < 5; i++){
 	 	chunks.push(binarySequence.slice(i * 5, 5 + i * 5));
  }
  return chunks;
}

function parseBar(line) {
  return {
    letter: line.charAt(0, 1),
    line: "1" + (
      line.slice(1, line.length)
      .toUpperCase()
      .split(space)
      .reduce((hex, character) =>
        hex + (!isNaN(character) ?
          parseInt(character) : character.charAt(0))))
  };
}

let language = {};
[
  "S Fabulous 87 called-at 3 fiteen",
  "Y 18 foned cause 3 flipped-me",
  "N Forced 8 churros-at 631",
  "T Face-me-and-my 21084",
  "A Fished 8 front ends-on-the 31",
  "X 15 11 51",
  "R Forty 8 friends explored 93",
  "E Fun 87 eats 1 finger-with-me",
  "O Forfitted 8663 friends"
].map(parseBar).map(combinedHexAndLetter => {
  language[combinedHexAndLetter.letter] = getChunksFromBinary((hex2bin(combinedHexAndLetter.line)))
});

var container = document.createElement("div");
container.style = "position:absolute; z-index:9000;"
document.body.appendChild(container);

function print(text) {
  let output = emptyString;

  text.split(emptyString).map((c) => {
    language[c].map((n) => {
      n.map((b) => (parseInt(b)) ? output += squareCharacter + space : output += space + space)
      output += newLine;
    });
    output += newLine;
  });

  let preOutput = document.createElement("pre");

  let style = "display:inline-block;"
  style += "margin-right:20px";
  preOutput.style = style; 
  preOutput.innerHTML = output;
  container.appendChild(preOutput);
}

try {
  eval("bang bang bling cats")
} catch (e) {
  let name = (emptyString + e).slice(0, 11).toUpperCase();
  [...Array(totalTimesToPrint).keys()].map(number => print(name));
}
