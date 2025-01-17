import FormInput from "@/components/home/FormInput";
import Output from "@/components/home/Output";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { Cover } from "@/components/ui/cover";
import { BioProvideer } from "@/context/BioContext";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";



export const metadata: Metadata = {
  title: "BioGenie",
  description:
    "Generate your perfect Twitter bio with the help of AI. Just answer a few questions and let our AI craft a bio that truly represents you.",
};
export default function Home() {
  return (
<main className="relative grid grid-cols-1 slg:grid-cols-2 px-4 py-12 sm:py-16 sm:px-8 md:px-10 slg:px-16 lg:p-24 gap-12">
  <div className=" col-span-full w-full flex flex-col items-center justify-center space-x-2 sm:space-y-4 mb-4 text-center">
    <Link href="https://github.com/pritigupta118/ai-bio-generator">
    <AnimatedGradientText>
        ✨ <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
        <span
          className={cn(
            `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
          )}
        >
          Star on Github
        </span>
        <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </AnimatedGradientText>
    </Link>
    <h1 className="font-extrabold text-center text-4xl md:text-5xl slg:text-6xl lg:text-7xl w-full lg:w-[90%] uppercase mx-auto pt-4">CRAFT A BIO THAT GETS YOU NOTICED <Cover>FAST!</Cover></h1>
    <p className="text-sm sm:text-base md:text-lg text-[#9c40ff]">Just answer a few questions, and we will generate a bio that captures who you are.</p>
  </div>

 <BioProvideer>
  <FormInput/>
  <Output/>
  </BioProvideer>  
</main>
  );
}
