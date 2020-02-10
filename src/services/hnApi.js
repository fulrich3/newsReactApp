import axios from 'axios';


import { selectFields } from '../selectors/selectFields'; 
// API base URL
export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
// News stories URL
export const newsStoriesUrl = `${baseUrl}newstories.json`;
// Single story URL
export const storyUrl = `${baseUrl}item/`;

export const getStory = async (storyId) => {
    // Envoi requête du type https://hacker-news.firebaseio.com/v0/item/{id}
    const result = await axios.get( `${storyUrl + storyId}.json`)
    .then( ({data}) => data && selectFields(data) );

    return result;
}

export const getStoryIds = async () => {
    // Request news stories with axios
    const result = await axios
    // Set data we want URI from
    .get(newsStoriesUrl)
    // Retourne la valeur de l'attribut data de l'objet retourné
    .then( ({data}) => data);

    // Return data!
    return result;
}