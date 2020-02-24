import React from 'react';
import { List, Spacer } from './PostsList.styles';
import { IPost } from '../../../types';
import { Post } from './Post';

interface IPostsListProps {
  posts: IPost[];
}

class PostsList extends React.Component<IPostsListProps> {
  renderItem = ({ item, index }: { item: IPost; index: number }) => {
    return (
      <React.Fragment>
        <Post post={item} />
        {index !== this.props.posts.length - 1 && <Spacer />}
      </React.Fragment>
    );
  };

  keyExtractor = (item: IPost) => item.id.toString();

  render() {
    const { posts } = this.props;
    return <List data={posts} renderItem={this.renderItem} keyExtractor={this.keyExtractor} />;
  }
}

export default PostsList;
