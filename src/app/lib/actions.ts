"use server";

import axios from "axios";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

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
  const cookieStore = await cookies();
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

    if (!response.data.response.players.length) {
      return {
        error: "User not found",
      };
    } else {
      cookieStore.set("steamId", response.data.response.players[0].steamid);
    }
  } catch (error) {
    console.error(error);
    return {
      error: "An error occurred while fetching the user",
    };
  }

  redirect("/Dashboard");
}

export async function logoutUser() {
  const cookieStore = await cookies();
  cookieStore.delete("steamId");
  redirect("/");
}
