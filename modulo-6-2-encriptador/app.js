const plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
const encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

function encrypt(text) {
  let character;
  let encryptedText = "";

  for (let index = 0; index < text.length; index++) {
    if (text[index] === " ") character = " ";

    for (let j = 0; j < plainAlphabet.length; j++) {
      if (text[index] === plainAlphabet[j]) character = encryptedAlphabet[j];
    }

    encryptedText += character;
  }
  
  return encryptedText;
}

function decrypt(text) {
  let character;
  let encryptedText = "";

  for (let index = 0; index < text.length; index++) {
    if (text[index] === " ") character = " ";

    for (let j = 0; j < encryptedAlphabet.length; j++) {
      if (text[index] === encryptedAlphabet[j]) character = plainAlphabet[j];
    }

    encryptedText += character;
  }
  
  return encryptedText;
}

function handleEncryptButton() {
  const textToEncrypt = document.getElementById("text-to-encrypt").value;
  const encryptedText = encrypt(textToEncrypt);
  document.getElementById("text-to-decrypt").value = encryptedText;
}

function handleDecryptButton() {
  const textToDecrypt = document.getElementById("text-to-decrypt").value;
  const decryptedText = decrypt(textToDecrypt);
  document.getElementById("text-to-encrypt").value = decryptedText;
}

document.getElementById("encrypt-button").addEventListener("click", handleEncryptButton);
document.getElementById("decrypt-button").addEventListener("click", handleDecryptButton);

