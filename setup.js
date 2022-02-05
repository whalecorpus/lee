var items = ["lightblue", "#66d68b", "#66d6c3", "#79d666", "#8b66d6", "#d68b66", "#66b1d6", "#d666b1",
"#b6bbd6", "#d6b6bb", "#b6cbd6", "#d0b6d6"];
var r = document.querySelector(':root');
var rs = getComputedStyle(r);

// get random color


// r.style.setProperty('--color', 'lightblue');
var item = items[Math.floor(Math.random()*items.length)]
console.log(item);
r.style.setProperty('--color', item);