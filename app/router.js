import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('home', { path: '/' });
  this.route('mission', {});
  this.route('contact', {});
  this.route('projects', {});
  this.route('past-projects', {});
  this.route('terms-and-conditions', {});
  this.route('donate', {});
  this.route('blog', {}, function() {
    this.route('blog-post', {
      path: ':slug'
    });
  });
  this.route('404', { path: '/*path' });
});
