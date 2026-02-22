import { DateTime } from 'luxon';

export interface ElapsedTime {
    months: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export const START_DATE: Date = new Date('2025-10-07T06:30:00');
export const START_DATE_LABEL = DateTime.fromJSDate(START_DATE).toFormat('LLL d, yyyy');

export function calculateElapsed(from: Date): ElapsedTime {
    const diff = DateTime.fromJSDate(from)
        .diffNow(['months', 'days', 'hours', 'minutes', 'seconds'])
        .negate()
        .toObject();

    return {
        months: Math.floor(diff.months ?? 0),
        days: Math.floor(diff.days ?? 0),
        hours: Math.floor(diff.hours ?? 0),
        minutes: Math.floor(diff.minutes ?? 0),
        seconds: Math.floor(diff.seconds ?? 0),
    };
}
