import { supabase } from "../supabase/supabase.js";

export class songmodel {
  async list() {
    try {
      const { data, error } = await supabase
        .from("songs")
        // artists name and albums title so it not just the id
        .select("*,artists (name),albums (title)");
      if (error) {
        throw error;
      }
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}