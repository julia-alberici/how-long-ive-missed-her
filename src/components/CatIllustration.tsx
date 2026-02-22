import { Tooltip } from 'react-tooltip';
import SadCatImg from "../assets/gato-triste-chuva-azul.png";
import { START_DATE_LABEL } from '../utils/date';

export default function CatIllustration() {
    return (
        <>
            <img
                src={SadCatImg}
                alt="sad cat in rain"
                className="w-45 h-45 -scale-x-100 pt-2 sm:pt-0 sm:w-35 sm:h-35 md:w-45 md:h-45 lg:pt-2 lg:w-62.5 lg:h-62.5 xl:w-91 xl:h-91 object-contain select-none animate-float cursor-default"
                data-tooltip-id="cat-tooltip"
            />
            <Tooltip
                id="cat-tooltip"
                content={`Last time we were close was ${START_DATE_LABEL} :(`}
                place="bottom"
                style={{
                    background: 'linear-gradient(180deg, #AEE6FF 0%, #BBEEFF 100%)',
                    color: '#7A5CFA',
                    fontFamily: 'Capriola, sans-serif',
                    fontSize: '13px',
                    borderRadius: '16px',
                    boxShadow: '0px 6px 12px rgba(0, 100, 132, 0.25)',
                    padding: '8px 14px',
                    maxWidth: '220px',
                    textAlign: 'center',
                    lineHeight: '1.5',
                }}
            />
        </>
    );
}
