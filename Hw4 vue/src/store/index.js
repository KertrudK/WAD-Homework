import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            posts: [
                {
                    id: 0,
                    date: "Oct 19, 2022",
                    post_text: "I'm a fighter, Not a quitter!",
                    avatar: "https://images.pexels.com/photos/4427502/pexels-photo-4427502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    likes: 226,
                    post_image:
                        "https://images.pexels.com/photos/4427610/pexels-photo-4427610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                },

                {
                    id: 1,
                    date: "Oct 20, 2022",
                    post_text: "It is my time to leave, was fun.",
                    avatar: "https://images.pexels.com/photos/4427502/pexels-photo-4427502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    likes: 49,
                    post_image:
                        "https://images.pexels.com/photos/3885529/pexels-photo-3885529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                },

                {
                    id: 2,
                    date: "Oct 10, 2022",
                    post_text:
                        "The only reason for time is so that everything doesn't happen at once.",
                    avatar: "https://parade.com/.image/t_share/MTkwNTgwOTUyNjU2Mzg5MjQ1/albert-einstein-quotes-jpg.jpg",
                    likes: 47,
                },

                {
                    id: 3,
                    date: "Sep 25, 2022",
                    post_text: "Working from home",
                    avatar: "https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    likes: 39,
                    post_image:
                        "https://images.pexels.com/photos/4680375/pexels-photo-4680375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                },

                {
                    id: 4,
                    date: "Oct 7, 2022",
                    post_text: "Best BAND EVERRRR!!!!!",
                    avatar: "https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    likes: 85,
                    post_image:
                        "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                },

                {
                    id: 5,
                    date: "Oct 13, 2022",
                    post_text: "He is so cute while sleeping #LoveMyCat ",
                    avatar: "https://images.pexels.com/photos/6389355/pexels-photo-6389355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    likes: 151,
                    post_image:
                        "https://images.pexels.com/photos/799462/pexels-photo-799462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                },

                {
                    id: 6,
                    date: "Oct 1, 2022",
                    post_text: "Hello October, time to go to do some work",
                    avatar: "https://images.pexels.com/photos/4918149/pexels-photo-4918149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    likes: 967,
                    post_image:
                        "https://images.pexels.com/photos/13865604/pexels-photo-13865604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                },

                {
                    id: 7,
                    date: "Oct 5, 2022",
                    post_text: "Speak your mind, even if your voice shakes",
                    avatar: "https://images.pexels.com/photos/3785424/pexels-photo-3785424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    likes: 42,
                },

                {
                    id: 8,
                    date: "Sep 27, 2022",
                    post_text:
                        "Always remember that you are absolutely unique. Just like everyone else.",
                    avatar: "https://cpb-us-w2.wpmucdn.com/voices.uchicago.edu/dist/f/1961/files/2020/12/Margaret_Mead_1977_%C2%A9Lynn_Gilbert-398x600.jpg",
                    likes: 723,
                },

                {
                    id: 9,
                    date: "Sep 2, 2022",
                    post_text: "Enjoying my night in italy ",
                    avatar: "https://images.pexels.com/photos/3785424/pexels-photo-3785424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    likes: 12,
                    post_image:
                        "https://images.pexels.com/photos/6498686/pexels-photo-6498686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                },
            ],
        };
    },
    mutations: {
        increaseLike(state, id) {
            state.posts[id].likes++;
        },
        resetLikes(state) {
          for (const post of state.posts) {
            post.likes = 0;
          }
        }
    },
});

export default store;
