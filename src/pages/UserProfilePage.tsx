import { useGetMyUser, useUpdateMyUser } from "@/api/UserApi";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";

const UserProfilePage = () => {
    const {updateUser,isPending} = useUpdateMyUser()
    const {currentUser,isLoading} = useGetMyUser()

    if(isLoading){
        return <div>Loading...</div>
    }

    if(!currentUser){
        return <span>unable to load user profile</span>
    }

    return <UserProfileForm currentUser={currentUser} onSave={updateUser} isPending={isPending} />
}
export default UserProfilePage;