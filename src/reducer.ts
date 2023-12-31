let lastId = 0;

export default function reducer(state:any = [] , action: any){

    switch (action.type) {
        case "bugAdded":
            return [
                ...state,
                {
                    id: ++lastId,
                    description: action.payload.description,
                    resolved: false
                }
            ];
        
        case "bugRemoved":
            return state.filter((bug: any) => bug.id !== action.payload.id);
    
        default:
            return state;
    }
}