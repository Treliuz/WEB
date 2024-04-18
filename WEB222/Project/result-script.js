function fetchCharacterData() {
    const userId = document.querySelector('.input').value;
    const apiUrl = `https://ffxivcollect.com/api/characters/${userId}`;
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        updateCharacterInfo(data);
      })
      .catch(error => {
        console.error('Error fetching character data:', error);
      });
  }
  
  function updateCharacterInfo(data) {
    const characterName = data.name;
    const charDC = data.data_center;
    const charServer = data.server;
    const characterImage = data.portrait;
    
    console.log('Received Character Data:', data);
    const characterNameElement = document.querySelector('.character-info');
    const characterDCElement = document.querySelector('.character-info:nth-child(3)');
    const characterServerElement = document.querySelector('.character-info:nth-child(4)');
    const characterImageElement = document.querySelector('.portrait');
    
    characterNameElement.textContent = characterName;
    characterDCElement.textContent = `Data Center: ${charDC}`;
    characterServerElement.textContent = `Server: ${charServer}`;
    characterImageElement.src = characterImage;
  }
  
  const searchButton = document.querySelector('.classic-button');
  searchButton.addEventListener('click', fetchCharacterData);

  