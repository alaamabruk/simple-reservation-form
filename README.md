# simple_reservation_form

***** Application build using :
 i used html and CSS to make form as it like in index.html.
 i write my Java script usinf arrow function ES6 and  vanilla JS [ in validation.js in JS folder ].

# notes the application 
   . I make dependent fields in a reservation form as below
   . Activity name [Choose from list of activities > Act 1 , Act 2 , Act 3]
   . Session [Choose from list of sessions  > 1 pm – 2pm , 3pm – 4pm]
   . Name / Email
   . No of person attending the session [drop down > 1,2,3,4,5]


 * the application has 3 activities and 2 sessions.
 * i used vanila java script and arrow function from ES6.
 * each session should have maxmum of 10 person once it over we remove the session.
 * we can add multible activities in one session of this two containing number of person in each activity/session.
 * after sumit BOOK NOW button it take number of person and save it to session repository javascript.
 * each time we make submit we add number of person to the session number in session repository.
 * if this numer in session repository greater than 10 it just alert with " maximum capacity of 10 person " and remove the session.
 
 
 
 
 # steps 
    1.open index.html on your browser.
    2. now you see the reservation form containing 2 textbox ( "E_Mail " , " Name") and 3 drop down list (" Activities"," sessions"," number of person").
    3. just fill the form and select actvity and session to be in and number of person in thay session and press submit it alerts you with number of person in that session. 
    4. and so on once session capacity over and get to 10 person page alert you with "maximum capacity of 10 person " and " Session number (1 , 2) closed"
    5. if the two sesion full it just remove all session from drop down list.
    6. this repository is on session Scope if we close browser it just remove all the numbers of people in each session and load with zero number in each sesssion.

