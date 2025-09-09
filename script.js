function analyze() {
  let str = document.getElementById("inputText").value;

  if (!str) {
    alert("Please enter some text!");
    return;
  }

  document.getElementById("lenBox").innerText = "Length: " + str.length;

  document.getElementById("upperBox").innerText =
    "Uppercase: " + str.toUpperCase();
  document.getElementById("lowerBox").innerText =
    "Lowercase: " + str.toLowerCase();

  document.getElementById("middleBox").innerText =
    "Middle character: " + str[Math.floor(str.length / 2)];

  let words = str.trim().split(/\s+/).filter(Boolean);
  document.getElementById("wordsBox").innerText =
    "Total words: " + words.length;

  let vowels = (str.match(/[aeiouAEIOU]/g) || []).length;
  document.getElementById("vowelBox").innerText = "Vowel count: " + vowels;

  let consonants = (
    str.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g) || []
  ).length;
  document.getElementById("consBox").innerText = "Consonants: " + consonants;

  let camel = words
    .map((w, i) =>
      i === 0
        ? w.toLowerCase()
        : w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
    )
    .join("");
  document.getElementById("camelBox").innerText = "Camel case: " + camel;
}
