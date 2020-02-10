import React, {useEffect, useState} from 'react';
import { getStoryIds } from '../services/hnApi';
import { Story } from '../components/Story';
import { GlobalStyle, StoriesContainerWrapper } from '../styles/StoryContainerStyles';

import { useInfiniteScroll } from '../hooks/useInfiniteScroll';

export const StoriesContainer = () => {
    // Données à afficher: initialisation d'un tableau vide faisant office de valeur par défaut
    const { count } = useInfiniteScroll();
    const [storyIds, setStoryIds] = useState([]);

    // Similaire à componentDidMount et componentDidUpdate :
    useEffect(() => {
      // Met à jour le contenu de la page 
      getStoryIds().then(newsIds => setStoryIds(newsIds));
    });
  
    // return storyIds.map( (storyId, index) => <Story key={index} storyId={storyId} /> );

    return (
      <>
        <GlobalStyle />
        <StoriesContainerWrapper data-test-id="stories-container">
          <h1>News stories</h1>
          {storyIds.slice(0, count).map( (storyId) => (
            <Story key={storyId} storyId={storyId} />
          ))}
        </StoriesContainerWrapper>
      </>
    )
  }