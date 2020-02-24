import React from 'react';
import { Wrapper, Title, Image, Day } from './Post.styles';
import { IPost } from '../../../../types';

import { format } from 'date-fns';
import ru from 'date-fns/locale/ru';
import { rootStore } from '../../../../store';
import * as images from '../../../../assets/images';

interface IPostProps {
  post: IPost;
}

class Post extends React.PureComponent<IPostProps> {
  onPress = () => {
    rootStore.feedStore.onPostSelect(this.props.post);
  };

  render() {
    const { post } = this.props;

    return (
      <Wrapper onPress={this.onPress}>
        <Image source={(images as any)[post.image]} />
        <Title>{post.title}</Title>
        <Day>{format(new Date(post.timestamp), 'iiii', { locale: ru })}</Day>
      </Wrapper>
    );
  }
}

export default Post;
