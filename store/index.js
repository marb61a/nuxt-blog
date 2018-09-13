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
      }
    },
    getters: {

    }
  });
};

export default createStore;
