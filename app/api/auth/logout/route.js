"use client";
export async function logoutsession() {
  try {
    console.log("HEllo world");
  } catch (error) {
    console.log("Error loggin out");
    return { redirect: { destination: "none", status: false } };
  }

  // Instead of using redirect, return a plain object representing the redirection
  return { redirect: { destination: "/auth/login", status: true } };
}
