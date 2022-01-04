import Route from '@ember/routing/route';

export default class PastProjects extends Route {
  async model() {
    let model = await fetch('/api/projects/queer-trail.json');
    let queerTrail = await model.json();
    return queerTrail;
  }
}
