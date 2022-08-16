export default function reducer(state = {isLoaderVisible:false,
  theam:'Opaque'}, action) {
    switch (action.type) {
      case 'SHOW_LOADER':
          return Object.assign({},state,{isLoaderVisible:true,theam:action.theam});
        case 'HIDE_LOADER':
        return Object.assign({},state,{isLoaderVisible:false});
      default:
        return state;
    }
  }