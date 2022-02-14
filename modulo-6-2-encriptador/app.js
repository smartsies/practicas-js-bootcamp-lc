const plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
const encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

function encrypt(text) {
  let encryptedText = "";
  let lowerCaseText = text.toLowerCase();

  for (let i = 0; i < lowerCaseText.length; i++) {
    if (lowerCaseText[i] === " ") encryptedText += lowerCaseText[i];

    for (let j = 0; j < plainAlphabet.length; j++) {
      if (lowerCaseText[i] === plainAlphabet[j]) encryptedText += encryptedAlphabet[j];
    }
  }
  
  return encryptedText;
}

function decrypt(text) {
  let decryptedText = "";

  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") decryptedText += text[i];

    for (let j = 0; j < encryptedAlphabet.length; j++) {
      if (text[i] === encryptedAlphabet[j]) decryptedText += plainAlphabet[j];
    }
  }
  
  return decryptedText;
}

function handleEncryptButton() {
  const textToEncrypt = document.getElementById("decrypted-text").value;
  const encryptedText = encrypt(textToEncrypt);
  document.getElementById("encrypted-text").value = encryptedText;
}

function handleDecryptButton() {
  const textToDecrypt = document.getElementById("encrypted-text").value;
  const decryptedText = decrypt(textToDecrypt);
  document.getElementById("decrypted-text").value = decryptedText;
}

document.getElementById("encrypt-button").addEventListener("click", handleEncryptButton);
document.getElementById("decrypt-button").addEventListener("click", handleDecryptButton);

