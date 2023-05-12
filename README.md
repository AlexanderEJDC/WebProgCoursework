# WebProgCoursework
Coursework for Web Programming UoP

FUNCTIONALITY: 

    - Has read only, linked in the footer of main page. Can return you to main. 
    - Displays a HTML table from a database model.
    - User can add input by using the input fields at the top of the page.
    - Will be formatted for printing, hides input fields and footer link to read only.
    - Entries can be edited by clicking "edit message" attribute.
    - Stored entered information, include dates worked, the work, the experience and used competencies.

REFLECTION: 

    - Would like to add seperate pages/displays by month.
        - User would be able to sort through everything and view by month, only seeing the relevant entries. 
    - Employ greater CSS to organise the page better for both desktop and mobile.
    - Should order entires by date/time, rather than not at all. 
    - Allow for images to be submitted into an entry.
    - Would use a form to accept competencies, rather than text.
        - Link direct to IET Competencies PDF supplied as a remedy, should user forget.

QUIRKS TO BE AWARE OF:

    - When creating a new entry, on repopulating the table the header "Placement Diary" gets temporarily removed.
        - This can be fixed by refreshing the page.

        - Occurs due to removing all the content from the table, inc. header when adding new entry.
        - Is repopulated on refresh with inital values from database.

    - When viewing in Mobile Mode, when editing a message and returning to main it may zoom you in automatically.

DOCUMENTATION: 

    - We have three html pages - one main (index), one for read only (reader) and one for entry editing (editor).
    - Each page requests data from server.js, taking JSON string data and iterating through the array of objects sent.
        - Each object populates a cloned tableRow, and then has an attribute appended onto that to allow for editing. 
    - Server JS handles requests and responses, and will camme functions in memoryDB.js to run SQL queries of that database,
    which is initialised by 001-init.sql. 

    - reader.html only recieves data, and does not provide it. 


CODE REFERENCING: 

Functionality inspired and derived from various iterations of the UoP "Simple Message Board" (The SMB), specifically versions 5, 6, 8 and x. 

    - This was used to establish a base of how the system would operate, using its API routing and editor techniques and applied for a table format. 
    - Instead of creating elements directly, we clone templates and append them to a table continously. 
    - We also condense certain functions and do not incorporate others (such as show detail)
    - Address a stated "con" by adding a read only mode, which will be the printable version.

    - SMB GitHub repository found here: https://github.com/portsoc/staged-simple-message-board 

- PROS:
    - Good frame of refernce for understanding 
    - Simple to adapt once understood

- CONS: 
    - Rather limited in its scope, doesn't allow for seperate pages per month and did not include reader mode.
    - As always, reverse engineering other peoples code can be tricky and time consuming.  
    
Certain functions generously supplied and explained by Dr. Matt, such as "ToggleBtn" and the method of constructing the payload through a for..of loop. 

    - The for loop creating the payload in sendMessage() was taken from an example provided, in which it uses a for loop to iterate through an object containing all of the input fields. 
    - It would then create a payload segment named lifted directly from the field, clearing the field immediately after supplying it into the payload. 

    - ToggleBtn would read input fields, and disable the button if a field is empty to prevent empty data being supplied and potentially breaking the database. 
    - for every field in the object, if it has NOT Value (no value). Otherwise, we remove the disabled attribute if they do have data inside. 
    We reset the disabled value every time we post a message to the server, so that the function can reset and work from the start. 

    - Both of these functions were provided, and taken from this jsfiddle url: https://jsfiddle.net/opLyz8qj/4/ 