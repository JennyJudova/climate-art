import Route from '@ember/routing/route';

export default class BlogRoute extends Route {

  async model() {

    let response = await fetch('/api/blogs.json');
    let blogs = response.json();

    // return blogs.map((model) => {
    //   let { id, title, summary, article } = model;
    //   // return { id, title, summary, article };
    // });
    console.log('b', blogs)
    return blogs
  }
}
