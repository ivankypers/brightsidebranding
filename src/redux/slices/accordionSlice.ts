import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AccordionState {
    openAccordion: string | null; // Название открытого элемента или null
}

const initialState: AccordionState = {
    openAccordion: null,
};

const accordionSlice = createSlice({
    name: 'accordion',
    initialState,
    reducers: {
        setOpenItem: (state, action: PayloadAction<string | null>) => {
            state.openAccordion = action.payload;
        },
    },
});

export const { setOpenItem } = accordionSlice.actions;
export default accordionSlice.reducer;
