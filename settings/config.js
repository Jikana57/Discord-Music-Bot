
require("dotenv").config();

module.exports = {

    /**
     * @description requires settings for the bot
     */

    TOKEN: process.env.TOKEN || "MTE3MzYzNjEwMzAzOTg3NzE1MA.GUrM9g._5jE5AFh_h-nWnNAQya0xaCc6-JOnRPU5WSksE",  // your bot token
    PREFIX: process.env.PREFIX || "$", //<= default is #  // bot prefix
    OWNER_ID: process.env.OWNER_ID || "782818581485846549", //your client id

    /**
     *
     */
    EMPTY_LEAVE: process.env.EMPTY_LEAVE || 60, //<= default is 60  // time in seconds

    /**
     * @description boolean settings for the bot
     */
    LEAVE_EMPTY: true, //<= default is true "true" = use and "false" = not use!  // leave voice channel when empty
    LEAVE_FINISH: true, //<= default is true "true" = use and "false" = not use!  // leave voice channel when finished
    LEAVE_STOP:true, //<= default is true "true" = use and "false" = not use!  // leave voice channel when stopped
}