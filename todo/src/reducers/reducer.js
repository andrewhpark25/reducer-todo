import { v4 as uuid } from 'uuid'

export const initialState = [{
  task: 'Learn about reducers',
  completed: false,
  id: uuid()
}]



export function reducer(state, action) {
	switch(action.type) {

		case "ADD_TODO":
      return [...state, action.payload]
      
      case "TOGGLE_TODO":
        return state.map((item) => {
					return item.id === action.payload ?
				{...item, completed: !item.completed} : item
			}
    )
    
    case "CLEAR_TODO":
      return state.filter(item => !item.completed)
	default:
			return state;

	}

} 


