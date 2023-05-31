import create from 'zustand';
import utils from '../drawing/utils';

const useDrawingStore = create((set, get) => ({
  completedPaths: [],
  setCompletedPaths: completedPaths => {
    set({completedPaths});
  },
  strokeWidth: 2,
  color: 'black',
  stroke: utils.getPaint(2, 'black'),
  setStrokeWidth: strokeWidth => {
    set({strokeWidth});
  },
  setColor: color => {
    set({color});
  },
  setStroke: stroke => {
    set({stroke});
  },
  canvasInfo: null,
  setCanvasInfo: canvasInfo => {
    set({canvasInfo});
  },
}));

export default useDrawingStore;
