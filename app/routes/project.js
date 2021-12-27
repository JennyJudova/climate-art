import Route from '@ember/routing/route';

export default class ProjectRoute extends Route {
  async model(params) {
    let model = await fetch(`/api/projects/${params.id}.json`);
    let project = await model.json();

    return project;
  }
}
