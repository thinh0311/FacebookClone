import {FishState, createFishSlice} from './testStore';
import {create} from 'zustand';
import {FishState2, createFishSlice2} from './testStore2';

export type AppState = FishState & FishState2;
export type AppStatePersist = {};

const useBoundStore = create<AppState>()((...a) => ({
  ...createFishSlice(...a),
  ...createFishSlice2(...a),
}));

export default useBoundStore;
