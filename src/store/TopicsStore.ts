import RootStore from './RootStore';
import { action, observable } from 'mobx';
import { ITopic } from '../types';
import topics from '../mock/topics.json';
import { wait } from '../utils/wait';

class TopicsStore {
  rootStore: RootStore;
  @observable topics: ITopic[] = [];
  @observable isFetchingTopics = false;
  @observable selectedTopic: ITopic | null = null;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  async fetchTopics() {
    this.setIsFetchingTopics(true);

    await wait(500);

    this.setTopics(topics);
    this.setIsFetchingTopics(false);
  }

  @action.bound
  setTopics(topics: ITopic[]) {
    this.topics = topics;
  }

  @action.bound
  setIsFetchingTopics(isFetchingTopics: boolean) {
    this.isFetchingTopics = isFetchingTopics;
  }

  @action.bound
  onTopicSelect(topic: ITopic) {
    if (this.selectedTopic === topic) {
      this.selectedTopic = null;
    } else {
      this.selectedTopic = topic;
      this.rootStore.feedStore.clearPosts();
    }
  }
}

export default TopicsStore;
