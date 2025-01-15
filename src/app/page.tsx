import FormInput from "@/components/home/FormInput";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
<main className="relative grid grid-cols-2 p-24">
  <div className=" col-span-2 w-full flex flex-col items-center justify-center space-y-4 mb-4 text-center">
    <Link href="/">
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
    <h1 className="font-extrabold text-center text-7xl w-full lg:w-[90%] uppercase mx-auto pt-4">CRAFT THE PERFECT TWITTER BIO IN SENCONDS!</h1>
    <p className="text-lg text-[#9c40ff]">Just answer a few questions, and we'll generate a bio that captures who you are.</p>
  </div>

  <FormInput/>
</main>
  );
}
