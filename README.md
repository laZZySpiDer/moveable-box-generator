


### Build the App : 
To build the app perform following steps : 
1. Execute the command  `ng build` to build the project.
1. Once the command is successfully executed a `dist` folder will be created which conntains the compiled javascript code of our angular app which can be pushed to the server.

### Deploying the App Locally: 
Note : Make sure you have node and angular-cli installed on your local system.

To deploy an angular app locally perform the following steps:
1. Clone the angular app repository from github.
1. Once the repository is cloned get into the folder and execute the command `npm install`. This will install all the packages listed in package.json.
1. Run the command `ng serve --open`. This will compile the code and once ready will pop open the browser.
Note : If the browser doesnt open automatically go to the link : <http://localhost:4200/>




## Things to complete in the assignment
- [x] User gets to see a button to add a new box in the window. On clicking the button, a box is created with a unique number ID. Boxes are of fixed width and height.
- [x] Higher id boxes will have a higher z-index.
- [x] Users can add multiple boxes.
- [x] To select a box, click on it. Highlight the selected box.
- [x] Use W-A-S-D or arrow keys on the keyboard to move the selected box.
- [x] Use the ‘delete’ key on the keyboard to remove the selected box.
- [x] A button to toggle keyboard control.(*no listener should be open when this button status
is off).
- [x] Please provide a ReadMe file with your codebase, detailing on how to build and deploy
your code in the local browser.
### Additional tasks
- [x] Create a hardcoded custom rectangular fence and ensure all the boxes stay within the
fence during movement.
- [ ]  Optimise the UI and modularize your code.