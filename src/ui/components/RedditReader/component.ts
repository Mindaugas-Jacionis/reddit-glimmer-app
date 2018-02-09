import Component, { tracked } from '@glimmer/component';
const API_HOST = 'http://localhost:4000';

export default class RedditReader extends Component {
  title = 'Glimmer Test | Reddit Reader App';
  @tracked posts = [];

  constructor(props) {
    super(props);
    this.loadTitle();
  }

  async loadTitle() {
    const response = await fetch(`http://localhost:4000/r/webdev.json`);
    const json = await response.json();

    this.posts = json.data.children;
  }
}
