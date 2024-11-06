import { supabase } from "../supabase/supabase.js";
import { buildArtistsPage } from "./buildArtistsPage/buildArtistsPage.js";

export async function getArtistsPage() {
  try {
    // console.log(id);

    const { data: artist, error } = await supabase
      .from("artists")
      .select(`*,albums_id (title,image,description,songs_id)`);

    if (error) {
      throw error;
    }
    console.log(artist);
    buildArtistsPage(artist);
  } catch (error) {
    console.error(error);
  }
}
