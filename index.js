//Get the API endpoints for the data u want to view
    //View the player roster. REnder all puppy players
    //View single player details. Each puppy has details
        //functionality: add, remove puppy from roster
//HTML: players are renderd on card elements with their info
//CSS: player cards are styled
//JS: fetch, async, await to use CRUD for REST API to run website
    //create a branch for each feature/code

//Create API for fetching the resouce for player objects
//Select teams. Buttons that list by team
//Select status. Buttons that list team by status.
//Buttons to add/remove new dogs or current dogs?



document.addEventListener('DOMContentLoaded', function () {
  
    async function getPlayers() {               // Fetch the players list from the API and display all player details.  //Create an asynchronous function to call the API and fetch the players
      const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2409-FTB-ET-WEB-FT/players');      //Fetch the API url for our class and the players data
      const data = await response.json();   //Convert the players data to json.  //If the data is fetched successfully, render it in the players-list div  
      console.log(data);
      if (data.success) {             
        renderPlayers(data.data.players); // Use data.data.players to access the players array in the API documentation.  // Show the party list div
        document.getElementById('player-list').style.display = 'block';
      };  
    } 
  
    function renderPlayers(players) {                //Render each player and details in the newly created list  //Create a function to render the players list and details in the DOM 
      const puppiesList = document.getElementById('players');        
      players.forEach(player => {                   //Create a variable for players list, and grab the DOM element ul   //Create a new array for the players, and go through each array item 
        const li = document.createElement('li');            //Create for each array item a new li list element in the DOM. HTML styling for each li item with heading and paragraph tags
        li.innerHTML = `   
          <h3>${player.name}</h3>    
          <h4>Breed: ${player.breed}</h4>
          <p>Current status: ${player.status}</p>
          <p>Created at: ${new Date(player.createdAt).toLocaleString()}</p>
          <p>Team Id: ${player.teamId}</p>
          <p>Last updated: ${player.updatedAt}</p>
          <img src="${player.imageUrl}" alt="${player.name}">
        `;         
        puppiesList.appendChild(li);                  //Append the new array and list of events and their details                                                   
      });
    }
  
    document.getElementById('fetch-players-btn').addEventListener('click', getPlayers);     //Event listener for the feath players button that will run the first function 
  
  





    async function getTeams() {                           // Fetch the teams list from the API and display all teams details.  //Create an asynchronous function to call the API and fetch the teams
          const responseTeams = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2409-FTB-ET-WEB-FT/teams');                  //Fetch the API url for our class and the teams data
          const dataTeams = await responseTeams.json();   //Convert the players data to json.  //If the data is fetched successfully, render it in the players-list div  
          console.log(dataTeams);
          if (dataTeams.success) {             
            renderTeams(dataTeams.data.teams); // Use dataTeams.data.teams to access the teams array in the API documentation.  // Show the teams list div
            document.getElementById('teams-list').style.display = 'block';
          };  
        } 
      
        function renderTeams(teams) {                //Render each player and details in the newly created list  //Create a function to render the players list and details in the DOM 
          const teamsList = document.getElementById('teams');        
          teams.forEach(team => {                   //Create a variable for players list, and grab the DOM element ul   //Create a new array for the players, and go through each array item 
            const li = document.createElement('li');            //Create for each array item a new li list element in the DOM. HTML styling for each li item with heading and paragraph tags
            li.innerHTML = `   
              <h3>${team.name}</h3>    
              <h4>Score: ${team.score}</h4>
              <p>Id: ${team.id}</p>
              <p>Created at: ${new Date(team.createdAt).toLocaleString()}</p>
              <p>Last updated: ${team.updatedAt}</p>
            `;
            const playersList = document.createElement('ul');
            team.players.forEach(player => {
                const playerItem = document.createElement('li');
                playerItem.innerHTML = `
                    <strong>${player.name}</strong> - ${player.breed} <br>
                    <p>Status: ${player.status}</p>
                    <img src="${player.imageUrl}" alt="${player.name}" style="width:100px; height:auto;">
                `;
                playersList.appendChild(playerItem);
            });

            // Add a header for players and append the players list to the team item
            li.appendChild(document.createElement('h5')).innerText = 'Players:';
            li.appendChild(playersList);
            teamsList.appendChild(li);                  //Append the new array and list of events and their details                                                   
          });
        }
      
        document.getElementById('fetch-teams-btn').addEventListener('click', getTeams);  




  
  
  });

  

