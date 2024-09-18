import { CircleUserRound } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const UsernameMenu = () => {
    const {user,logout} = useAuth0();
    return (
        <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-teal-500 gap-2">
                    <CircleUserRound className="text-teal-500" />
                    {user?.email}
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                   <DropdownMenuItem>
                   <Link to='/user-profile' className="hover:text-teal-500 font-bold" >Profile</Link>
                   </DropdownMenuItem>
                   <Separator />
                   <DropdownMenuItem>
                   <Button onClick={()=>logout()} className="bg-teal-500 font-bold flex flex-1" >Log Out</Button>
                   </DropdownMenuItem>
                </DropdownMenuContent>
        </DropdownMenu> 
    )
}
export default UsernameMenu;