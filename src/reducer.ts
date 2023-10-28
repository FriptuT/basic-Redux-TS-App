let lastId = 0;


function reducer(state: any, action: any) {
    if (action.type == 'bugAdded') {
        return [
            ...state,
            {
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            }
        ];
    }
}