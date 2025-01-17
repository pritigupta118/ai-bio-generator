"use client"

import { useContext } from "react";

import { Badge } from "../ui/badge";
import { BorderBeam } from "../ui/border-beam";
import { BioContext } from "@/context/BioContext";
import { Skeleton } from "../ui/skeleton";
import CopyLabel from "./CopyLabel";

const Output= () => {
  const {loading, output} = useContext(BioContext);
  return(
    <div className="relative flex min-h-[50vh] mt-2 flex-col rounded-xl bg-muted/50 backdrop-blur-sm overflow-hidden border border-primary/5">
      {loading && <BorderBeam size={1200} duration={4} borderWidth={1.5} className="z-10"/>}
       
      <Badge variant="outline" className="absolute top-3 right-3 z-50 font-semibold">Output</Badge>

  {
    loading ?
    <Skeleton/> :
    <ul className="flex flex-col justify-center items-center p-8 pt-12 xs:p-12 lg:p-16 space-y-8 sm:space-y-12">
      {output?.data.map((data, index) => (
        <li key={index} className="w-full bg-background p-4 rounded-md border border-primary/20 text-sm xs:text-base relative">{data.bio}
        <span className="absolute bottom-2 top-[99%] right-0">
          <CopyLabel text={data.bio}/>
        </span>
        </li>
      ))}
    </ul>
  } 

    </div>
  )
}

export default Output;