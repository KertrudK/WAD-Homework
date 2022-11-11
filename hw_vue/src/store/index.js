import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        posts: [{
                id: 1,
                author: {
                    "pfp": "https://images.pexels.com/photos/4427502/pexels-photo-4427502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    "firstname": "Lilibet",
                    "lastname": "Trull"
                },

                "date": "Oct 19, 2022",
                "time": "14:45",
                "post_text": "I'm a fighter, Not a quitter!",
                "post_image": "https://images.pexels.com/photos/4427610/pexels-photo-4427610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                
            },
            {
                "id": 2,
                "author": {
                    "pfp": "https://images.pexels.com/photos/4427502/pexels-photo-4427502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    "firstname": "Lilibet",
                    "lastname": "Trull"
                },

                "date": "Oct 20, 2022",
                "time": "10:45",
                "post_text": "It is my time to leave, was fun.",
                "post_image": "https://images.pexels.com/photos/3885529/pexels-photo-3885529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                
            },
            {
                "id": 3,
                "author": {
                    "pfp": "https://parade.com/.image/t_share/MTkwNTgwOTUyNjU2Mzg5MjQ1/albert-einstein-quotes-jpg.jpg",
                    "firstname": "Albert",
                    "lastname": "Einstein"
                },

                "date": "Oct 10, 2022",
                "time": "10:45",
                "post_text": "The only reason for time is so that everything doesn't happen at once.",
                
            },
            {
                "id": 4,
                "author": {
                    "pfp": "https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    "firstname": "Sandra",
                    "lastname": "Carr"
                },

                "date": "Sep 25, 2022",
                "time": "18:17",
                "post_text": "Working from home",
                "post_image": "https://images.pexels.com/photos/4680375/pexels-photo-4680375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                
            },
            {
                "id": 5,
                "author": {
                    "pfp": "https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    "firstname": "Michaël",
                    "lastname": "Schneider"
                },

                "date": "Oct 7, 2022",
                "time": "10:45",
                "post_text": "Best BAND EVERRRR!!!!!",
                "post_image": "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                
            },
            {
                "id": 6,
                "author": {
                    "pfp": "https://images.pexels.com/photos/6389355/pexels-photo-6389355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    "firstname": "Stefani",
                    "lastname": "Landers"
                },

                "date": "Oct 13, 2022",
                "time": "7:02",
                "post_text": "He is so cute while sleeping #LoveMyCat ",
                "post_image": "https://images.pexels.com/photos/799462/pexels-photo-799462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                
            },
            {
                "id": 7,
                "author": {
                    "pfp": "https://images.pexels.com/photos/4918149/pexels-photo-4918149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    "firstname": "Henry",
                    "lastname": "Clarkson"
                },

                "date": "Oct 1, 2022",
                "time": "7:34",
                "post_text": "Hello October, time to go to do some work",
                "post_image": "https://images.pexels.com/photos/13865604/pexels-photo-13865604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            },
            {
                "id": 8,
                "author": {
                    "pfp": "https://images.pexels.com/photos/3785424/pexels-photo-3785424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    "firstname": "Maggie",
                    "lastname": "Kuhn"
                },

                "date": "Oct 5, 2022",
                "time": "16:29",
                "post_text": "Speak your mind, even if your voice shakes",
                
            },
            {
                "id": 9,
                "author": {
                    "pfp": "https://cpb-us-w2.wpmucdn.com/voices.uchicago.edu/dist/f/1961/files/2020/12/Margaret_Mead_1977_%C2%A9Lynn_Gilbert-398x600.jpg",
                    "firstname": "Margaret",
                    "lastname": "Mead"
                },

                "date": "Sep 27, 2022",
                "time": "17:27",
                "post_text": "Always remember that you are absolutely unique. Just like everyone else."
                
            },
            {
                "id": 10,
                "author": {
                    "pfp": "https://images.pexels.com/photos/128881/beautiful-girl-smiling-da-128881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    "firstname": "Laura",
                    "lastname": "Smith"
                },

                "date": "Sep 2, 2022",
                "time": "18:21",
                "post_text": "Lovely night in italy ",
                "post_image": "https://images.pexels.com/photos/6498686/pexels-photo-6498686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                
            }
        ]
    }
});