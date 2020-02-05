import axios from 'axios';

// API base URL
export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
// News stories URL
export const newsStoriesUrl = `${baseUrl}newstories.json`;
// 
export const storyUrl = `${baseUrl}item/`;

export const getStoryIds = async () => {
    // Request news stories with axios
    const result = await axios
    // Set data we want URI from
    .get(newsStoriesUrl)
    // Return data when you get it
    .then( ({data}) => data);

    // Return data!
    return result;
}