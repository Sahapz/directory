
  
  async function getJoke() {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    const data = await response.json();
    console.log(data);
    document.querySelector('#setup').textContent = data.setup
    document.querySelector('#punchline').textContent = data.punchline
  }

  getJoke()

  const revealButton = document.querySelector('#setup');

 revealButton.addEventListener('click', function() {
	document.querySelector('#punchline').classList.remove('hidden')
	document.querySelector('p').classList.add('hidden')
  });

  const button = document.querySelector('#button');

  button.addEventListener('click', function() {
    console.log('Button clicked!');
    getJoke()
    document.querySelector('#punchline').classList.add('hidden')
    document.querySelector('p').classList.remove('hidden')
  });
