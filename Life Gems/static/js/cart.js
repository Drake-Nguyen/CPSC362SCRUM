var updateBtns = document.getElementsByClassName('update-cart')

for(var i=0; i < updateBtns.length; i++) {
  updateBtns[i].addEventListener('click', function(){
    var productID = this.dataset.product
    var action = this.dataset.action
    console.log('ProductID:', productID, 'action:', action)

    console.log('USER:', user)
    if(user === 'AnonymousUser'){
      console.log('Not logged in')
    } else {
      console.log('User is logged in. Sending data.')
    }
  })
}

function updateUserOrder(productID, action) {
  console.log('User is authenticated, sending data...')
  var url = '/update_item/'

  fetch(url, {
    method:'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': csrftoken,
    },
    body:JSON.stringify({'ProductID':productID, 'action':action})
  })
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log('data:', data)
    location.reload()
  })
}