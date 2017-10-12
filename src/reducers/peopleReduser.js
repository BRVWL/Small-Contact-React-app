const initState = ['alex', 'john', 'jin'];

const peopleReduser = (state = initState, action) => {
  if (action.type === 'ADD_NEW_USER') {
    return state.concat('Bond');
  }
  return state;
};

export default peopleReduser;
