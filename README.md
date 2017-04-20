[![SampleFirebaseGDG](https://p-u.popcdn.net/events/covers/000/000/363/cover/COVER_2.jpg?1456818721)](https://github.com/gastzars/SampleFirebaseGDG
)
# Sample Firebase project for GDG Sriracha
Sample project with all develop's services integrated including Authentication, Database, Storage, Hosting and also Cloud-messaging service.

## Requirement
- Gmail account
- NodeJs
- Firebase-cli

#### To register Gmail account
Visit https://gmail.com

#### To install Nodejs
##### Windows
Visit https://nodejs.org/en

##### Linux
```bash
sudo apt-get update
sudo apt-get install nodejs
```
##### Test that Nodejs is installed correctly
```bash
node -v
```

#### To install Firebase-cli
```bash
npm install -g firebase-tools
```

## Quick started
Make sure you have create a project from firebase console at https://console.firebase.google.com

#### Login firebase
```bash
firebase login
```

#### Init a new project
init new hosting project
```bash
cd ~
mkdir firebase_project
cd firebase_project
mkdir sample_app
cd sample_app
firebase init
```

#### Get the list of the projects with its ID.
```bash
firebase list
```

#### Enjoy !
```bash
firebase serve --project <--project-id-->
```

## Project skeleton
```
├── database.rules.json # Rule for database such as index, validation, read condition, and etc.
├── firebase.json       # Describe properties of the project.
├── functions           # Directory for all the functions code.
│   ├── index.js        # Main source for Cloud Function code.
│   ├── node_modules    # Directory where dependency are.
│   └── package.json    # npm package file describing Cloud Function code.
└── public              # Directory for Hosting assets.
    ├── 404.html        # 404 static file.
    └── index.html      # default index file for / path.
```
