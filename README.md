# spacex

1) Have you worked with API’s before? If so, please provide brief details of relevant projects.

A: I have worked with creating a basic API in PHP and used that data in React and Angular. Also basic Vue. 


2) How you will approach this task?

1. Collect data from API.
2. Output data from API using Javascript.
3. Display Spacex launches in a grid
4. Highlight next launch date from today's date.


3) Given more time what would you improve?

I had issues getting the next launch date from today's date. I ended up using the indexOf the next launch date to apply 
the number to the css to highlight the next launch date. I would have ideally liked the next launch date conditional
statement working the way I thought it should be working.

Something like:

          if nextlaunchdate === todaysdate {
            return apply css style to grid item
          } else {
            return 
          } 
        } 
