/**
 * action types
 */
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const EXTRACT_TWEETS = 'EXTRACT_TWEETS';

/**
 * other constants
 */
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

/**
 * action creators
 */
export function addTodo(text) { 
  console.log('in add todo');
  return { type: ADD_TODO, text, id:Math.random() };
}

export function toggleTodo(id) { 
  return { type: TOGGLE_TODO, id };
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter };
}

export function extractTweets() {
  return { type: EXTRACT_TWEETS };
}