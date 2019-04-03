
// create blog post objects with these properties:
// title
// body
// author
// views
// comments
//    (author, body)
// isLive

let post = {
    title : 'name of book',
    body : 'b',
    author : 'name of writer',
    views: 10,
    comments: [
        {author: 'writer1', body : 'b'},
        {author: 'writer2', body : 'd'},
    ],
    isLive: true
};

console.log(post);