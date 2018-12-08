
## [Bronco Note](http://www.bronconote.com) <img src="./src/logo.png" width="100"/> 
## [Team page](http://cs480-projects.github.io/teams-fall2018/Game%20of%20Threads/index.html)
## Share your notes with your classmates without leaving the application.

Created in ReactJS using Bulma.io, Node.js, and PostgreSQL

## Front-End:
* Matt Marra
* Julio Berina
---
## Back-End:
* Drew Umlang
* Michael Trinh
---
## Graphic-Designer:
* Jaeho Kim
---
## Features/Usage:
* Google oAuth login or anonymous
* Posting and saving markdown-supported notes to database
* Collection of saved notes in notebook based on login
* Search functionality for saved notes and ability to add to notebook
## Important Notes:
* Saving a note added from existing note in database doesn't work in order to stop accidental plagiarism
* Saving a note without pressing the new note button as anonymous or new user if no notes exist in selector component doesn't work. 
---
Push Oct 30 2018
* Access User Info Context via: where /dataValue/ is the attribute you wish to access
* the context can have *only* a single function as its child in order to work
`<AppContext.Consumer>{(context) => context.dataValue}</AppContext.Consumer>`
