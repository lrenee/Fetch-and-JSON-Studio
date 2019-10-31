// TODO: add code here

window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then (function (response) {
      response.json().then(function(json) {
        
        let jsonSort = [];
        let classActive = "";
        jsonSort = json.sort((a,b) => b.hoursInSpace - a.hoursInSpace);

        const div = document.getElementById("container");
        let outline = '';
        for (let i = 0; i < json.length; i++) {
          if (json[i].active === true) {
            classActive="active";
          } else {
            classActive="bio";
          };
        
        box = `
          <div class="astronaut">
          <div class="bio">
            <h3>${json[i].firstName} ${json[i].lastName}</h3>
            <ul>
              <li>Hours in space: ${json[i].hoursInSpace}</li>
              <li class="${classActive}">Active: ${json[i].active}</li>
              <li>Skills: ${json[i].skills.join(', ')}</li>
            </ul>
          </div>
          <img class="avatar" src=${json[i].picture}>
          </div>`
        
       outline += box;   
     
       };
     div.innerHTML += outline;
     
      const div2 = document.getElementById("count");
      box = `
      <div>
        <h3>Count: ${json.length}</h3>
      </div>`
      div2.innerHTML += box;
    });     
  });
});
    
