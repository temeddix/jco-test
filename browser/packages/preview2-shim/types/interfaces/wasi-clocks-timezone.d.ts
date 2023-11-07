export namespace WasiClocksTimezone {
  /**
   * Return information needed to display the given `datetime`. This includes
   * the UTC offset, the time zone name, and a flag indicating whether
   * daylight saving time is active.
   * 
   * If the timezone cannot be determined for the given `datetime`, return a
   * `timezone-display` for `UTC` with a `utc-offset` of 0 and no daylight
   * saving time.
   */
  export function display(when: Datetime): TimezoneDisplay;
  /**
   * The same as `display`, but only return the UTC offset.
   */
  export function utcOffset(when: Datetime): number;
}
import type { Datetime } from '../interfaces/wasi-clocks-wall-clock.js';
export { Datetime };
/**
 * Information useful for displaying the timezone of a specific `datetime`.
 * 
 * This information may vary within a single `timezone` to reflect daylight
 * saving time adjustments.
 */
export interface TimezoneDisplay {
  /**
   * The number of seconds difference between UTC time and the local
   * time of the timezone.
   * 
   * The returned value will always be less than 86400 which is the
   * number of seconds in a day (24*60*60).
   * 
   * In implementations that do not expose an actual time zone, this
   * should return 0.
   */
  utcOffset: number,
  /**
   * The abbreviated name of the timezone to display to a user. The name
   * `UTC` indicates Coordinated Universal Time. Otherwise, this should
   * reference local standards for the name of the time zone.
   * 
   * In implementations that do not expose an actual time zone, this
   * should be the string `UTC`.
   * 
   * In time zones that do not have an applicable name, a formatted
   * representation of the UTC offset may be returned, such as `-04:00`.
   */
  name: string,
  /**
   * Whether daylight saving time is active.
   * 
   * In implementations that do not expose an actual time zone, this
   * should return false.
   */
  inDaylightSavingTime: boolean,
}
