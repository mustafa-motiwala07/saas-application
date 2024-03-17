import { Card } from "@/components/ui/card";
import { XIcon } from "lucide-react";

export default function CancelledRoute() {
    return(
        <div className="w-full min-h-[80vh] flex items-center justify-center">
           <Card className="w-[350px]">
                <div className="p-6">
                    <div>
                        <XIcon />
                    </div>
                </div>
            </Card> 
        </div>
    )
}