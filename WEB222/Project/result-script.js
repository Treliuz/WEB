// Executed when using search bar
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

// Executed when coming from welcome page
document.addEventListener('DOMContentLoaded', function () {
  function getUrl() {
    const params = {};
    window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (match, key, value) {
      params[key] = decodeURIComponent(value);
    });
    return params;
  }

  function updateCharacterInfo() {
    const params = getUrl();

    const characterName = (params.name || 'Character Name').replace(/%20/g, ' ');
    const charDC = params.dc || 'Data Center';
    const charServer = params.server || 'Server';
    const characterImage = params.image || '';
    //const mountImage = params.mount_image || '';

    const characterNameElement = document.getElementById('name');
    const characterDCElement = document.getElementById('DC');
    const characterServerElement = document.getElementById('server');
    const characterImageElement = document.querySelector('.portrait');
    //const mountImageElement = document.querySelector('.mountImg');

    characterNameElement.textContent = characterName;
    characterDCElement.textContent = `Data Center: ${charDC}`;
    characterServerElement.textContent = `Server: ${charServer}`;
    characterImageElement.src = characterImage;
    //mountImageElement.src = mountImage; 

    const mountsCount = params.mounts_count || 0; 
    const mountsTotal = params.mounts_total || 1; 
    const mountsPercentage = (mountsCount / mountsTotal) * 100; 

    const minionsCount = params.minions_count; 
    const minionsTotal = params.minions_total; 
    const minionsPercentage = (minionsCount / minionsTotal) * 100;

    const rectangleA = document.querySelector('.news-title');
    const rectangleC = document.querySelector('.news-title-d');

    rectangleA.textContent = `Mounts Owned: ${mountsPercentage.toFixed(2)}%`;
    rectangleC.textContent = `Minions Owned: ${minionsPercentage.toFixed(2)}%`;
  }

  updateCharacterInfo();
});



  