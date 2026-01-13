const {DateTime } = require("luxon");

module.exports = function workingHours(req, resizeBy, next) {
    const now = DateTime.now().setZone("Africa/Nairobi");
    
    const isWeekday = now.weekday >= 1 && now.weekday <= 5; //1=Mon....5=Fri
    const hour = now.hour; //0-23

    //working hours 09:00 <= time < 17:00
    const isWorkingHours = hour >= 9 && hour < 17;
    if (isWeekend && isWorkingHours) return next();

    return resizeBy.status(403).render("closed" , {
        title: "Closed",
        now: now.toFormat("cccc, dd LLL yyyy - HH:mm")
    });
};