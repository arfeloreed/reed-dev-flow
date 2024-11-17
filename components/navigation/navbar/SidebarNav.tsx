"use client";

import Link from "next/link";
import React from "react";

import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

import NavLinks from "./NavLinks";

const SidebarNav = () => {
  return (
    <div className="custom-scrollbar fixed left-0 top-0 z-10 flex h-screen w-[280px] flex-col items-center justify-between border border-red-400 bg-transparent px-8 pb-8 pt-20">
      <section className="flex size-full flex-col gap-6 pt-16">
        <NavLinks />
      </section>

      <div className="flex w-full flex-col gap-3">
        <Link href={ROUTES.SIGN_IN}>
          <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
            <span className="primary-text-gradient">Log In</span>
          </Button>
        </Link>

        <Link href={ROUTES.SIGN_UP}>
          <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg border px-4 py-3 shadow-none">
            Sign Up
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SidebarNav;
