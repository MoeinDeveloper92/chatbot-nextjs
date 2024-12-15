"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "@/assets/logo.png";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import AddNoteDialog from "@/components/AddNoteDialog";

const NavBar = () => {
  const [showAddNoteDialog, setShowAddNoteDialog] = useState<boolean>(false);
  return (
    <>
      <div className="p-4 shadow">
        <div className="flex flex-wrap gap-3 items-center  justify-between max-w-7xl m-auto ">
          <Link href={"/"} className="flex items-center gap-1">
            <Image
              src={logo}
              alt="Flow Brain Logo"
              width={40}
              height={40}
              priority={true}
            />
            <span className="font-bold">FlowBrain</span>
          </Link>

          <div className="flex items-center gap-2">
            <UserButton
              afterSwitchSessionUrl="/"
              appearance={{
                elements: {
                  avatarBox: {
                    width: "2.5rem",
                    height: "2.5rem",
                  },
                },
              }}
            />
            <Button onClick={() => setShowAddNoteDialog(true)}>
              <Plus size={20} className="mr-2" />
              Add Note
            </Button>
          </div>
        </div>
      </div>
      {/* {showDialog && (show somehitn)} by this approach the data will be disaprear totally */}
      <AddNoteDialog open={showAddNoteDialog} setOpen={setShowAddNoteDialog} />
    </>
  );
};

export default NavBar;
