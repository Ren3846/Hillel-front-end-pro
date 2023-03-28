import { getUserByName, getUserInfractions } from './user-api.js';

/**
 * @param {string} username
 * @param {function(string)} callback
 */

function getReasonForWorstInfractionLinkified(username, onReasonFetched) {
  getUserByName(username, (user) => {
    getUserInfractions(user.id, (result) => {
      let foundIndex = 0;
      for (let i = result.length - 1; i >= 0; i--) {
        if (result[i].points > result[foundIndex].points) {
          foundIndex = i;
        }
      }

      const reason = result[foundIndex].reason.replace(
        /\bhttps:\/\/\S+/,
        (match) => `<a href="${match}">${match}</a>`,
      );

      onReasonFetched(reason);
    });
  });
}

/**
 * @param {string} name
 * @param {function(string)} callback
 */

function getReasonForMostRecentInfractionLinkified(name, onReasonFetched) {
  getUserByName(name, (user) => {
    getUserInfractions(user.id, (result) => {
      let foundIndex = 0;
      for (let i = 1; i < result.length; i++) {
        if (result[i].id > result[foundIndex].id) {
          foundIndex = i;
        }
      }

      const reason = result[foundIndex].reason.replace(
        /\bhttps:\/\/\S+/,
        (match) => `<a href="${match}">${match}</a>`,
      );

      onReasonFetched(reason);
    });
  });
}

/**
 * Returns a Promise that resolves to an object containing the linkified reasons for the worst
 * and most recent infractions for a given user.
 * @param {string} username
 * @returns {Promise}
 */

export function getRelevantInfractionReasons(username) {
  return new Promise(function (resolve, reject) {
    getReasonForWorstInfractionLinkified(username, (worstReason) => {
      getReasonForMostRecentInfractionLinkified(username, (mostRecentReason) => {
        const infractionReasons = { mostRecent: mostRecentReason, worst: worstReason };
        resolve(infractionReasons);
      });
    });
  });
}
