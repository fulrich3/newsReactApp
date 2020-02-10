import React from 'react';
import { act } from 'react-dom/test-utils';
import { App } from '../App';
import { storyIds, singularStory } from '../services/hnApi';
import { useInfinteScroll } from '../hooks/useInfiniteScroll';
import { STORY_INCREMENT } from '../constants';