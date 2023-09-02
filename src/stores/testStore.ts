import {StateCreator} from 'zustand';

export interface FishState {
  fishes: number;
  addFish: () => void;
  getFish: () => number;
}

export const createFishSlice: StateCreator<FishState> = (set, get) => ({
  fishes: 10,
  addFish: () => set(state => ({fishes: state.fishes + 1})),
  getFish: () => get().fishes,
});
