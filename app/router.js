import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('home', { path: '/' });
  this.route('contact', {});
  this.route('contact', { path: '/about-us' });
  this.route('contact', { path: '/mission' });
  this.route('projects', {});
  this.route('projects', { path: '/residency' });
  this.route('past-projects', {});
  this.route('terms-and-conditions', {});
  this.route('donate');
  this.route('events', { path: '/whats-on' });
  this.route('exhibition');
  this.route('queer-trail');
  this.route('queer-trail', { path: '/tour' });
  this.route('404', { path: '/*path' });
});
