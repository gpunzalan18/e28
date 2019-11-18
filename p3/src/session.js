export let blogDetails = {};
export function setBlogDetails(data) {
    blogDetails = data;
}
export function getBlogDetails() {
    return blogDetails
}

export function getBlogDetailsById(index) {
    return blogDetails[index - 1]
}