// useEffect: 
// useState: 
import React, {useEffect, useState} from 'react';
import { getStoryIds } from './services/hnApi';

export const App = () => {
  // Données à afficher
  var data = [];

  // const [, fonctionAppeleeApresMajDuDom]
  const [storyIds, setStoryIds] = useState(data);

  useEffect(() => {
    // Met à jour le contenu de la page 
    getStoryIds().then(newsIds => setStoryIds(newsIds))
  }, []);

  return <p>{JSON.stringify(storyIds)}</p>;
  
}