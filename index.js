function getFirstSelector(selector){
  let match = document.querySelector(selector);
  return match;
}

function nestedTarget(){
  let match = document.getElementById('nested').querySelector('.target');
  return match;
}

function increaseRankBy(n){
  let match = document.getElementById('main').querySelectorAll('.ranked-list');
}

function deepestChild(){
  let match = document.getElementById('grand-node');
  return match;
}