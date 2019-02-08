# liri-node-app

```
git clone https://github.com/kepa4/liri-node-app.git
cd liri-node-app
npm install
```

**In order to use this node application correctly, you will need a spotify application client Id and secret**

**Create a .env file**

create environment variables in .env like so:
```
SPOTIFY_ID=your-spotify-client-id
SPOTIFY_SECRET=your-spotify-secret
```

## Commands:
Spacing does not matter after the third argument

**To get a concert**
`node liri.js concert-this <Band Name>`

**To get a Track from Spotify**
`node liri.js spotify-this-song <Song Name>`

**To get movie Information**
`node liri.js movie-this <Movie Name>`

**To read from the random.txt**
`node liri.js do-what-it-says`

## Screenshots 
![alt text](https://raw.githubusercontent.com/kepa4/liri-node-app/3dc5cb1e01bd736825ea4b1f8f205c653d7d9cc9/pictures/concert-this.PNG)

![alt-text](https://raw.githubusercontent.com/kepa4/liri-node-app/3dc5cb1e01bd736825ea4b1f8f205c653d7d9cc9/pictures/spotify-this.PNG)

![alt-text](https://raw.githubusercontent.com/kepa4/liri-node-app/3dc5cb1e01bd736825ea4b1f8f205c653d7d9cc9/pictures/movie-this.PNG)

![alt text](https://raw.githubusercontent.com/kepa4/liri-node-app/3dc5cb1e01bd736825ea4b1f8f205c653d7d9cc9/pictures/do-what-it-says.PNG)

## ToDos:
* ~create defualts for the commands when the user does not have any arguments after the specify which command they're running~
* ~create a comand for do-what-it-says which runs the command in random.txt~
