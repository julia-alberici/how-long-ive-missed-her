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
        <div className="flex flex-col items-center gap-[5px] px-[15px] md:flex-row md:justify-center md:gap-[15px] md:px-0">
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
