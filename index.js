function getFirstSelector(selector){
  let match = document.querySelector(selector);
  return match;
}

function nestedTarget(){
  let match = document.getElementById('nested').querySelector('.target');
  return match;
}