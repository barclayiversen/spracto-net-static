import { Archivo_Black } from "next/font/google";

const play = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const About: React.FC = () => {
  return (
    <div className="text-center text-white py-8">
      <p className={`${play.className} mt-10 text-3xl`}>
        &quot;Just a bro tryin&apos; to be a guy, man!&quot;
      </p>
    </div>
  );
};

export default About;
