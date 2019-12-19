export { default as LocalStorageHandler } from './LocalStore';

export const axios = require('axios');

export const configURL = {
    // BLOG_DETAILS_API: 'http://my-json-server.typicode.com/gpunzalan18/e28-p3-blogposts/blogDetails',
    //BLOG_DETAILS_API: 'https://e28-blog.firebaseio.com/blogposts.json',
    BLOG_DETAILS_API: process.env.VUE_APP_API_URL

}

