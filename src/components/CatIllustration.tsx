import SadCatImg from "../assets/gato-triste-chuva-azul.png";

export default function CatIllustration() {
    return (
        <img
            src={SadCatImg}
            alt="sad cat in rain"
            className="w-45 h-45 -scale-x-100 pt-2 sm:pt-0 sm:w-35 sm:h-35 md:w-45 md:h-45 lg:pt-2 lg:w-62.5 lg:h-62.5 xl:w-91 xl:h-91 object-contain select-none animate-float"
        />
    );
}
