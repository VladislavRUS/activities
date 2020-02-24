import React from 'react';
import { Wrapper, NextButtonWrapper } from './Home.styles';
import { RegularButton } from '../../components/RegularButton';
import { Loader } from '../../components/Loader';
import { rootStore } from '../../store';
import Topic from './Topic/Topic';
import { observer } from 'mobx-react';
import { StackNavigationProp } from '@react-navigation/stack';
import { Routes } from '../../constants/Routes';

type Props = {
  navigation: StackNavigationProp<{}>;
};

@observer
class Home extends React.Component<Props> {
  componentDidMount() {
    rootStore.topicsStore.fetchTopics();
  }

  onNext = () => {
    this.props.navigation.push(Routes.FEED);
  };

  render() {
    return (
      <Wrapper>
        {rootStore.topicsStore.topics.map(topic => (
          <Topic
            key={topic.id}
            topic={topic}
            onPress={rootStore.topicsStore.onTopicSelect}
            isActive={rootStore.topicsStore.selectedTopic === topic}
          />
        ))}

        <NextButtonWrapper>
          <RegularButton text={'Далее'} onPress={this.onNext} isDisabled={!rootStore.topicsStore.selectedTopic} />
        </NextButtonWrapper>

        <Loader isVisible={rootStore.topicsStore.isFetchingTopics} />
      </Wrapper>
    );
  }
}

export default Home;
