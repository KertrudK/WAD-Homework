"use strict";

// window.onload = function () {
//     fetch("https://api.jsonbin.io/v3/b/635269ba2b3499323be5f258")
//         .then((response) => response.json())
//         .then((json) => {
//             const postsContainer = document.querySelector(".middleBlock");

//             for (const post of json["record"]) {
//                 const postBox = document.createElement("article");

//                 const headerBox = document.createElement("div");
//                 headerBox.className = "postHeader";

//                 const authorBox = document.createElement("div");
//                 authorBox.className = "author";

//                 const authorIcon = document.createElement("a");
//                 authorIcon.className = "userIcon";

//                 const authorName = document.createElement("span");
//                 authorName.textContent =
//                     post["author"]["firstname"] +
//                     " " +
//                     post["author"]["lastname"];

//                 const date = document.createElement("div");
//                 date.textContent = post["create_time"]["date"];

//                 authorBox.appendChild(authorIcon);
//                 authorBox.appendChild(authorName);
//                 headerBox.appendChild(authorBox);
//                 headerBox.appendChild(date);
//                 postBox.appendChild(headerBox);

//                 if (typeof post["content"]["post_image"] != "undefined") {
//                     const postImage = document.createElement("img");
//                     postImage.className = "media";
//                     postImage.src = post["content"]["post_image"];
//                     postBox.appendChild(postImage);
//                 }

//                 const postText = document.createElement("div");
//                 postText.className = "text";
//                 postText.textContent = post["content"]["post_text"];

//                 const likeBtn = document.createElement("button");
//                 likeBtn.type = "button";
//                 likeBtn.className = "likeBtn";

//                 postBox.appendChild(postText);
//                 postBox.appendChild(likeBtn);
//                 postsContainer.appendChild(postBox);
//             }
//             postsContainer.removeChild(document.querySelector(".loading"));
//         })
//         .catch((err) => {
//             const postsContainer = document.querySelector(".middleBlock");
//             const errorMsg = document.createElement("div");
//             errorMsg.className = "error";
//             errorMsg.textContent = "Something went wrong while loading content";
//             postsContainer.appendChild(errorMsg);
//             console.log(err);
//         });
// };

window.onload = function () {
    fetch("/json/posts.json")
        .then((response) => response.json())
        .then((json) => {
            const postsContainer = document.querySelector(".middleBlock");

            for (const post of json) {
                const postBox = document.createElement("article");

                const headerBox = document.createElement("div");
                headerBox.className = "postHeader";

                const authorBox = document.createElement("div");
                authorBox.className = "author";

                const authorIcon = document.createElement("a");
                authorIcon.className = "userIcon";

                const authorName = document.createElement("span");
                authorName.textContent =
                    post["author"]["firstname"] +
                    " " +
                    post["author"]["lastname"];

                const date = document.createElement("div");
                date.textContent = post["create_time"]["date"];

                authorBox.appendChild(authorIcon);
                authorBox.appendChild(authorName);
                headerBox.appendChild(authorBox);
                headerBox.appendChild(date);
                postBox.appendChild(headerBox);

                if (typeof post["content"]["post_image"] != "undefined") {
                    const postImage = document.createElement("img");
                    postImage.className = "media";
                    postImage.src = post["content"]["post_image"];
                    postBox.appendChild(postImage);
                }

                const postText = document.createElement("div");
                postText.className = "text";
                postText.textContent = post["content"]["post_text"];

                const likeBtn = document.createElement("button");
                likeBtn.type = "button";
                likeBtn.className = "likeBtn";

                postBox.appendChild(postText);
                postBox.appendChild(likeBtn);
                postsContainer.appendChild(postBox);
            }
        })
        .catch((err) => {
            const postsContainer = document.querySelector(".middleBlock");
            const errorMsg = document.createElement("div");
            errorMsg.className = "error";
            errorMsg.textContent = "Something went wrong while loading content";
            postsContainer.appendChild(errorMsg);
            console.log(err);
        }).finally(() => {
            const postsContainer = document.querySelector(".middleBlock");
            postsContainer.removeChild(document.querySelector(".loading"));
        });
};
