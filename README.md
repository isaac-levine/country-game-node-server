# Country Game API

The backend REST API for [Country Game](https://github.com/isaac-levine/country-game). Handles user authentication, game data, and social features.

## Tech Stack

- **Runtime:** Node.js, Express
- **Database:** MongoDB with Mongoose
- **Auth:** Express sessions

## API Routes

| Route              | Description                     |
|--------------------|---------------------------------|
| `/api/users`       | User registration and profiles  |
| `/api/game_data`   | Country game data and stats     |
| `/api/follows`     | Follow/unfollow relationships   |
| `/api/likes`       | Like/unlike game results        |
| `/api/country_metadata` | Country reference data     |

## Getting Started

```bash
npm install
cp .env.example .env  # Add MongoDB connection string
npm start
```

## License

MIT
