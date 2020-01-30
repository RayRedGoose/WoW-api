# Turing Cafe API

This app is the back-end server for the Mod 4 FE first solo project.

## Getting started

### Installation

1. Clone down this repository.
    - `git clone https://github.com/RayRedGoose/WoW-api.git`
2. Change into the new directory.
    - `cd WoW-api`
3. Install the dependencies.
    - `npm install`

### Usage

1. To fire up the server, run `npm start`.

### Endpoints

| url | verb | options | sample response |
| ----|------|---------|---------------- |
| `http://localhost:3001/api/v1/races` | GET | not needed | Array of all existing races: `[{ id: 101, name: "Human", race_symbol: "human-symbol-image.jpg", faction: "alliance", race_image: "human.jpg", description: "Recent discoveries have shown that humans are descended from...", history: "After centuries of peace, the increasingly independent...", starting_zone: "Elwynn Forest", home_city: "Stormwind City", leader: "Anduin Wrynn", mount: "Horse", classes: "[10, 11, 12]"}]` |
| `http://localhost:3001/api/v1/classes` | GET | not needed | Array of all existing classes: `[{ id: 18, name: "Death Knight", symbol: "icon-deathknight.png" }]` |
| `http://localhost:3001/api/v1/weapons` | GET | not needed | Array of all existing weapons: `[{ id: 907, name: "Blades of the Fallen Prince", type: "Doubled Swords", damage: 138, class: 18 }]` |
| `http://localhost:3001/api/v1/characters` | GET | not needed | Array of all existing characters: `[{ id: 1890, name: "Raderstan", race: 101, className: 18, weapon: 907 }]` |

<!-- | `http://localhost:3001/api/v1/reservations` | POST | `{name: <String>, date: <String>, time: <String>, number: <Number>}` | New reservation: `{ id: 18939837, name: 'Leta', date: '12/3', time: '6:30', number: 2 }` |
| `http://localhost:3001/api/v1/reservations/:id` | DELETE | not needed | Array of all remaining reservations: `[{ id: 18907224, name: 'Christie', date: '8/8', time: '7:00', number: 3 }]` | -->

Note: All of these endpoints will return semantic errors if something is wrong with the request.
