export interface ElapsedTime {
    months: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

// Change this to the desired start date
export const START_DATE: Date = new Date('2026-01-01T00:00:00');

export function calculateElapsed(from: Date): ElapsedTime {
    const now = new Date();

    let years = now.getFullYear() - from.getFullYear();
    let months = now.getMonth() - from.getMonth();
    let days = now.getDate() - from.getDate();

    // Borrow from months if days are negative
    if (days < 0) {
        months -= 1;
        // Days in the previous month relative to `now`
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
    }

    // Borrow from years if months are negative
    if (months < 0) {
        years -= 1;
        months += 12;
    }

    // Total months elapsed (years * 12 + remaining months)
    const totalMonths = years * 12 + months;

    // Remaining H/M/S from time portion
    const fromMidnight = new Date(from);
    fromMidnight.setFullYear(now.getFullYear(), now.getMonth(), now.getDate() - days);

    // Build a reference point that is exactly (totalMonths months + days) after `from`
    const reference = new Date(from);
    reference.setMonth(reference.getMonth() + totalMonths);
    reference.setDate(reference.getDate() + days);

    const diffMs = now.getTime() - reference.getTime();
    const totalSeconds = Math.max(0, Math.floor(diffMs / 1000));

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return { months: totalMonths, days, hours, minutes, seconds };
}
