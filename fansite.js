function createRaindrop() {
    var raindrop = document.createElement('div');
    raindrop.classList.add('drop');
    raindrop.style.left = Math.random() * window.innerWidth + 'px';
    raindrop.style.animation = 'fall ' + (Math.random() * 2 + 1) + 's linear forwards';
  
    document.getElementById('raindrops').appendChild(raindrop);
  
    // Remove the raindrop after it falls out of view
    setTimeout(function() {
      raindrop.remove();
    }, 500); // Adjust time as needed
  }
  
  // Create a new raindrop at intervals
  setInterval(createRaindrop, 1); // Adjust frequency as needed
  
  // CSS keyframes for falling animation
  const styleSheet = document.createElement('style');
  styleSheet.type = 'text/css';
  styleSheet.innerText = `
    @keyframes fall {
      to {
        transform: translateY(100vh);
      }
    }
  `;
  document.head.appendChild(styleSheet);
  

/**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**/
/**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**/


