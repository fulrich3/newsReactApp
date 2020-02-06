import React, {useEffect, useState} from 'react';
import { getStoryIds } from '../services/hnApi';
import { Story } from '../components/Story';

export const StoriesContainer = () => {
    // Données à afficher: initialisation d'un tableau vide faisant office de valeur par défaut
    // const [, fonctionAppeleeApresMajDuDom]
    const [storyIds, setStoryIds] = useState([]);
  
    // Similaire à componentDidMount et componentDidUpdate :
    useEffect(() => {
      // Met à jour le contenu de la page 
      getStoryIds().then(newsIds => setStoryIds(newsIds));
    }, []);
  
    return storyIds.map( (storyId, index) => <Story key={index} storyId={storyId} /> );
    
  }