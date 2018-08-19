// var $wired = document.getElementsByTagName('wired-item');
var $combo_item = document.querySelector('wired-combo');
// var _each = _curryr(_each);
var start_dan;
var end_dan = 9;

$combo_item.addEventListener('click',function(e){
  start_dan = e.target.value;
  console.log('선택한 숫자 : '+start_dan);
  //each
  // _each(start_dan);
  _each(start_dan, end_dan);
  //filter

  //map
})

function _each(list,iter){
  for(var i=0;i<list.length; i++){
    iter(list[i]);
  }
  return list;
}

function filter(users,predi){
  var new_list = [];
  for(var i = 0; i<users.length; i++){
    if(predi(users[i])){
      new_list.push(users[i]);
    }
  }
  return new_list;
}
console.log(
    filter([1,2,3,4],function(num) { return num % 2;})
)