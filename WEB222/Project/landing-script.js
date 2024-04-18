function fetchCharacterData(event) {
  event.preventDefault();
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
      // Fetch the first mount owned by the character
      const mountsApiUrl = `https://ffxivcollect.com/api/characters/${userId}/mounts/owned`;
      return fetch(mountsApiUrl);
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(mountsData => {
      const mountImage = mountsData[0].image;

      window.location.href = `results.html?name=${data.name}&dc=${data.data_center}&server=${data.server}
      &image=${data.portrait}&mounts_count=${data.mounts.count}&mounts_total=${data.mounts.total}&minions_count=${data.minions.count}
      &minions_total=${data.minions.total}&mount_image=${mountImage}`;
    })
    .catch(error => {
      console.error('Error fetching character data:', error);
    });
}


const searchButton = document.querySelector('.classic-button');
searchButton.addEventListener('click', fetchCharacterData);


const apiUrl = 'https://na.lodestonenews.com/news/topics';

function fetchNews() {
  fetch(apiUrl)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Network response was not ok');
      }
    })
    .then(data => {
      updateNews(data);
    })
    .catch(error => {
      console.error('Error fetching news:', error);
    });
}

function updateNews(data) {
  const newsFeed = document.querySelector('.news-feed');

  newsFeed.innerHTML = '';

  if (!data || data.length === 0) {
    console.error('No data fetched or empty data array');
    return;
  }

  data.forEach((item, index) => {
    const newsItem = document.createElement('div');
    newsItem.classList.add('news-item');
    newsItem.classList.add(`rectangle-${index + 4}`); 

    const imageElement = document.createElement('img');
    imageElement.src = item.image;
    imageElement.alt = item.title; 

    const urlElement = document.createElement('a');
    urlElement.href = item.url;
    urlElement.target = "_blank";
    urlElement.textContent = "Read More";

    newsItem.appendChild(imageElement);
    newsItem.appendChild(urlElement);

    newsFeed.appendChild(newsItem);
  });
}

document.addEventListener("DOMContentLoaded", function() {
  fetchNews();
});
