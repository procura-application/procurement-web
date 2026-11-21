import { Button } from "@/components/ui/button"
import TitleTypography from "@/features/components/TitleTypography"
import useUsers from "./useUsers"
import UsersForm from "./components/UsersForm";

const UserListingPage = () => {
    const {openUsersPage,handleOpenUsersPage} = useUsers();
  return (
    <div>
      <TitleTypography
      title="Users"
      />

     { !openUsersPage && <div className="my-4 flex justify-end px-4">
        <Button onClick={handleOpenUsersPage}>Add User</Button>
      </div> }

      {openUsersPage && 
      
      <UsersForm/>
      
      }
    </div>
  )
}

export default UserListingPage
