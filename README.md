[![SampleFirebaseGDG](https://p-u.popcdn.net/events/covers/000/000/363/cover/COVER_2.jpg?1456818721)](https://github.com/gastzars/SampleFirebaseGDG
)
# Sample Firebase project for GDG Sriracha
Sample project with all develop's services integrated including Authentication, Database, Storage, Hosting and also Cloud-messaging service.

## Requirement
- NodeJs
- Firebase-cli

#### To install Nodejs
```bash
sudo apt-get update
sudo apt-get install nodejs
```
#### To install Firebase-cli
```bash
npm install -g firebase-tools
```

## Quick started
Make sure you have create a project from firebase console at https://console.firebase.google.com

To start the project, go to the root directory of the sample project, then follow the command below:
```bash
firebase serve --project <--project-id-->
```
To get the list of the projects with its ID.
```bash
firebase list
```

## Project skeleton
```
project
│   database.rules.json
│   firebase.json
│   .firebaserc
│
└───functions
│   │   package_and_function
│   
└───public
    │   some_static_files
```
