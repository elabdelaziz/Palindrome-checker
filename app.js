addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();
    let word = document
      .getElementById("word")
      .value.toLowerCase()
      .replace(/\W/g, "");
    console.log(word);
    let revertedWord = word.split("").reverse().join("");
    console.log(revertedWord);

    word === revertedWord
      ? (document.getElementById("paragraph").innerHTML = "true")
      : (document.getElementById("paragraph").innerHTML = "false");
  });
});
