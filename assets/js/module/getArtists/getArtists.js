import { supabase } from "../../module/supabase/supabase.js";

export async function getArtists(id) {
  try {
    console.log(id);

    const { data: artist, error } = await supabase
      .from("artists")
      .select(`*`)
      .eq("id", id);

    if (error) {
      throw error;
    }

    console.log(artist);
    return artist;
  } catch (error) {
    console.error(error);
  }
}
