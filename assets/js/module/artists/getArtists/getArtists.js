import { supabase } from "../../supabase/supabase.js";
import { buildArtistsView } from "../buildArtists/buildArtistsView.js";

export async function getArtists(id) {
  try {
    // console.log(id);

    const { data: artist, error } = await supabase
      .from("artists")
      .select(`*,albums_id (title,image,description,songs_id)`)
      .eq("id", id);

    if (error) {
      throw error;
    }
    // console.log(artist);

    buildArtistsView(artist);
  } catch (error) {
    console.error(error);
  }
}
