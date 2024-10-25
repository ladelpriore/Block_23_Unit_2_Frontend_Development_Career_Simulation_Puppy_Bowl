//Get the API endpoints for the data u want to view
    //View the player roster. REnder all puppy players
    //View single player details. Each puppy has details
        //functionality: add, remove puppy from roster
//HTML: players are renderd on card elements with their info
//CSS: player cards are styled
//JS: fetch, async, await to use CRUD for REST API to run website
    //create a branch for each feature/code



document.addEventListener('DOMContentLoaded', function () {
  
    async function getPlayers() {               // Fetch the players list from the API and display all player details.  //Create an asynchronous function to call the API and fetch the players
      const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2409-FTB-ET-WEB-FT/players');      //Fetch the API url for our class and the players data
      const data = await response.json();   //Convert the players data to json.  //If the data is fetched successfully, render it in the players-list div  
      if (data.success) {             
        renderPlayers(data.data.players); // Use data.data.players to access the players array in the API documentation.  // Show the party list div
        document.getElementById('player-list').style.display = 'block';
      } 
    } 
  
    function renderPlayers(players) {                //Render each player and details in the newly created list  //Create a function to render the players list and details in the DOM 
      const puppiesList = document.getElementById('players');        
      players.forEach(player => {                   //Create a variable for players list, and grab the DOM element ul   //Create a new array for the players, and go through each array item 
        const li = document.createElement('li');            //Create for each array item a new li list element in the DOM. HTML styling for each li item with heading and paragraph tags
        li.innerHTML = `   
          <h3>${player.name}</h3>    
          <h4>Breed: ${player.breed}</h4>
          <p>Status: ${player.status}</p>
          <p>Created At: ${new Date(player.createdAt).toLocaleString()}</p>
          <p>Team ID: ${player.teamID}</p>
          <p>Last updated at: ${player.updatedAt}</p>
          <img src="${player.imageUrl}" alt="${player.name}">
        `;         
        puppiesList.appendChild(li);                  //Append the new array and list of events and their details                                                   
      });
    }
  
    document.getElementById('fetch-players-btn').addEventListener('click', getPlayers);     //Event listener for the feath players button that will run the first function 
  });

  