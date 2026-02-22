import type { ElapsedTime } from '../utils/date';
import CounterCard from './CounterCard';

interface CounterGridProps {
    elapsed: ElapsedTime;
}

const UNITS: { key: keyof ElapsedTime; label: string; pad: boolean; }[] = [
    { key: 'months', label: 'Months', pad: false },
    { key: 'days', label: 'Days', pad: false },
    { key: 'hours', label: 'Hours', pad: true },
    { key: 'minutes', label: 'Minutes', pad: true },
    { key: 'seconds', label: 'Seconds', pad: true },
];

export default function CounterGrid({ elapsed }: CounterGridProps) {
    return (
        <div
            className="flex flex-col items-center flex-1 justify-between gap-1.25 px-3.75 w-full sm:flex-row sm:gap-2 sm:px-0 sm:max-w-2xl lg:max-w-7xl lg:gap-3.75 lg:items-start">
            {UNITS.map(({ key, label, pad }) => (
                <CounterCard
                    key={key}
                    value={elapsed[key]}
                    label={label}
                    pad={pad}
                />
            ))}
        </div>
    );
}
