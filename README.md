# Web SDK Electron Boilerplate

This is a boilerplate for Tomo Web SDK, extended from [Electron-React-Boilerplate](https://github.com/electron-react-boilerplate/electron-react-boilerplate.git)


<img src=".erb/img/erb-banner.svg" width="100%" />

<br>

<p>
  Electron React Boilerplate uses <a href="https://electron.atom.io/">Electron</a>, <a href="https://facebook.github.io/react/">React</a>, <a href="https://github.com/reactjs/react-router">React Router</a>, <a href="https://webpack.js.org/">Webpack</a> and <a href="https://www.npmjs.com/package/react-refresh">React Fast Refresh</a>.
</p>

<br>


## Install

Clone the this repo and install dependencies

## Starting Development

Start the app in the `dev` environment:

```bash
npm start
```

## Packaging for Production

To package apps for the local platform:

```bash
npm run package
```

## Enable Window Open
```typescript
/** src/main/main.ts */

// ❌ this will break web-sdk's ability to open popup window
// mainWindow.webContents.setWindowOpenHandler((edata) => {
//   shell.openExternal(edata.url);
//   return { action: 'deny' };
// });

// ✅
mainWindow.webContents.setWindowOpenHandler((data) => {
  // Or allow opening in a new window with custom options
  return { 
    action: 'allow',
  }
})
```

## Screenshots

### Open Connect
![Open Connect](https://private-user-images.githubusercontent.com/5846753/434223226-413e4c7b-0750-4411-9d40-85ccdafe0cf6.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQ3OTE1NDcsIm5iZiI6MTc0NDc5MTI0NywicGF0aCI6Ii81ODQ2NzUzLzQzNDIyMzIyNi00MTNlNGM3Yi0wNzUwLTQ0MTEtOWQ0MC04NWNjZGFmZTBjZjYuZ2lmP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI1MDQxNiUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTA0MTZUMDgxNDA3WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9YzVkYmE4NWFkNjBkM2Y4MDg5YzgzNTY3M2ZmMmQ0ZTZmYjRkMmFmYzY3ZTUzMmUzYmQxNzdiZGQzZWY5N2U3YyZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.dfNSlCCPzk3pMQvmSU4ANilN-CqxPA5J23KX37ZyMWU)

### Login Succeed
![Login TG](https://private-user-images.githubusercontent.com/5846753/434223225-1d1361e5-7d31-464d-8d57-e07b24fae677.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQ3OTE1NDcsIm5iZiI6MTc0NDc5MTI0NywicGF0aCI6Ii81ODQ2NzUzLzQzNDIyMzIyNS0xZDEzNjFlNS03ZDMxLTQ2NGQtOGQ1Ny1lMDdiMjRmYWU2NzcuZ2lmP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI1MDQxNiUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTA0MTZUMDgxNDA3WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9OWM3YmU0YWQ0MTU0Yjk4NTE2ZTA3ZDM2OGQyYTUxYzRiM2RhYWM5NWUzYzRjYzA1MDZkNGMwOTQ5ZWIzOTNjZiZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.sVcpU65bRnyYsXDF26-cHUGWy6OyW5MMZgqkhgwzVu8)

### Sign Transaction
![Sign Transaction](https://private-user-images.githubusercontent.com/5846753/434223227-894e3c7f-0e1d-4396-95f2-32fff640fa92.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQ3OTE1NDcsIm5iZiI6MTc0NDc5MTI0NywicGF0aCI6Ii81ODQ2NzUzLzQzNDIyMzIyNy04OTRlM2M3Zi0wZTFkLTQzOTYtOTVmMi0zMmZmZjY0MGZhOTIuZ2lmP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI1MDQxNiUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTA0MTZUMDgxNDA3WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9N2NlMTY5NGRhOWE0MTBmMmM5NDZiNDNkNDUxM2QzYmVlZThiMjQ1YjdhOTY4MWQ3YThmYTdjYWZiZGVlN2RmNSZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.pOduKHucmu7OSdOWG8k_hYtFrreHntoCtfCZfmVp-8o)