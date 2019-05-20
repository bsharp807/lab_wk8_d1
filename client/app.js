import { createStore } from 'redux';

document.addEventListener('DOMContentLoaded', () => {
  const shoppingReducer = (state = [], action) => {
    switch (action.type) {
      case 'ADD_ITEM':
        const newState = [...state, action.item]
        return newState
      case 'REMOVE_ITEM':
        console.log(action.index);
        // const removeElement = state.indexOf(action.index)
          const remState = [
            ...state.slice(0, action.index),
            ...state.slice(action.index + 1)
          ]
        return remState;
      default:
        return state;
    }
  }

  const store = createStore(shoppingReducer);

  const form = document.querySelector('#shopping-list-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    store.dispatch({type: 'ADD_ITEM', item: event.target.item.value});
    form.reset();
  })

  store.subscribe(() => {
    render()
  })

  const render = () => {
    console.log(store.getState());
    const list = document.querySelector('#shopping-list');
    list.innerHTML = '';
    store.getState().map((item, index) => {
      const button = document.createElement('button')
      button.textContent = 'X';
      button.addEventListener('click', ()=>{
        store.dispatch({type: 'REMOVE_ITEM', index: index});
        console.log(index);
      })
      const listItem = document.createElement('li');
      listItem.textContent = item;
      list.appendChild(listItem);
      list.appendChild(button);
    })
  }

  render();
})
