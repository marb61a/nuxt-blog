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
      },
      setToken(state, token) {
        state.token = token
      },
      clearToken(state) {
        state.token = null;
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
        let authUrl =
          "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=" 
          + process.env.fbAPIKey;

        if(!authData.login) {
          authUrl = 
            "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=" 
            + process.env.fbAPIKey;
        }

        return this.$axios
          .$post(authUrl, {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
          })
          .then(result => {
            vuexContext.commit("setToken", result.idToken);

            localStorage.setItem("token", result.idToken);
            localStorage.setItem(
              "tokenExpiration",
              new Date().getTime() + Number.parseInt(result.expiresIn) * 1000
            );

            Cookie.set("jwt", result.idToken);
            Cookie.set(
              "expirationDate",
              new Date().getTime() + Number.parseInt(result.expiresIn) * 1000
            );

            return this.$axios.$post(
              'http://localhost:3000/api/track-data',
              { data: 'Authenticated!' }
            );
          })
          .catch(e => console.log(e));
      },
      initAuth(vuexContext, req){
        let token;
        let expirationDate;

        if(req) {
          if(!req.headers.cookie) {
            return;
          }

          const jwtCookie = req.headers.cookie
            .split(";")
            .find(c => c.trim().startsWith("jwt="));
          
          if(!jwt) {
            return;
          }
          
        }
      },
      logout(vueContext) {
        vuexContext.commit("clearToken");

        Cookie.remove("jwt");
        Cookie.remove("expirationDate");

        if(process.client) {
          localStorage.removeItem("token");
          localStorage.removeItem("tokenExpiration");
        }
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      },
      isAuthenticated(state) {
        return state.token != null;
      }
    }
  });
};

export default createStore;
