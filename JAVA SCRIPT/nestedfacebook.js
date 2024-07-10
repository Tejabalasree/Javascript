const post = {
    postId:216,
    postImage:"sample.jpg",
    postTitle:"i am sad",
    comments:
    [{
        cid:111,
        Comment:"super",
        userInfo:{
            userId:1001,
            username:"nobita"
        }
    },
{ cid:232,
    Comment:"nice",
    userInfo:{
        userId:1002,
        username:"doremon"
    }}
],
}
//likes
console.log("no.of likes:"+post.likes);
//comments
console.log("no.of comments:"+post.comments[0]);
//shares
console.log("no.of shares:"+post.shares);