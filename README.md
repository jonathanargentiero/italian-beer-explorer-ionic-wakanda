# Italian Beer Explorer

Italian Beer Explorer is a **ionic**, **angular-wakanda**, **wakanda** demo app based on [Bower](http://bower.io/). The project is a fork of [Belgian Beer Explorer](http://coenraets.org/blog/2015/01/belgian-beer-explorer-with-angularjs-and-ionic/) by [Christophe Coenraets](https://github.com/ccoenraets).

## Included

- A [Wakanda](http://www.wakanda.org/) solution with dummy data
- Bower configuration

## Setup

### Prerequisites

- [Wakanda Server V11 based on JSCore](http://www.wakanda.org/downloads)
- [NodeJS](https://nodejs.org/download/)
- [Bower](http://bower.io/)

### Install

Once you've installed NodeJS (or if you already have it), execute the following steps to init your working environment:

1. Download [Wakanda Server V11 based on JSCore](http://www.wakanda.org/downloads) or click on `Clone a solution from a GIT server` on [Wakanda Studio](http://www.wakanda.org/downloads) and insert the URL of this repository
2. In the command line go to `/path/to/your/italian-beer-explorer-ionic-wakanda/WebFolder` and run:
```shell
$ bower install
``` 
	
### Run

In order to launch the following solution, execute the following steps:

Start the solution.
In order to start it on [Wakanda Server via command line](http://livedoc.wakanda.org/Command-Line-Access/Administrating-Wakanda-Server-Unix.300-583228.en.html) run (on MAC): 
```
 $ path/to/your/Wakanda\ Server.app/Contents/MacOS/Wakanda\ Server /path/to/your/italian-beer-explorer-ionic-wakanda Solution/italian-beer-explorer-ionic-wakanda.waSolution 
```

Then navigate to `http://127.0.0.1:8081/www/index.html`

### Compile

The solution can be compiled in Cordova with the standard workflow:

1. Download and install [Cordova](https://cordova.apache.org/)
2. In the command line go to `/path/to/your/italian-beer-explorer-ionic-wakanda/WebFolder` and run: 
```shell
$ cordova platform add [platform-name]
``` 
example: android (requires [android-sdk-tools](https://developer.android.com/sdk/installing/index.html))
```shell 
$ cordova build
$ cordova run
 ```
 