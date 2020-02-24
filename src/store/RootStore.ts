import TopicsStore from './TopicsStore';
import FeedStore from './FeedStore';

class RootStore {
  topicsStore: TopicsStore;
  feedStore: FeedStore;

  constructor() {
    this.topicsStore = new TopicsStore(this);
    this.feedStore = new FeedStore(this);
  }
}

const rootStore = new RootStore();

export { rootStore };
export default RootStore;
