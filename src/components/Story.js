import React, { useState, useEffect } from 'react';
import { getStory } from '../services/hnApi';

// Pas une fonction mais un composant, il faut passer les parametres via ({})
export const Story = ({storyId})  => {
    const [story, setStory] = useState({});

    useEffect(() => {
        getStory(storyId).then(data => {
            data && data.url && setStory(data);
        });
        
    }, []);

    // return <p>{JSON.stringify(story)}</p>;

    return story && story.url ? (
        <div>
            <a href={story.url}>
                <h3>{story.title}</h3>
            </a>
            <p>By: {story.by}</p>
            <p>Posted: {story.time}</p>
        </div>
    ) : null;
}