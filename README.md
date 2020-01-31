# World of Warcraft API

This app is the back-end server for the Mod 4 FE first solo project.

## Getting started

### Installation

1. Clone down this repository.
    - `git clone https://github.com/RayRedGoose/WoW-api.git`
2. Change into the new directory.
    - `cd WoW-api`
3. Install the dependencies.
    - `npm install`

The server will run on `http://localhost:3001`. All endpoints are prefixed with `/api/v1`.

### Data Model

A race stored on the server has an `id`, `name`, `faction`, `race_image`, `race_symbol`, `description`, `history`, `starting_zone`, `home_city`, `leader`, `mount`, `created_at` and `updated_at`. Here is a sample race object:

```js
{
  id: 7,
  name: "Human",
  faction: "alliance",
  race_symbol: "https://vignette.wikia.nocookie.net/wowwiki/images/2/29/Human_Crest.jpg/revision/latest?cb=20050804060401",
  race_image: "https://wow.zamimg.com/uploads/screenshots/normal/427531-human.jpg",
  description: "Recent discoveries have shown that humans are descended from the barbaric vrykul, half-giant warriors who live in Northrend. Early humans were primarily a scattered and tribal people for several millennia, until the rising strength of the troll empire forced their strategic unification. Thus the nation of Arathor was formed, along with its capital, the city-state of Strom.",
  history: "After centuries of peace, the increasingly independent city-states of Arathor split into kingdoms: Gilneas to the west, Alterac, Dalaran, and Lordaeron to the northwest, Kul Tiras to the southwest, and Stormwind to the far south. Strom itself was renamed Stromgarde and remained a powerful kingdom. But disaster struck when the orcish Horde appeared on Azeroth and reduced Stormwind to ruins. The city’s survivors, including the young prince, Varian Wrynn, fled to Lordaeron, where the leaders of the seven kingdoms resolved to unify once again in the Alliance of Lordaeron. Together, they succeeded in defeating the Horde. But peace for the Alliance would only prove to be temporary. As upkeep costs rose, Gilneas and Stromgarde withdrew their kingdoms from the Alliance. Then came a plague that killed thousands of humans and converted them into undead servants of the Lich King. Lordaeron’s prince, Arthas Menethil, was manipulated by the Lich King, leading Arthas to kill his own father and journey to Northrend, where he merged with his master and became the next Lich King. For the next five years, Arthas remained in Northrend, plotting and building up his armies. But before Arthas could unleash his gathered power, humans and other other races banded together, securing a costly victory. Members of the Horde and the Alliance launched separate campaigns in Northrend, and their efforts resulted in the Lich King’s defeat. The kingdom of Stormwind has become the strongest bastion of humanity and the most powerful force in the now multi-racial Alliance. Now, the people of Stormwind hold fast to the principles of honor and justice as they defend their settlements and their allies.",
  starting_zone: "Elwynn Forest",
  home_city: "Stormwind City",
  leader: "Anduin Wrynn",
  mount: "Horse",
  created_at: "2020-01-31T16:43:34.562Z",
  updated_at: "2020-01-31T16:43:34.562Z"
}
```

A class stored on the server has an `id`, `name`, `symbol`, `created_at` and `updated_at`. Here is a sample class object:

```js
{
  id: 7,
  name: "Mage",
  symbol: "https://wow.zamimg.com/images/classes/symbols/icon-mage.png",
  created_at: "2020-01-31T16:43:34.530Z",
  updated_at: "2020-01-31T16:43:34.530Z"
}
```

A weapon stored on the server has an `id`, `name`, `type`, `damage`, `class_id`, `created_at` and `updated_at`. Here is a sample weapon object:

```js
{
  id: 7,
  name: "G'Hanir, the Mother Tree",
  type: "Staff",
  damage: 58,
  class_id: 3,
  created_at: "2020-01-31T16:43:34.861Z",
  updated_at: "2020-01-31T16:43:34.861Z"
}
```

A character stored on the server has an `id`, `name`, `race_id`, `class_id`, `weapon_id`, `created_at` and `updated_at`. Here is a sample character object:

```js
{
  id: 1,
  name: "Raderstan",
  race_id: 7,
  class_id: 8,
  weapon_id: 26,
  created_at: "2020-01-31T16:43:34.900Z",
  updated_at: "2020-01-31T16:43:34.900Z"
}
```

### Usage

1. To fire up the server, run `npm start`.

### Endpoints

**GET requests**

| url | verb | options | sample response |
| ----|------|---------|---------------- |
| `/api/v1/races` | GET | not needed | Array of all existing races: `[{ id: 101, name: "Human", race_symbol: "human-symbol-image.jpg", faction: "alliance", race_image: "human.jpg", description: "Recent discoveries have shown that humans are descended from...", history: "After centuries of peace, the increasingly independent...", starting_zone: "Elwynn Forest", home_city: "Stormwind City", leader: "Anduin Wrynn", mount: "Horse", classes: "[10, 11, 18]"}]` |
| `/api/v1/races/:id` | GET | not needed | Single race object with matching id: `{ id: 101, name: "Human", race_symbol: "human-symbol-image.jpg", faction: "alliance", race_image: "human.jpg", description: "Recent discoveries have shown that humans are descended from...", history: "After centuries of peace, the increasingly independent...", starting_zone: "Elwynn Forest", home_city: "Stormwind City", leader: "Anduin Wrynn", mount: "Horse", classes: "[10, 11, 12]"}` |
| `/api/v1/races/:id/classes` | GET | not needed | Array of all allowed classes for chosen race: `[{ id: 18, name: "Death Knight", symbol: "icon-deathknight.png" }]` |
| `/api/v1/faction/:name` | GET | not needed | Array of all races for chosen faction: `[{ id: 101, name: "Human", race_symbol: "human-symbol-image.jpg", faction: "alliance", race_image: "human.jpg", description: "Recent discoveries have shown that humans are descended from...", history: "After centuries of peace, the increasingly independent...", starting_zone: "Elwynn Forest", home_city: "Stormwind City", leader: "Anduin Wrynn", mount: "Horse", classes: "[10, 11, 18]"}]` |
| `/api/v1/classes` | GET | not needed | Array of all existing classes: `[{ id: 18, name: "Death Knight", symbol: "icon-deathknight.png" }]` |
| `/api/v1/classes/:id` | GET | not needed | Single class object with matching id: `{ id: 18, name: "Death Knight", symbol: "icon-deathknight.png" }` |
| `/api/v1/weapons` | GET | not needed | Array of all existing weapons: `[{ id: 907, name: "Blades of the Fallen Prince", type: "Doubled Swords", damage: 138, class: 18 }]` |
| `/api/v1/weapons/:id` | GET | not needed | Single weapon object with matching id: `{ id: 907, name: "Blades of the Fallen Prince", type: "Doubled Swords", damage: 138, class: 18 }` |
| `/api/v1/characters` | GET | not needed | Array of all existing characters: `[{ id: 1890, name: "Raderstan", race: 101, className: 18, weapon: 907 }]` |
| `/api/v1/characters/:id` | GET | not needed | Single character object with matching id: `{ id: 1890, name: "Raderstan", race: 101, className: 18, weapon: 907 }` |



**POST requests**

| url | verb | options | sample response |
| ----|------|---------|---------------- |
| `/api/v1/races` | POST | `{name: <String>, faction: <String>, race_symbol: <String>, race_image: <String>, description: <String>, history: <String>, starting_zone: <String>, home_city: <String>, leader: <String>, mount: <String>, classes: <String> }` | New race: `{ id: 122, name: "Vulpera", race_symbol: "vulpera-symbol-image.jpg", faction: "horde", race_image: "vulpera.jpg", description: "Clever and resourceful, the vulpera have survived amidst the harsh desert of Vol'dun for...", history: "The vulpera have lived in Vol'dun as free traders and merchants for countless generations. For much of that time,...", starting_zone: "Vol'dun", home_city: "Vulpera Hideaway", leader: "Kiro", mount: "Caravan Hyena", classes: "[12, 16]"}` |
| `/api/v1/characters` | POST | `{name: <String>, race_id: <Number>, class_id: <Number>, weapon_id: <Number>}` | New character: `{ id: 1895, name: "Grom", race: 122, className: 18, weapon: 907 }` |

**DELETE requests**

| url | verb | options | sample response |
| ----|------|---------|---------------- |
| `/api/v1/races/:id` | DELETE | not needed | Array of all remaining races: `[{ id: 122, name: "Vulpera", race_symbol: "vulpera-symbol-image.jpg", faction: "horde", race_image: "vulpera.jpg", description: "Clever and resourceful, the vulpera have survived amidst the harsh desert of Vol'dun for...", history: "The vulpera have lived in Vol'dun as free traders and merchants for countless generations. For much of that time,...", starting_zone: "Vol'dun", home_city: "Vulpera Hideaway", leader: "Kiro", mount: "Caravan Hyena", classes: "[12, 16]"}]` |
| `/api/v1/characters/:id` | DELETE | not needed | Array of all remaining characters: `[{ id: 1890, name: "Raderstan", race: 101, className: 18, weapon: 907 }]` |

Note: All of these endpoints will return semantic errors if something is wrong with the request.

### Status Codes & Error Handling

- `200`: GET request success
- `201`: POST request success
- `202`: DELETE request success

- `404`: Not Found
- `422`: Unprocessable Entity

- `500`: Internal Server Error
