# WebProgCoursework
Coursework for Web Programming UoP

Objectives for this build:

    OBJ - Add database communication.


CODE REFERENCING: 

Functionality inspired and derived from various iterations of the UoP "Simple Message Board", specifically versions 5, 6 and 7. 

    - This was used to establish a base of how the system would operate, using its API routing and editor techniques and applied for a table format. 
    - Instead of creating elements directly, we clone templates and append them to a table continously. 
    - We also condense certain functions and do not incorporate others (such as show detail)

- PROS:
    - Good frame of refernce for understanding 
    - Simple to adapt once understood

- CONS: 
    - Rather limited in its scope, doesn't allow for seperate pages per month and ..
    - As always, reverse engineering other peoples code can be tricky and time consuming.  
    
Certain functions generously supplied and explained by Dr. Matt, such as "ToggleBtn" and the method of constructing the payload. 

    - The for loop creating the payload in sendMessage() was taken from an example provided, in which it uses a for loop to iterate through an object containing all of the input fields. 
    It would then create a payload segment named lifted directly from the field