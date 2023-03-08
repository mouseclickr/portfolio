// get current year and disply it in a footer paragraph 
const paragraph = `<p>Copyright &copy; ${new Date().getFullYear()}. All rights reserved.</p>`;
document.getElementById('copyright').innerHTML = paragraph;
