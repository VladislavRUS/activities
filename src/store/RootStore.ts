import TopicsStore from './TopicsStore';

class RootStore {
  topicsStore: TopicsStore;

  constructor() {
    this.topicsStore = new TopicsStore(this);
  }
}

const rootStore = new RootStore();

export { rootStore };
export default RootStore;
