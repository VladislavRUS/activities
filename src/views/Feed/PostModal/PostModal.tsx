import React from 'react';
import { Modal } from 'react-native';
import { rootStore } from '../../../store';
import { computed } from 'mobx';
import { observer } from 'mobx-react';
import { Overlay, Wrapper, Image, CloseButtonWrapper } from './PostModal.styles';
import * as images from '../../../assets/images';
import { RegularButton } from '../../../components/RegularButton';
import { IPost } from '../../../types';

interface IPostModalProps {
  post: IPost | null;
}

@observer
class PostModal extends React.Component<IPostModalProps> {
  @computed
  get post() {
    return this.props.post;
  }

  @computed
  get isVisible() {
    return Boolean(this.post);
  }

  render() {
    return (
      <Modal
        visible={this.isVisible}
        onRequestClose={rootStore.feedStore.clearSelectedPost}
        animated={true}
        animationType={'fade'}
        transparent={true}
      >
        {this.post && (
          <Overlay>
            <Wrapper>
              <Image source={(images as any)[this.post.image]} />
              <CloseButtonWrapper>
                <RegularButton text={'Закрыть'} onPress={rootStore.feedStore.clearSelectedPost} />
              </CloseButtonWrapper>
            </Wrapper>
          </Overlay>
        )}
      </Modal>
    );
  }
}

export default PostModal;
