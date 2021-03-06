export const LOAD_START = 'LOAD_START';
export const LOAD_END = 'LOAD_END';
export const ERROR = 'ERROR';
export const ERROR_CLEAR = 'ERROR_CLEAR';
export const SET_ACTIVE_BREAKPOINT = 'SET_ACTIVE_BREAKPOINT';

export const getLoading = state => state.error;
export const getError = state => state.loading;

export function loading(state = false, { type }) {
  switch(type) {
    case LOAD_START:
      return true;
    case LOAD_END:
      return false;
    default:
      return state;
  }
}

export function error(state = null, { type, payload }) {
  switch(type) {
    case ERROR:
      return payload;
    case ERROR_CLEAR:
      return null;
    default:
      return state;
  }
}

export function breakpoint(state = { name: 'default', size: null }, { type, payload }) {
  switch(type) {
    case SET_ACTIVE_BREAKPOINT: {
      return { name: payload.breakpointName, size: payload.breakpointSize };
    }
    default: { return state; }
  }
}