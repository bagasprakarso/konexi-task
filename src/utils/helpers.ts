/**
 * Calculates the time elapsed since the given date and returns a string
 * representing the time in a human-readable format.
 *
 * @param {Date | undefined} exportedDate - The date to calculate the time elapsed from.
 * @returns {string} A string representing the time elapsed since the given date in a human-readable format.
 *                    The format is "Last export X ago", where X can be in years (y), months (m), days (d),
 *                    hours (h), minutes (m), or seconds (s). If the date is undefined or invalid, an empty
 *                    string is returned.
 */
export const timeAgo = (exportedDate: Date | undefined): string => {
  if (!exportedDate) return "";
  const now = new Date();
  const diffInMilliseconds = now.getTime() - exportedDate.getTime(); // Calculate the difference in milliseconds

  const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
  const seconds = diffInSeconds;
  const minutes = Math.floor(diffInSeconds / 60);
  const hours = Math.floor(diffInSeconds / 3600);
  const days = Math.floor(diffInSeconds / (3600 * 24));
  const months = Math.floor(diffInSeconds / (3600 * 24 * 30));
  const years = Math.floor(diffInSeconds / (3600 * 24 * 365));
  let time = "";

  if (years > 0) {
    time = `${years}y`;
  } else if (months > 0) {
    time = `${months}m`;
  } else if (days > 0) {
    time = `${days}d`;
  } else if (hours > 0) {
    time = `${hours}h`;
  } else if (minutes > 0) {
    time = `${minutes}m`;
  } else if (seconds > 0) {
    time = `${seconds}s`;
  } else time = "";

  return time ? `Last export ${time} ago` : "";
};
