"use server";

import axios from "axios";

interface PalyerObject {
  response: Response;
}

interface Response {
  players: Player[];
}

interface Player {
  steamid: string;
  communityvisibilitystate: number;
  profilestate: number;
  personaname: string;
  profileurl: string;
  avatar: string;
  avatarmedium: string;
  avatarfull: string;
  avatarhash: string;
  lastlogoff: number;
  personastate: number;
  primaryclanid: string;
  timecreated: number;
  personastateflags: number;
}
export async function loginUser(previousState: unknown, formData: FormData) {
  const steamId = formData.get("steam-id") as string;
  if (!steamId) {
    return {
      error: "Steam ID is required",
    };
  }

  try {
    const response = await axios.get<PalyerObject>(
      `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2?key=${process.env.STEAM_KEY}&steamids=${steamId}`
    );

    return {
      message: "User fetched successfully",
      user: response.data.response.players[0],
    };
  } catch (error) {
    console.error(error);
    return {
      error: "An error occurred while fetching the user",
    };
  }
}
