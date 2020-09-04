let cardColor = document.querySelectorAll('.card__color');
let cardSize = document.querySelectorAll('.size-btn')

cardColor.forEach(card => {
   card.addEventListener('click', function (event) {
      let color = event.target.getAttribute('data-color');
      let imgName = event.target.getAttribute('data-img');
      let cardParent = event.target.parentNode.parentNode;
      for (const child of cardParent.childNodes) {
         if (imgName !== null) {
            if (child.className === 'card__circle') {
               child.style.backgroundColor = color
            }
            if (child.className === 'card__img') {
               child.setAttribute('src', `Image/shoes/${imgName}.png`)
            }
         }
      }
   })
});

cardSize.forEach(e => {
   e.addEventListener('click', function (event) {
      let childNodeList = event.target.parentNode.childNodes;
      for (const size of childNodeList) {
         if (size.className === 'size-btn size-btn-active') {
            size.classList.remove('size-btn-active')
         }
      }
      event.target.classList.add('size-btn-active')
   })
})
































