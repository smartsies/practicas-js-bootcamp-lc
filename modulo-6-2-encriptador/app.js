const plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
const encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

function translateText(text, originAlphabet, destinationAlphabet) {
  let translation = "";
  let lowerCaseText = text.toLowerCase();

  for (let i = 0; i < lowerCaseText.length; i++) {
    if (lowerCaseText[i] === " ") translation += lowerCaseText[i];

    for (let j = 0; j < originAlphabet.length; j++) {
      if (lowerCaseText[i] === originAlphabet[j]) translation += destinationAlphabet[j];
    }
  }
  
  return translation;
}

function handleEncryptButton() {
  const textToEncrypt = document.getElementById("decrypted-text").value;
  const encryptedText = translateText(textToEncrypt, plainAlphabet, encryptedAlphabet);
  document.getElementById("encrypted-text").value = encryptedText;
}

function handleDecryptButton() {
  const textToDecrypt = document.getElementById("encrypted-text").value;
  const decryptedText = translateText(textToDecrypt, encryptedAlphabet, plainAlphabet);
  document.getElementById("decrypted-text").value = decryptedText;
}

document.getElementById("encrypt-button").addEventListener("click", handleEncryptButton);
document.getElementById("decrypt-button").addEventListener("click", handleDecryptButton);