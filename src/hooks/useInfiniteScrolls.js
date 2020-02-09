import {useState, useEffect} from 'react';
import { STORY_INCREMENT, MAX_STORIES } from '../constants';

export const useInfiniteScroll = () => {
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(STORY_INCREMENT);

    // Fonction executée au scroll
    const handleScroll = () => {
        if(
            (
                window.innerHeight + document.documentElement.scrollTop !==  
                document.documentElement.offsetHeight
            )
            || loading
        ){
            return false;
        }

        setLoading(true);
    };

    useEffect(() => {
        if(!loading)
            return;

        if(count + STORY_INCREMENT >= MAX_STORIES){
            setCount(MAX_STORIES);
        } else {
            setCount(count + STORY_INCREMENT);
        }
        setLoading(false);
    }, [count, loading]); // Le useeffect s'execute au changement de ces variables
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        // Cleanup de l'effet au unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return { count };

    // handleScroll();
}