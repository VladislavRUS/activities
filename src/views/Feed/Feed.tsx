import React from 'react';
import { Wrapper } from './Feed.styles';
import { rootStore } from '../../store';
import { PostsList } from './PostsList';
import { Loader } from '../../components/Loader';
import { observer } from 'mobx-react';
import { PostModal } from './PostModal';

@observer
class Feed extends React.Component {
  componentDidMount() {
    if (rootStore.topicsStore.selectedTopic) {
      rootStore.feedStore.fetchPostsByTopicId(rootStore.topicsStore.selectedTopic.id);
    }
  }

  render() {
    return (
      <Wrapper>
        <PostsList posts={rootStore.feedStore.posts} />
        <PostModal post={rootStore.feedStore.selectedPost} />
        <Loader isVisible={rootStore.feedStore.isFetchingPosts} />
      </Wrapper>
    );
  }
}

export default Feed;
