# Rebus

A daily word game for Reddit, built on [Devvit Web](https://developers.reddit.com/).

Two pictures, one English word. The rebus changes every day (a seeded pick from
a curated pool of 25 pictogram compounds) and every player gets the same one.
Pick the right compound to extend your streak.

## How to play

1. Look at the two pictures.
2. Pick the word that combines them from the four choices.

One rebus per day, the same for everyone; streaks stored per user in Redis.

## Stack

- React 19 + Tailwind 4 + Vite (client inside a Reddit post)
- Hono server on Devvit (`/api/init`, `/api/submit`), Redis persistence
- Deterministic daily pick (UTC seed), unit-tested

## Development

```bash
npm install
npm run dev
npm test
npm run type-check
npm run build
```

## Submission (Reddit's Game of the Day Hackathon)

- App listing: `developers.reddit.com/apps/gameday-rebus` (private until judging ends)
- Demo post: public test subreddit, post running the game
