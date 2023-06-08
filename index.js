  document.addEventListener('DOMContentLoaded', function() {
  const dragContainer = document.getElementById('drag-container');
  const dropContainer = document.getElementById('drop-container');
  const resetButton = document.getElementById('reset-button');

  let draggedItem = null;
  let initialDragContainerState = null;

  // Drag event listeners
  dragContainer.addEventListener('dragstart', function(event) {
    draggedItem = event.target;
    event.dataTransfer.setData('text/plain', null);
    draggedItem.classList.add('dragging');
  });

  dragContainer.addEventListener('dragend', function(event) {
    draggedItem.classList.remove('dragging');
    draggedItem = null;
  });

  // Drop event listeners
  dropContainer.addEventListener('dragover', function(event) {
    event.preventDefault();
  });

  dropContainer.addEventListener('dragenter', function(event) {
    event.target.classList.add('drag-enter');
  });

  dropContainer.addEventListener('dragleave', function(event) {
    event.target.classList.remove('drag-enter');
  });
  dropContainer.addEventListener('dragleave', function(event) {
      event.target.classList.remove('drag-enter');
    });

    dropContainer.addEventListener('drop', function(event) {
      event.preventDefault();
      event.target.classList.remove('drag-enter');

      if (draggedItem !== null) {
        event.target.appendChild(draggedItem);
        draggedItem = null;
        showMessage('Item dropped successfully!');
      }
    });

    // Reset button click listener
    resetButton.addEventListener('click', function() {
      dropContainer.innerHTML = '';
      dragContainer.innerHTML = initialDragContainerState;
    });

    // Store initial state of drag container
    initialDragContainerState = dragContainer.innerHTML;

    function showMessage(message) {
      const messageElement = document.createElement('div');
      messageElement.classList.add('success-message');
      messageElement.textContent = message;
      dropContainer.appendChild(messageElement);
      setTimeout(function() {
        messageElement.remove();
      }, 2000);
    }
  });
