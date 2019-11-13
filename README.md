
## Table of Contents
* [Overview](#overview)
* [Features](#features)
* [Routes](#routes)
* [Futere Updates](#future-updates)
* [Bugs](#bugs)

### Overview 

Holindary was created with the purpose of planning and saving your holiday experiences. You may currently signup/login to see the holidays recognized nationally in the US, as well as international holidays. You may save these holidays to your profile, add what you'd like to do for each holiday, or create your own custom experience. To learn the site's mechanics, see the information below. 


### Features

Holindary is built as a MERN stack app and styling is provided with Reactstrap. 

### Routes 

/GET /profile - calls the database to display the user's information as well as the associated chosen holidays. 

/GET /holidaySearch - calls the calendary api for holiday information (currently US only in 2019)

/GET /holidayPlanner - calls the database to display the user's holidays as well as todos associated with each holiday.

/POST /auth/signup - signs up and authorizes user. 

/POST /auth/login - authenticates and authorizes user. 

/POST /holidaySearch - passes the selected holiday to the database and stores it. 

/POST /holidayPlanner - passes the input field information to a todo list for a particular holiday. 

/DELETE /profile - deletes a selected holiday from the user's profile. 


### Future Updates

- would include a weather api in the planner, and expand the holiday search to not just the US, but globally. 


### Bugs

Currently the api call within /holidaySearch has duplicate information which should be filtered out. 

The notification when a user has saved a holiday to the database is not obvious, and can be confusing when scrolling through a large search. 

