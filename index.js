function getFirstSelector(selector){
  let match = document.querySelector(selector);
  return match;
}

function nestedTarget(){
  let match = document.getElementById('nested').querySelector('.target');
  return match;
}

function increaseRankBy(n){
  let match = document.getElementById('app').querySelectorAll('ul.ranked-list');
  for (let i=0; i<match.length; i++){
    match[i].innerHTML = parseInt(match[i].innerHTML) + n;
  }
}

function deepestChild(){
  let match = document.getElementById('grand-node');
  return match;
}
