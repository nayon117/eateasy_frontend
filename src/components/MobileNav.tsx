import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const MobileNav = () => {
    return (
        <Sheet>
           <SheetTrigger>
            <Menu className="text-teal-500" />
           </SheetTrigger>
           <SheetContent className="space-y-3">
            <SheetTitle>
                Welcome to <span className="text-teal-500">EatEasy</span>
            </SheetTitle>
            <Separator/>
            <SheetDescription className="flex">
                <Button className="flex-1 font-bold bg-teal-500">Log In</Button>
            </SheetDescription>
           </SheetContent>
        </Sheet>
    )
}
export default MobileNav;