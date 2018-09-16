import Vuex from 'vue';
import Cookie from "js-cookie";

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      token: null
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      },
      addPost(state, post) {
        state.loadedPosts.push(post);
      },
      editPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(
          post => post.id === editedPost.id
        );
        state.loadedPosts[postIndex] = editedPost
      }
    },
    actions: {
      nuxtServerInit(vueContext, context) {
        return context.app.$axios
          .get("/posts.json")
          .then(data => {
            const postsArray = [];
            for(const key in data){
              postsArray.push({
                ...data[key],
                id: key
              })
            }

            vuexContext.commit("setPosts", postsArray);
          })
          .catch(e => context.error(e));
      },
      addPost(vueContext, post) {
        const createdPost = {
          ...post,
          updatedDate: new Date()
        };

        return this.$axios
          .post()
          .then()
          .catch(e => console.log(e));
      },
      editPost(vuexContext, editedPost) {
        return this.$axios
          .post()
          .then()
          .catch(e => console.log(e));
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      },
      authenticateUser(vuexContext, authData){
        let authUrl;

        if(!authData.login) {

        }

        return this.$axios
          .$post(authUrl, {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
          })
          .then(result => {

          })
          .catch(e => console.log(e));
      },
      initAuth(vuexContext, req){
        let token;
        let expirationDate;

        if(req) {

        }
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      }
    }
  });
};

export default createStore;
