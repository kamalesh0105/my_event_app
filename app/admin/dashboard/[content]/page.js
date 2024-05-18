"use client";
import Sidebar from "@/app/components/admin/sidebar";
import Layout from "@/app/components/admin/Layout";
import styles from "@/app/assets/styles/dashboard.module.css";
import dynamic from "next/dynamic";
import UseAuth from "@/app/includes/Authentication.class";

export default function Dashboard({ params }) {
  const isLoading = UseAuth();
  if (isLoading) {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center vh-100">
        <div className="text-center">
          <h5 className="text-white pt-2">Loading Dashboard Content....</h5>
        </div>
      </div>
    );
  }

  const option = params?.content || "home";
  console.log(option);

  const MainContent = dynamic(() =>
    import(`@/app/components/admin/dashboardContents/${option}`)
  );
  return (
    <Layout>
      <div className="container-fluid">
        <div className="d-flex justify-content-center">
          <Sidebar />
          <main
            role="main"
            className={`col-md-9 ml-sm-auto col-lg-10 px-md-4 ${styles.main}`}
          >
            <MainContent />
          </main>
        </div>
      </div>
    </Layout>
  );
}
