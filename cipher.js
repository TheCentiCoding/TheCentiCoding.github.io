let keyLetter = "m";
const encodebutton = document.getElementById("encodets");
const decodebutton = document.getElementById("decodets");
const encoded = document.getElementById("encoded");
const decoded = document.getElementById("decoded");

if (encodebutton && decoded) {
  encodebutton.addEventListener("commitEncode", () => {
      encoded.textContent = decoded.value;
      document.getElementById("encodeLog").textContent = "Encoded!";
    }
}

if (decodebutton && encoded) {
  decodebutton.addEventListener("commitDecode", () => {
      decoded.textContent = encoded.value;
      document.getElementById("decodeLog").textContent = "Decoded!";
    }
}
