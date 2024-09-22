import { useUpdateMyUser } from "@/api/UserApi";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";

const UserProfilePage = () => {
    const {updateUser,isPending} = useUpdateMyUser()
    return <UserProfileForm onSave={updateUser} isPending={isPending} />
}
export default UserProfilePage;