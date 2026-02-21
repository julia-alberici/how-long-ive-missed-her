import SadCatImg from "../assets/gatinho-triste-chuva-azul.jpg";

export default function CatIllustration() {
    return (
        <img
            src={SadCatImg}
            alt="sad cat in rain"
            className="w-[180px] h-[180px] md:w-[364px] md:h-[364px] object-contain select-none"
        />
    );
}
