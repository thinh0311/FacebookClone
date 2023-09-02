import {StateCreator} from 'zustand';

export interface FishState2 {
  fishes2: number;
  addFish2: () => void;
  getFish2: () => number;
}

export const createFishSlice2: StateCreator<FishState2> = (set, get) => ({
  fishes2: 1000,
  addFish2: () => set(state => ({fishes2: state.fishes2 + 1})),
  getFish2: () => get().fishes2,
});
