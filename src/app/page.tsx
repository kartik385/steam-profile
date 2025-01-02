interface PlayedGameResponse {
  response: Response;
}

interface Response {
  total_count: number;
  games: Game[];
}

interface Game {
  appid: number;
  name: string;
  playtime_2weeks: number;
  playtime_forever: number;
  img_icon_url: string;
  playtime_windows_forever: number;
  playtime_mac_forever: number;
  playtime_linux_forever: number;
  playtime_deck_forever: number;
}
export default async function Home() {
  const recetlyPlayedGames = await fetch(
    `https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v1?key=${process.env.STEAM_KEY}&steamid=${process.env.DEFAULT_USER}&format=json`
  );
  const recetlyPlayedGamesJson: PlayedGameResponse =
    await recetlyPlayedGames.json();
  return (
    <div>
      <h1>Recently Played Games</h1>
      <ul>
        {recetlyPlayedGamesJson.response.games.map((game) => (
          <li key={game.appid}>
            <img
              src={`https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/${game.appid}/${game.img_icon_url}.jpg`}
              alt={game.name}
            />
            <h2>{game.name}</h2>
            <p>Playtime: {game.playtime_2weeks} minutes</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
