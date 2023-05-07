let blog = [
    { postName: "Post1", postId: 1 },
    { postName: "Post2", postId: 2 },
    { postName: "Post3", postId: 3 }
]

const listPosts = () => blog.map((post) => console.log(post.postName));

const addPost = (newpost) => {
    return new Promise((resolve, reject) => {
        blog.push(newpost)
        resolve("Post Eklendi");
        reject("Post Eklenemedi!")
    })
}

async function blogControl(post) {
    try {
        await addPost(post);
        listPosts();
    }
    catch (err) {
        console.log(err);
    }
}

blogControl({ postName: "NewPost", postId: 100 });