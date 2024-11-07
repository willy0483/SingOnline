import { supabase } from "../../module/supabase/supabase.js";
import { buildSongsView } from "../songs/songsView/buildSongsView.js";

// gets all songs from the database with the artist and album name
export async function getSongs() {
  try {
    const { data: songs, error } = await supabase
      .from("songs")
      .select(`*,artist_id (name,id),albums_id (title)`);
    if (error) {
      throw error;
    }
    // console.log(songs);
    buildSongsView(songs);
  } catch (error) {
    console.error(error);
  }
}
