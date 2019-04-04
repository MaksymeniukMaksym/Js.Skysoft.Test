document.onmousedown = function(event) {

  var dragElement = event.target;

  if (!dragElement.classList.contains('draggable')) return;

  var shiftX, shiftY;

  startDrag(event.clientX, event.clientY);

  document.onmousemove = function(event) {
    moveAt(event.clientX, event.clientY);
  };

  dragElement.onmouseup = function() {
    finishDrag();
  };

  function startDrag(clientX, clientY) {

    shiftX = clientX - dragElement.getBoundingClientRect().left;
    shiftY = clientY - dragElement.getBoundingClientRect().top;

    dragElement.style.position = 'fixed';

    document.body.appendChild(dragElement);

    moveAt(clientX, clientY);
  };

  function finishDrag() {
    dragElement.style.top = parseInt(dragElement.style.top) + pageYOffset + 'px';
    dragElement.style.position = 'absolute';

    document.onmousemove = null;
    dragElement.onmouseup = null;
  }

  function moveAt(clientX, clientY) {

    var newX = clientX - shiftX;
    var newY = clientY - shiftY;  

    if (newX < 0) newX = 0;    
    if (newX > 670) newX = 670;
    if (newY < 0) newY = 0;    
    if (newY > 472) newY = 472;

    dragElement.style.left = newX + 'px';
    dragElement.style.top = newY + 'px';
  }

}