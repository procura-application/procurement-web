import { Card, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const UsersForm = () => {
  return (
    <div className="m-4">
      
      <Card className="shadow-xl">
        <CardTitle className="m-2 font-bold">Users Basic Information</CardTitle>
         <div className="grid flex-1 auto-rows-min gap-6 px-4 md:grid-cols-2">
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-name" className="font-bold">User Name</Label>
            <Input id="sheet-demo-name" placeholder="Enter User Name" name="businessUnitName" 
             />
          </div>
            <div className="grid gap-3">
            <Label htmlFor="sheet-demo-name" className="font-bold">User Name</Label>
            <Input id="sheet-demo-name" placeholder="Enter User Name" name="businessUnitName" 
             />
          </div>
            <div className="grid gap-3">
            <Label htmlFor="sheet-demo-name" className="font-bold">User Name</Label>
            <Input id="sheet-demo-name" placeholder="Enter User Name" name="businessUnitName" 
             />
          </div>
            <div className="grid gap-3">
            <Label htmlFor="sheet-demo-name" className="font-bold">User Name</Label>
            <Input id="sheet-demo-name" placeholder="Enter User Name" name="businessUnitName" 
             />
          </div>
          </div>
        </Card>
    </div>
  )
}

export default UsersForm
