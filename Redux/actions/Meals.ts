// export our action identifiers
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const SET_FILTERS = 'SET_FILTERS';

//export our identifier actions
export const ToggleFavorite = (id: string) => {
    return {
        type: TOGGLE_FAVORITE,
        mealId: id
    };
}

export const SetFilters = (activeFilters: any) => {
    return {
        type: SET_FILTERS,
        filters: activeFilters
    }
}