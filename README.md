# WebProgCoursework
Coursework for Web Programming UoP

Objectives for this build:

    OBJ - Add database communication.


CODE REFERENCING: 

Functionality inspired and derived from various iterations of the UoP "Simple Message Board", specifically versions 5, 6, 8 and x. 

    - This was used to establish a base of how the system would operate, using its API routing and editor techniques and applied for a table format. 
    - Instead of creating elements directly, we clone templates and append them to a table continously. 
    - We also condense certain functions and do not incorporate others (such as show detail)
    - Address a stated "con" by adding a read only mode, which will be the printable version.

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