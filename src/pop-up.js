/**
 * Creates a new pop-up on screen
 * @param {String} message
 * @param {int} type 0 = pass, 1 = warn, 2 = fail
 * @returns {boolean} returns true or false depending on whether pop-up could be created
 */
function createPopUp(message = "", type = 1) {
  const typeList = ["pass", "warn", "fail"];
  const popUpContainer = document.getElementById("pop-up-container");

  // Guard clauses
  if (!popUpContainer) return false; // No pop up container found
  if (!message) return false; // In case message is unset
  if (type < 0 || type >= typeList.length) return false; // Invalid type

  // New pop-up
  const popUp = document.createElement("div");
  popUp.className = "pop-up " + typeList[type];
  popUp.textContent = message;
  popUpContainer.appendChild(popUp);

  // Removal
  setTimeout(() => popUp.remove(), 7900); // time in ms - 100ms

  return true; // Successfully appended element
}
