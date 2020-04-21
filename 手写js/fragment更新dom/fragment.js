

function appendDataToElement(data){
  let fragmentEL = document.createDocumentFragment()
  let a
  let li
  for (var i = 0,max=data.length; i < max; i++) {
      a=document.createElement('a');
      a.href=data[i].url;
      a.appendChild(document.createTextNode(data[i].name));
      li=document.createElement('li');
      li.appendChild(a);
      fragmentEL.appendChild(li)
  }
  document.getElementById('ulList').appendChild(fragmentEL)
}

