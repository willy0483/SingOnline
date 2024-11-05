import { supabase } from "../../module/supabase/supabase.js";
import { buildSongsView } from "../songs/songsView/buildSongsView.js";

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
