/*Pagina para parametros de camada fisica*/
import * as React from "react"
import './parameters.css'
import {useFormContext} from 'react-hook-form';
import {Card} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    FormControl,
    FormField,
    FormItem,
  } from "@/components/ui/form"

export default function Physical() {
    const {register,control}= useFormContext();
  
    return (
        <main className="pt-6 pl-4 pr-4 pb-8">
            <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
                <div className="grid w-full items-start gap-6" >
                    <fieldset className="grid gap-6 rounded-lg border p-4">
                        <div className="grid grid-cols-2 gap-4">
                        <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-3">
                                <FormField
                                control={control}
                                name="Total_Bandwidth"
                                render={({field})=>(
                                <FormItem>
                                <Label htmlFor="Total_Bandwidth">Total Bandwidth</Label>
                                <Select onValueChange={field.onChange} defaultValue="Total_Bandwidth">
                                    <FormControl>
                                    <SelectTrigger className='input'>
                                        <SelectValue placeholder="Select a option" />
                                    </SelectTrigger>
                                    </FormControl>
                                    <SelectContent >
                                    <SelectItem value="4">C Band(4 THz)</SelectItem>
                                    <SelectItem value="9">S Band(9 THz)</SelectItem>
                                    </SelectContent>
                                </Select>
                                </FormItem>
                                )}
                                />
                            </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-3">
                                <Label htmlFor="Slot size">Slot size(GHz)</Label>
                                <Input className='input' {...register("Slot_Size")}type="number" placeholder="12.5" min="12.5" />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-3">
                                <Label htmlFor="Node Loss">Node Loss(dB)</Label>
                                <Input className='input' {...register("Node_Loss")} type="number" placeholder="16" min="16" />
                            </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-3">
                                <Label htmlFor="Fiber Loss Coefficient">Fiber Loss Coefficient(dB/km)</Label>
                                <Input className='input' {...register("Fiber_Loss_Coefficient")} type="number" placeholder="1" min="1" />
                            </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-3">
                                <Label htmlFor="Noise Figure">Noise Figure(dB)</Label>
                                <Input className='input' {...register("Nose_Figure")} type="number" placeholder="5.5" min="5.5" />
                            </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-3">
                                <FormField
                                control={control}
                                name="Signal_Power"
                                render={({field})=>(
                                <FormItem>
                                <Label htmlFor="Signal_Power">Signal Power</Label>
                                <Select onValueChange={field.onChange} defaultValue="Signal_Power">
                                    <FormControl>
                                    <SelectTrigger className='input'>
                                        <SelectValue placeholder="Select a option" />
                                    </SelectTrigger>
                                    </FormControl>
                                    <SelectContent >
                                    <SelectItem value="mW">mW</SelectItem>
                                    <SelectItem value="dB">dB</SelectItem>
                                    </SelectContent>
                                </Select>
                                </FormItem>
                                )}
                                />
                            </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-3">
                                <Label htmlFor="Reference Band">Reference Band(Ghz)</Label>
                                <Input className='input' {...register("Reference_Band")} type="number" placeholder="12.5" min="12.5" />
                            </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-3">
                                <Label htmlFor="Bending Radius">Bending Radius(m)</Label>
                                <Input className='input'{...register("Bending_Radius")}type="number" placeholder="1" min="1" />
                            </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-3">
                                <Label htmlFor="Coupling Coefficient">Coupling Coefficient(dB/Km)</Label>
                                <Input className='input' {...register("Coupling_Coefficient")} type="number" placeholder="0.2" min="0.2" />
                            </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-3">
                                <Label htmlFor="Core Pitch">Core Pitch(µm)</Label>
                                <Input className='input' {...register("Core_Pitch")} type="number" placeholder="45" min="45" />
                            </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-3">
                                <FormField
                                control={control}
                                name="Coupling_factor"
                                render={({field})=>(
                                <FormItem>
                                <Label htmlFor="Coupling_factor">Coupling factor</Label>
                                <Select onValueChange={field.onChange} defaultValue="Coupling_factor">
                                    <FormControl>
                                    <SelectTrigger className='input'>
                                        <SelectValue placeholder="Select a option" />
                                    </SelectTrigger>
                                    </FormControl>
                                    <SelectContent >
                                    <SelectItem value="1.2">1.2 x 10⁻²m⁻¹</SelectItem>
                                    <SelectItem value="5.84">5.84 x 10⁻³m⁻¹</SelectItem>
                                    </SelectContent>
                                </Select>
                                </FormItem>
                                )}
                                />
                            </div>
                            </div>
                        </div>
                    </fieldset>
                   
                </div>
            </Card>
        </main>
    )
}
