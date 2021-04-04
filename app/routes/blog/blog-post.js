import Route from '@ember/routing/route';

export default class BlogBlogPostRoute extends Route {

  async model(params) {
    let blogPosts = this.modelFor('blog')

    return blogPosts.find(post => post.slug === params.slug)
  }
}
