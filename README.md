<h1 align="center">
  EVE Book API
</h1>

<h3 align="center">Hub for EVE Online community.</h3>

<div align="center">
  <a target="_blank" href="https://travis-ci.org/evebook/api/">
    <img src="https://travis-ci.org/evebook/api.svg?branch=master" alt="Travis Master branch" />
  </a>
  <a target="_blank" href="https://greenkeeper.io/">
    <img src="https://badges.greenkeeper.io/evebook/api.svg" alt="Greenkeeper" />
  </a>
  <a target="_blank" href="https://coveralls.io/github/evebook/api">
    <img src="https://coveralls.io/repos/github/evebook/api/badge.svg" alt="Coverage Status" />
  </a>
  <a target="_blank" href="https://www.fuzzwork.co.uk/tweetfleet-slack-invites/">
    <img src="https://img.shields.io/badge/slack-%23evebook-ff69b4.svg" alt="Join Slack Chat" />
  </a>
</div>

## What's it about
Project was started with an idea of creating social platform for players of EVE Online. A place where players could connect and share their experiences, fan art, images, videos, thoughts, propaganda...

Each "user" would be an actual EVE Online character and you could only login using game's credentials (SSO), this way characters could interact outside of eve online. Alliances and corporations could share propaganda videos/art and gather followers who could re-share and spread the word.

Whole platform would heavily relay on EVE Online API, so that you could send in game emails, money, create events (calendar). It would feel as an extension of game itself.

Think of it as combination of r/eve and twitter. A hub of EVE Online community.

## Contribution
We welcome everyone that wants to contribute! You should read [CONTRIBUTING.md](https://github.com/evebook/api/blob/master/CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](https://github.com/evebook/api/blob/master/CODE_OF_CONDUCT.md) before you start. If you have any questions you can ask them on [issues](https://github.com/evebook/api/issues) or directly on [slack](https://www.fuzzwork.co.uk/tweetfleet-slack-invites/) in `#evebook`.


## Installation

```
# Using NPM
$ npm install

# Using Yarn
$ yarn
```

## Configuration
All configuration is done in `.env` file. You can create it by copying `example.env`. You can override `.env` file by providing envirement variables like `API_PORT=8080 yarn start`

```
$ cp example.env .env
```

## Start
Project consits of microservices.

Main service is API (which isnt "micro"), that servs all the data for web. Then we have Updater, which periodicly updates characters/corporations/alliances with changing/live data. And Killmails, which is listening for new killmails that happen in game and creates appropriate posts/events. 

### API
```
# Using NPM
$ npm run start

# Using Yarn
$ yarn start
```

### Updater
```
# Using NPM
$ npm run start:updater

# Using Yarn
$ yarn start:updater
```

### Killmails
```
# Using NPM
$ npm run start:killmails

# Using Yarn
$ yarn start:killmails
```
