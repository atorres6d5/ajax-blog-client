const localhostURL = 'http://localhost:3000/posts'
const herokuURL = 'https://ajax-blog-api.herokuapp.com/posts'
const baseURL = window.location.href.includes('localhost') ? localhostURL : herokuURL

homeView.init()

window.onhashchange = () => homeView.init()

document.querySelector('#create-post').addEventListener('click', event => {
  newPostView.init()
})
