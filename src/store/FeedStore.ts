import { action, observable } from 'mobx';
import { IPost } from '../types';
import RootStore from './RootStore';
import { wait } from '../utils/wait';
import posts from '../mock/posts.json';

class FeedStore {
  rootStore: RootStore;
  @observable posts: IPost[] = [];
  @observable isFetchingPosts = false;
  @observable selectedPost: IPost | null = null;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async fetchPostsByTopicId(topicId: number) {
    this.setIsFetchingPosts(true);

    await wait(500);

    this.setPosts(posts);
    this.setIsFetchingPosts(false);
  }

  @action.bound
  setPosts(posts: IPost[]) {
    this.posts = posts;
  }

  @action.bound
  clearPosts() {
    this.setPosts([]);
  }

  @action.bound
  setIsFetchingPosts(isFetchingPosts: boolean) {
    this.isFetchingPosts = isFetchingPosts;
  }

  @action.bound
  onPostSelect(post: IPost) {
    this.selectedPost = post;
  }

  @action.bound
  clearSelectedPost() {
    this.selectedPost = null;
  }
}

export default FeedStore;
