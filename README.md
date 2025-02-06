# How to Set Up 

**Step 1: Obtain the URL**

You can get the URL by clicking the green code button, and select the HTTP (as this guide is not using SSH nor GitHub CLI)

**Step 2: Open Terminal**

Open your terminal and go to the directory where you want to clone the project. 

Run this command in the terminal, preferably in your code editor: (Make sure you have git installed)
- git clone https://github.com/GitHubUser101521/user-auth-project
- npm install
- npx json-server db.json (the json file is provided in the root directory, check for data structure example)
- npm run dev (or the script configured for running development in package.json)

**Step 3: Interact with the Application**

By clicking the add member button at the top right of the table, a popup form will appear. Entering and submitting data will trigger a function to do the CRUD operation. Every data entered will be validated with **Formik and yup**. Other than that, you can still edit the data you entered by clicking the edit in the actions column, and same with the delete, you can remove datas from the table by clicking it.
All of the avaiable data in the **json-server** will be displayed in table form that has been designed with **CSS Variable style** (See /styles/styles file).

For ease of navigation of user data, a **search bar** is provided which will filter based on user email as a unique identifier for each user. Additionally, a **pagination** is also present below. Each page will display a maximum of 5 data.
