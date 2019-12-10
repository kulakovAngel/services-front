export function setPageTitle(title, dispatch) {
  dispatch({
    type: 'SET_PAGE_TITLE',
    payload: { title },
  });
}