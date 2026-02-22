interface CounterCardProps {
    value: number;
    label: string;
    pad?: boolean;
}

export default function CounterCard({ value, label, pad = false }: CounterCardProps) {
    const display = pad ? String(value).padStart(2, '0') : String(value);

    return (
        <div className="flex flex-col items-center gap-2 lg:gap-3.5">
            {/* Card box */}
            <div
                className="flex items-center justify-center rounded-card w-29 h-22.75 sm:w-24 sm:h-17.75 md:w-27 md:h-20.75 lg:w-45.25 lg:h-31.75 xl:w-50.25 xl:h-36.75"
                style={{
                    background: 'linear-gradient(180deg, #AEE6FF 0%, #BBEEFF 100%)',
                }}
            >
                <span
                    className="font-display text-[56px] sm:text-[48px] md:text-[52px] lg:text-[96px] xl:text-[120px] leading-none text-[#F7F7F7]"
                    style={{ textShadow: '0px 6px 12px rgba(0, 100, 132, 0.25)' }}
                >
                    {display}
                </span>
            </div>

            {/* Label */}
            <span className="font-display text-[11px] lg:text-[16px] tracking-[0.08em] text-brand-label opacity-80">
                {label}
            </span>
        </div>
    );
}
