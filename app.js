document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternal);

// Get local text file data
function getText() {
  // Fetch returns promises, which you have to use .then with
  fetch('test.txt')
    .then(function(res) {
      // console.log(res); // Prints a response
      // console.log(res.text()); // Prints a promise
      return res.text(); // Returns a promise
      // res.text() is just that way because it is a text file, it would be res.JSON() if it were a JSON file
    })
    .then(function(data) {
      console.log(data); // Returns the data, in this case the text inside the txt file
      document.getElementById('output').innerHTML = data;
    })
    .catch(function(err) {
      console.log(err);
    });
}

// Get local json data
function getJson() {
  fetch('posts.json')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      let output = '';
      data.forEach(post => {
        output += `<li>${post.title}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}

// Get local json data
function getExternal() {
  fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      let output = '';
      data.forEach(user => {
        output += `<li>${user.login}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}