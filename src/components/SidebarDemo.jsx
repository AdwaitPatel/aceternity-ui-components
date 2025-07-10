"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { cn } from "../lib/utils";
import { Link } from "react-router-dom";

export function SidebarDemo() {
  const links = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: (
        <IconBrandTabler className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Profile",
      href: "#",
      icon: (
        <IconUserBolt className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Settings",
      href: "#",
      icon: (
        <IconSettings className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <IconArrowLeft className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "mx-auto flex w-full flex-1 flex-col overflow-hidden border border-neutral-200 bg-gray-100 md:flex-row dark:border-neutral-700 dark:bg-neutral-800",
        // for your use case, use `h-screen` instead of `h-[60vh]`
        "h-screen md:h-screen"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Adwait Patel",
                href: "#",
                icon: (
                  <img
                    src="https://assets.aceternity.com/manu.png"
                    className="h-7 w-7 shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard />
    </div>
  );
}
export const Logo = () => {
  return (
    <Link
      to={"/"}
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium whitespace-pre text-black dark:text-white"
      >
        Margdarshak
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link
      to={"/"}
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
    </Link>
  );
};

// Dummy dashboard component with content
const Dashboard = () => {
  return (
    <div className="flex flex-1 overflow-hidden">
      <div className="flex h-full w-full flex-1 flex-col gap-6 rounded-tl-2xl border border-neutral-200 bg-white p-6 md:p-10 dark:border-neutral-700 dark:bg-neutral-900 overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-neutral-800 dark:text-white">
            Dashboard
          </h1>
          <div className="text-sm text-neutral-500">
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Total Revenue Card */}
          <div className="h-20 w-full rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 p-4 text-white shadow-sm">
            <div className="flex items-center justify-between h-full">
              <div>
                <p className="text-xs text-blue-100">Total Revenue</p>
                <p className="text-lg font-bold">$45,231</p>
              </div>
              <div className="text-xs text-blue-100">+12.5%</div>
            </div>
          </div>

          {/* Active Users Card */}
          <div className="h-20 w-full rounded-lg bg-gradient-to-r from-green-500 to-green-600 p-4 text-white shadow-sm">
            <div className="flex items-center justify-between h-full">
              <div>
                <p className="text-xs text-green-100">Active Users</p>
                <p className="text-lg font-bold">2,834</p>
              </div>
              <div className="text-xs text-green-100">+8.2%</div>
            </div>
          </div>

          {/* Completed Tasks Card */}
          <div className="h-20 w-full rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 p-4 text-white shadow-sm">
            <div className="flex items-center justify-between h-full">
              <div>
                <p className="text-xs text-purple-100">Tasks Done</p>
                <p className="text-lg font-bold">189</p>
              </div>
              <div className="text-xs text-purple-100">+15.3%</div>
            </div>
          </div>

          {/* Growth Rate Card */}
          <div className="h-20 w-full rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 p-4 text-white shadow-sm">
            <div className="flex items-center justify-between h-full">
              <div>
                <p className="text-xs text-orange-100">Growth Rate</p>
                <p className="text-lg font-bold">24.7%</p>
              </div>
              <div className="text-xs text-orange-100">+3.1%</div>
            </div>
          </div>
        </div>

        {/* Upcoming Meetings Section */}
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-neutral-700 dark:text-neutral-200">
            Upcoming Meetings
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Meeting Card 1 */}
            <div className="relative overflow-hidden rounded-xl border border-neutral-200 bg-gradient-to-br from-blue-50 to-indigo-100 p-6 shadow-sm dark:border-neutral-700 dark:from-blue-950/20 dark:to-indigo-950/20">
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-blue-500/10"></div>
              <div className="relative z-10">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500">
                      <svg
                        className="h-5 w-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2 6a2 2 0 012-2h6l2 2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-800 dark:text-white">
                        Product Strategy Review
                      </h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-300">
                        Weekly team sync
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                    In 2 hours
                  </span>
                </div>

                <div className="mb-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Today, 2:00 PM - 3:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Zoom Meeting Room</span>
                  </div>
                </div>

                <div className="mb-4 flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="h-8 w-8 rounded-full border-2 border-white bg-gradient-to-r from-purple-400 to-pink-400 dark:border-neutral-800"
                    ></div>
                  ))}
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-neutral-100 text-xs font-medium text-neutral-600 dark:border-neutral-800 dark:bg-neutral-700 dark:text-neutral-300">
                    +5
                  </div>
                </div>

                <button className="w-full rounded-lg bg-blue-500 py-2 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700">
                  Join Meeting
                </button>
              </div>
            </div>

            {/* Meeting Card 2 */}
            <div className="relative overflow-hidden rounded-xl border border-neutral-200 bg-gradient-to-br from-green-50 to-emerald-100 p-6 shadow-sm dark:border-neutral-700 dark:from-green-950/20 dark:to-emerald-950/20">
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-green-500/10"></div>
              <div className="relative z-10">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500">
                      <svg
                        className="h-5 w-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-800 dark:text-white">
                        Client Presentation
                      </h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-300">
                        Q4 Results & Roadmap
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-300">
                    Tomorrow
                  </span>
                </div>

                <div className="mb-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Tomorrow, 10:00 AM - 11:30 AM</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Zoom Meeting Room</span>
                  </div>
                </div>

                <div className="mb-4 flex -space-x-2">
                  {[1, 2].map((i) => (
                    <div
                      key={i}
                      className="h-8 w-8 rounded-full border-2 border-white bg-gradient-to-r from-orange-400 to-red-400 dark:border-neutral-800"
                    ></div>
                  ))}
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-neutral-100 text-xs font-medium text-neutral-600 dark:border-neutral-800 dark:bg-neutral-700 dark:text-neutral-300">
                    +3
                  </div>
                </div>

                <button className="w-full rounded-lg bg-green-500 py-2 px-4 text-sm font-medium text-white transition-colors hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-6">
          {/* 1:1 Guidance Card */}
          <div className="relative overflow-hidden rounded-xl border border-neutral-200 bg-gradient-to-br from-purple-50 to-violet-100 p-6 shadow-sm dark:border-neutral-700 dark:from-purple-950/20 dark:to-violet-950/20">
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-purple-500/10"></div>
            <div className="relative z-10">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-800 dark:text-white">
                    1:1 Guidance
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">
                    Personal mentoring sessions
                  </p>
                </div>
              </div>

              <div className="mb-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-600 dark:text-neutral-400">
                    Next Session
                  </span>
                  <span className="text-sm font-medium text-neutral-800 dark:text-white">
                    Tomorrow 3:00 PM
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-600 dark:text-neutral-400">
                    With
                  </span>
                  <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                    Sarah Mitchell
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-600 dark:text-neutral-400">
                    Sessions This Month
                  </span>
                  <span className="text-sm font-medium text-neutral-800 dark:text-white">
                    4/6
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-neutral-600 dark:text-neutral-400">
                    Progress
                  </span>
                  <span className="font-medium text-neutral-800 dark:text-white">
                    67%
                  </span>
                </div>
                <div className="w-full bg-neutral-200 rounded-full h-2 dark:bg-neutral-700">
                  <div
                    className="bg-purple-500 h-2 rounded-full"
                    style={{ width: "67%" }}
                  ></div>
                </div>
              </div>

              <button className="w-full rounded-lg bg-purple-500 py-2 px-4 text-sm font-medium text-white transition-colors hover:bg-purple-600 dark:bg-purple-600 dark:hover:bg-purple-700">
                View Schedule
              </button>
            </div>
          </div>

          {/* Performance Analytics Card */}
          <div className="relative overflow-hidden rounded-xl border border-neutral-200 bg-gradient-to-br from-orange-50 to-amber-100 p-6 shadow-sm dark:border-neutral-700 dark:from-orange-950/20 dark:to-amber-950/20">
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-orange-500/10"></div>
            <div className="relative z-10">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-800 dark:text-white">
                    Performance
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">
                    This month's insights
                  </p>
                </div>
              </div>

              <div className="mb-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-600 dark:text-neutral-400">
                    Goals Completed
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-neutral-800 dark:text-white">
                      12/15
                    </span>
                    <span className="text-xs text-green-600 dark:text-green-400">
                      +20%
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-600 dark:text-neutral-400">
                    Avg. Score
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-neutral-800 dark:text-white">
                      8.4/10
                    </span>
                    <span className="text-xs text-green-600 dark:text-green-400">
                      +0.8
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-600 dark:text-neutral-400">
                    Streak
                  </span>
                  <span className="text-sm font-bold text-orange-600 dark:text-orange-400">
                    14 days
                  </span>
                </div>
              </div>

              <button className="w-full rounded-lg bg-orange-500 py-2 px-4 text-sm font-medium text-white transition-colors hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700">
                View Details
              </button>
            </div>
          </div>

          {/* Learning Resources Card */}
          <div className="relative overflow-hidden rounded-xl border border-neutral-200 bg-gradient-to-br from-teal-50 to-cyan-100 p-6 shadow-sm dark:border-neutral-700 dark:from-teal-950/20 dark:to-cyan-950/20">
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-teal-500/10"></div>
            <div className="relative z-10">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-500">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-800 dark:text-white">
                    Learning Hub
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">
                    Recommended for you
                  </p>
                </div>
              </div>

              <div className="mb-4 space-y-3">
                <div className="rounded-lg bg-white/50 dark:bg-neutral-800/50 p-3">
                  <h4 className="text-sm font-medium text-neutral-800 dark:text-white mb-1">
                    Advanced React Patterns
                  </h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400">
                    45% complete • 2h remaining
                  </p>
                </div>
                <div className="rounded-lg bg-white/50 dark:bg-neutral-800/50 p-3">
                  <h4 className="text-sm font-medium text-neutral-800 dark:text-white mb-1">
                    System Design Fundamentals
                  </h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400">
                    New course • 8h duration
                  </p>
                </div>
              </div>

              <button className="w-full rounded-lg bg-teal-500 py-2 px-4 text-sm font-medium text-white transition-colors hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-700">
                Continue Learning
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
