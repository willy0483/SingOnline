import { supabase } from "../../supabase/supabase.js";
import { getArtists } from "../../artists/getArtists/getArtists.js";

// gets item from a input and use it to search
export async function searchItem(item) {
  console.log(item);

  const { data, error } = await supabase
    .from("songs")
    .select()
    .textSearch("title", `'${item}'`, {
      type: "websearch",
      cinfig: "english",
    });

  console.log(data);
  getArtists(data[0].artist_id);
}
