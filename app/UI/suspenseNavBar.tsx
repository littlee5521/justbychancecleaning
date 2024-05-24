import dynamic from "next/dynamic";

const ClientNavbar = dynamic(() => import("./navbar"), {
  ssr: false, // Ensure this component is only rendered on the client side
  loading: () => <div>Loading...</div>, // Fallback component while loading
});

const SuspenseNavbar: React.FC = () => {
  return <ClientNavbar />;
};

export default SuspenseNavbar;
