const { DateTime } = require("luxon");

module.exports = function workingHours(req, res, next) {
  const now = DateTime.now().setZone("Africa/Nairobi");

  // Mon=1 ... Sun=7
  const isWeekday = now.weekday >= 1 && now.weekday <= 5;

  // Working hours: 09:00 <= time < 17:00
  const isWorkingHours = now.hour >= 9 && now.hour < 17;

  if (isWeekday && isWorkingHours) return next();

  return res.status(403).render("closed", {
    title: "Closed",
    now: now.toFormat("cccc, dd LLL yyyy - HH:mm"),
  });
};
