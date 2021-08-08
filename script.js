// fetch data
fetch('https://api.spacexdata.com/v4/launches')
.then((res) => res.json())
.then((data) => {

const combineddata = data

// filter and sort
.filter(year => year.date_local >= '2021-01-01' && year.date_local <= '2021-31-12')
.sort((a, b) => new Date(b.date_local) - new Date(a.date_local));




// find launch date
function LaunchDate(launches){

    // get today's date
    let today = new Date();

    // get data
    var dates = combineddata; 

    // parse each string as a date object and sort them in ascending order
    function sortDates(dates) {    
      return dates.map(function(item) {
          return new Date(item.date_local).getTime()
        return new Date(date).getTime();
      }).sort(function(a, b) {
        return a - b;
      });
    }

    var orderedDates = sortDates(dates);

    // remove any dates in the past, and get the first child of the array of remaining dates
    var nextDate = orderedDates.filter(function(date) {
      return (Date.now() - date) < 0;
    })[0];


    // conditional statement output next launch date if >= than today's date
    if (new Date(nextDate) >= today) {        
          return new Date(nextDate).toISOString();
    } else {
              return 'error';
        }
    }





// return indexOf number for css

function cssNumber(launches){

    // get today's date
    let today = new Date();

    // get data
    var dates = combineddata; 

    // parse each string as a date object and sort them in ascending order
    function sortDates(dates) {    
      return dates.map(function(item) {
          return new Date(item.date_local).getTime()
        return new Date(date).getTime();
      }).sort(function(a, b) {
        return a - b;
      });
    }


    var orderedDates = sortDates(dates);


    // remove any dates in the past, and get the first child of the array of remaining dates
    var nextDate = orderedDates.filter(function(date) {
      return (Date.now() - date) < 0;
    })[0];

    // obtain array position minus difference and apply value to css nth-child
    const getpos = orderedDates.indexOf(nextDate) - 12;


    // conditional statement adds CSS class to the grid 
    if (new Date(nextDate) >= today) {        
          return getpos 
    } else {
          return 'error';
    }
}






// output launch template html
function launchTemplate(launches) {
    return `
                <div id="grid" class="grid-item nextcss">
                <style>
                /* this css should not ideally be located here */
                    .nextcss:nth-child(${cssNumber(launches.date_utc)}) {
                      border: 3px solid #ff0000;
                      background: #ffffff;
                </style>

                    <ul>
                        <li><img class="logo" src="${launches.links.patch.small}" onerror="this.onerror=null; this.src='https://via.placeholder.com/100'"/></li>
                        <li>Name: ${launches.name}</li>
                        <li>Upcoming: ${launches.upcoming}</li>
                        <li>Next Launch Date UTC: ${launches.date_utc}</li>
                        <li class="next-launch"><p>Find Next Launch Date from Today: ${LaunchDate(launches.date_utc)}</p></li>
                    </ul>
                </div>
            `
}

// output to div
document.getElementById("app").innerHTML =`

API: https://api.spacexdata.com/v4/launches<br/>
Total Launches for 2021: <strong>${combineddata.length}</strong><br/>
<h2>Launches</h2>

<div class="grid-container">
${combineddata.map(launchTemplate).join('')}           
</div>



<p class="footer">Footer</p>
`;

})                    
                       