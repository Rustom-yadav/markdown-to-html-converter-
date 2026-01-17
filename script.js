
const input = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const preview = document.getElementById("preview");

function convertMarkdown() {
  let inputValue = input.value
    .replace(/^(#{1,6})\s+(.*)$/gm,
      (match, hashes, text) => {
        const level = hashes.length;
        return `<h${level}>${text}</h${level}>`;
      })

    .replace(/(\*\*|__)(.*?)\1/g,
      '<strong>$2</strong>')

    .replace(/(\*|_)([^*_]+?)\1/g,
      '<em>$2</em>')

    .replace(/!\[(.*?)\]\((.+)\)/g,
      '<img src="$2" alt="$1">')

    .replace(/\[(.*?)\]\((.+)\)/g, 
      '<a href="$2">$1</a>') 

    .replace(/^>\s+(.+)$/mg, 
      '<blockquote>$1</blockquote>');   

    return inputValue;

}

input.addEventListener("input", () => {
  const result = convertMarkdown();
  htmlOutput.textContent = result;
  preview.innerHTML = result;
});
