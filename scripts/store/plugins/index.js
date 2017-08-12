import logger from 'vuex/dist/logger';
import {undoRedoPlugin} from "./undoRedoPlugin";

const plugins = [
  logger({}),
  undoRedoPlugin
];

export default plugins;
