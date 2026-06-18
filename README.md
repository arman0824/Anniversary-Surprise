# 365 Days of Us - Anniversary Website

A playful, interactive one-page React website made for a 1-year anniversary. It feels like a soft digital scrapbook mixed with a tiny game: animated landing gate, memory timeline, hidden love notes, draggable Polaroids, Easter eggs, and a gift-box finale with a love letter.

## Tech Stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React icons

## How To Run The Project

First, make sure you have Node.js installed.

Then open this project folder in VS Code:

```bash
anniversary-site
```

Install the dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Vite will show a local URL, usually:

```txt
http://localhost:5173/
```

Open that URL in your browser.

## Build For Production

To create a production-ready version:

```bash
npm run build
```

The final built files will be created inside:

```txt
dist/
```

## How To Edit The Website

Most of the website content is in:

```txt
src/main.jsx
```

The global styles are in:

```txt
src/styles.css
```

Tailwind theme colors and fonts are in:

```txt
tailwind.config.js
```

## Where To Customize Things

### Anniversary Date

In `src/main.jsx`, find:

```js
const anniversaryDate = "June 18";
```

Change it to your real anniversary date.

### Timeline Cards

Find:

```js
const timeline = [
  ...
];
```

Edit the dates, titles, and captions for your own memories.

### Love Notes

Find:

```js
const loveNotes = [
  ...
];
```

These are the hidden notes inside the pastel gift boxes/hearts.

### Scrapbook Photos

Find:

```js
const scrapbookPhotos = [
  ...
];
```

Right now, the project uses cute gradient placeholders. You can replace them with real photos by importing images or placing image files in the project and using normal image URLs.

Example:

```js
image: "/photos/first-date.jpg"
```

If you do this, create a folder like:

```txt
public/photos/
```

Then place your image inside it.

### Love Letter

Find:

```js
const letterParagraphs = [
  ...
];
```

Edit this text to write your own personal letter.

### Song Embed

Find the Spotify iframe inside `GiftFinale`:

```jsx
src="https://open.spotify.com/embed/track/..."
```

Replace it with your favorite Spotify embed link.

To get one:

1. Open Spotify.
2. Go to the song.
3. Click Share.
4. Choose Embed track.
5. Copy the embed URL into the iframe `src`.

## Main Features

- Locked heart landing screen
- Click-to-unlock animation
- Framer Motion heart confetti
- Animated 365-day timeline
- Clickable hidden love-note boxes
- Draggable Polaroid scrapbook carousel
- Floating animated gift box
- Scrollable handwritten-style love letter
- Hidden music surprise
- Secret heart rain when typing `love`
- Heart rain when hovering the anniversary date
- Playful "Do you love me?" section where the "No" button runs away

## Deploying Online

You can deploy this project using Vercel or Netlify.

### Vercel Settings

Use these settings:

```txt
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
```

After deploying, Vercel will give you a public website link you can share.

## Project Structure

```txt
anniversary-site/
  index.html
  package.json
  tailwind.config.js
  postcss.config.js
  src/
    main.jsx
    styles.css
```

## Notes

Do not run `src/main.jsx` directly. This is a Vite React project, so always run it with:

```bash
npm run dev
```

Have fun customizing it. Make it personal, silly, romantic, and very you.
