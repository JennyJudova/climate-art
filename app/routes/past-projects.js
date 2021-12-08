import Route from '@ember/routing/route';

export default class PastProjects extends Route {
  async model() {
    let model = await fetch('/api/past-projects.json');
    let pastProjects = await model.json();
    return pastProjects;
  }
}
