import Route from '@ember/routing/route';

export default class BlogRoute extends Route {

  async model() {
    let response = await fetch('/api/blogs.json');
    let blogPosts = await response.json();

    return blogPosts
  }
}
