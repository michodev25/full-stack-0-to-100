import axios from 'axios';
import { Note } from '../model/database.js';

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export const getPostsExt = async  (ya)  => {
  if(ya) return;
  try {
    const response = await axios.get(API_URL);
      await Note.insertMany(response.data.map(nota => ({
      title: nota.title,
      body: nota.body,
    })));
    return console.log("✅ Posts fetched and saved to DB");
    
  } catch (error) {
    console.error("❌ Error fetching posts:", error.message);
    throw error;
  }

}


