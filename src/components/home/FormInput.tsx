"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import MetaIcon from "../icons/Meta"
import MistralIcon from "../icons/Mistral"
import { Slider } from "../ui/slider"
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"
import { Info } from "lucide-react"
import { Textarea } from "../ui/textarea"




const formSchema = z.object({
  model: z.string().min(1, "choose a model."),
  temperature: z.number().min(0, "Temparature must be atleast 0.").max(2, "Temparature should not exceed 2"),
  content: z.string().min(50, "Content must be atleast 50 character long.").max(500, "Content should not exceed 500 characters."),
  type: z.enum(["personal", "brand"], {
    errorMap: ()=> ({message: "Type is required"})
  }),
  tone: z.enum(["professional",
      "casual",
      "sarcastic",
      "funny",
      "passionate",
      "thoughtful",],{
        errorMap: ()=> ({
          message: "Tone is required"
        })
      }),
  emojis: z.boolean()    
})


const FormInput = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      model: "llama3-8b-8192",
      temperature: 1,
      content: "",
      type: "personal",
      tone: "professional",
      emojis: false,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
}

return (
  <div className=" relative flex flex-col item-start gap-6">
  <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full grid gap-6 items-start">
      <fieldset className="grid gap-6 border p-4 rounded-[8px] bg-background/10 backdrop-blur-sm">
        <legend className="">Settings</legend>
      
      <FormField
        control={form.control}
        name="model"
        render={({ field }) => (
          
          <FormItem>
            <FormLabel>Model</FormLabel>
            <FormControl>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a model" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                <SelectItem value="llama3-8b-8192">
                            <div className="flex items-start gap-3 text-muted-foreground">
                              <MetaIcon className="size-5" />
                              <div>
                                <p>
                                  <span className="text-foreground font-medium mr-2">
                                    Llama 3
                                  </span>
                                  8B
                                </p>
                              </div>
                            </div>
                          </SelectItem>
                  <SelectItem value="mixtral-8x7b-32768"> 
                    <div className="flex gap-3 text-muted-foreground">
                     <MistralIcon className="size-5"/>
                     <div>
                     <span className="text-foreground font-medium mr-2">
                     Mistral </span>8X7B
                     </div>
                     <div>

                     </div>
                    </div>
                  </SelectItem>
                  <SelectItem value="llama3-70b-8192">  <div className="flex gap-3 text-muted-foreground">
                     <MetaIcon className="size-5"/>
                     <div>
                     <span className="text-foreground font-medium mr-2">
                     Llama 3 </span>70B
                     </div>
                     <div>

                     </div>
                    </div> </SelectItem>
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

<FormField
        control={form.control}
        name="temperature"
        render={({ field: {value, onChange} }) => (
          
          <FormItem>
            <FormLabel className="flex justify-between"> <span className="flex justify-center items-center">Creativity
            <Tooltip>
    <TooltipTrigger><Info className="w-4 h-4 ml-1"/></TooltipTrigger>
    <TooltipContent 
   collisionPadding={20}
    className="max-w-sm"
    >
      <p>A higher setting produces more creative and surprising bios, while a lower setting sticks to more predictable and conventional styles.</p>
    </TooltipContent>
  </Tooltip>
            </span>
              <span>{value}</span>
            </FormLabel>
            <FormControl>
            <Slider defaultValue={[1]} min={0} max={2} step={0.1} onValueChange={(val)=> onChange(val[0])}/>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button type="submit">Submit</Button>
      </fieldset>

      <fieldset className="grid gap-6 border p-4 rounded-[8px] bg-background/10 backdrop-blur-sm">
        <legend className="-ml-1 px-1 text-sm font-medium">User Input</legend>
      
      <FormField
        control={form.control}
        name="model"
        render={({ field }) => (
          
          <FormItem>
            <FormLabel>About Yourself</FormLabel>
            <FormControl>
             <Textarea {...field} 
             placeholder="Tell us about yourself"
             className="min-h-[10rem]"
             />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

<FormField
        control={form.control}
        name="temperature"
        render={({ field: {value, onChange} }) => (
          
          <FormItem>
            <FormLabel className="flex justify-between"> <span className="flex justify-center items-center">Creativity
            <Tooltip>
    <TooltipTrigger><Info className="w-4 h-4 ml-1"/></TooltipTrigger>
    <TooltipContent 
   collisionPadding={20}
    className="max-w-sm"
    >
      <p>A higher setting produces more creative and surprising bios, while a lower setting sticks to more predictable and conventional styles.</p>
    </TooltipContent>
  </Tooltip>
            </span>
              <span>{value}</span>
            </FormLabel>
            <FormControl>
            <Slider defaultValue={[1]} min={0} max={2} step={0.1} onValueChange={(val)=> onChange(val[0])}/>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button type="submit">Submit</Button>
      </fieldset>
    </form>
  </Form>
  </div>
)

}

export default FormInput