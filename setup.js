var items = ["lightblue", "#66d6c3", "#8b66d6", "#d68b66", "#66b1d6", "#d666b1", "#b6bbd6", "#d6b6bb", "#b6cbd6", "#d0b6d6"];
var r = document.querySelector(':root');
var rs = getComputedStyle(r);

// get random color and set it to record box background
var item = items[Math.floor(Math.random()*items.length)]
// r.style.setProperty('--color', item);