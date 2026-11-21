import { useState } from "react";

export default function useUsers(){

    const [openUsersPage,setOpenUsersPage] = useState<boolean>(false);


    const handleOpenUsersPage = ()=>{
        setOpenUsersPage(!openUsersPage);
    }
    return {openUsersPage,handleOpenUsersPage}
}