"use client"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/Dialog";
import { useState } from "react";   
import { Button } from "@/components/ui/Button";
function AddNewInterview() {
    const [openDialog, setOpenDialog] = useState(false);                                                                              
    return (
        <div>
        <div className="p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer"
        onClick={() => setOpenDialog(true)}>
                <h2 className="text-2xl font-bold text-center">+ Add New</h2>
        </div>
        <Dialog open={openDialog}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        <span>
            <span className="text-2xl font-bold">Tell us about your job prospect</span>
            <span>Add details about your job, the position/role, description, and years experience required</span>
        </span>
        <span>
            <Button>Cancel</Button>
            <Button>Start Interview</Button>
        </span>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
        </div>
    );
}

export default AddNewInterview