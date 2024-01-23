import Sidebar from "@/app/components/admin/sidebar";
import Layout from "@/app/components/admin/Layout";
import styles from "@/app/assets/styles/dashboard.module.css";
import dynamic from "next/dynamic";

export default function Dashboard({ params }) {
  const option = params?.content || "home";

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
