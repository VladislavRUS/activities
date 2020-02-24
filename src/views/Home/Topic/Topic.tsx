import React from 'react';
import { Wrapper } from './Topic.styles';
import { ITopic } from '../../../types';
import { Selector } from '../../../components/Selector';

interface ITopicProps {
  topic: ITopic;
  onPress: (topic: ITopic) => void;
  isActive: boolean;
}

class Topic extends React.Component<ITopicProps> {
  onPress = () => {
    this.props.onPress(this.props.topic);
  };

  render() {
    const { topic, isActive } = this.props;

    return (
      <Wrapper>
        <Selector text={topic.title} onPress={this.onPress} isActive={isActive} />
      </Wrapper>
    );
  }
}

export default Topic;
