// Imagine we are building a blogging engine
// the user is drafting a post
// but the have nor published it yet
// what do you think that constructor function should look like?

// let post = {
//     title : 'name of book',
//     body : 'b',
//     author : 'name of writer',
//     views: 10,
//     comments: [
//         {author: 'writer1', body : 'b'},
//         {author: 'writer2', body : 'd'},
//     ],
//     isLive: true
// };

let post = new Post('name of book', 'b', 'name of writer');

console.log(post);

function Post(title, body, author){
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}