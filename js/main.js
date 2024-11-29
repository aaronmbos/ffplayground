import {
  handleExecuteEvent,
  handleQuickActionSelect,
} from "./modules/executeEventHandler.js";

document
  .getElementById("execute")
  .addEventListener("click", handleExecuteEvent);

document
  .getElementById("quick-action")
  .addEventListener("change", handleQuickActionSelect);
