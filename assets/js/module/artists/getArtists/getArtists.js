import { supabase } from "../../supabase/supabase.js";
import { buildArtistsView } from "../buildArtists/buildArtistsView.js";

// gets all artists from the database with the albums and songs
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
