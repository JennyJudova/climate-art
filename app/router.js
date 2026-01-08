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
  this.route('past-projects', {});
  this.route('project', { path: 'past-projects/:id' });
  this.route('terms-and-conditions', {});
  this.route('donate');
  this.route('404', { path: '/*path' });
  // all redirect to queer trail
  this.route('events');
  this.route('queer-trail');
  this.route('queer-trail', { path: '/tour' });
  // all three bellow redirect to the past-project route
  this.route('projects', {});
  this.route('projects', { path: '/residency' });
  this.route('exhibition', {});
  this.route('audio-archive');
  this.route('current-projects');
  this.route('exhibition');
});
