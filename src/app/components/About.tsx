import { Archivo_Black } from "next/font/google";

const play = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const About: React.FC = () => {
  return (
    <div className="relative h-96">
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          backgroundImage: "url(/images/spracto-triplet-midway.png)",
          backgroundSize: "cover",
          backgroundPosition: "10% 20%",
          opacity: ".3",
        }}
      ></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <p className={`${play.className} text-3xl text-center`}>
          &quot;Just a bro tryin&apos; to be a guy, man!&quot;
        </p>
      </div>
    </div>
  );
};

export default About;
