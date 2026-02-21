interface CounterCardProps {
    value: number;
    label: string;
    pad?: boolean;
}

export default function CounterCard({ value, label, pad = false }: CounterCardProps) {
    const display = pad ? String(value).padStart(2, '0') : String(value);

    return (
        <div className="flex flex-col items-center gap-2 md:gap-[14px]">
            {/* Card box */}
            <div
                className="flex items-center justify-center rounded-card w-[124px] md:w-[201px] h-[99px] md:h-[147px]"
                style={{
                    background: 'linear-gradient(180deg, #AEE6FF 0%, #BBEEFF 100%)',
                }}
            >
                <span
                    className="font-display text-[56px] md:text-[128px] leading-none text-white"
                    style={{ textShadow: '0px 6px 12px rgba(0, 100, 132, 0.25)' }}
                >
                    {display}
                </span>
            </div>

            {/* Label */}
            <span className="font-display text-[11px] md:text-[16px] tracking-[0.04em] text-brand-label">
                {label}
            </span>
        </div>
    );
}
