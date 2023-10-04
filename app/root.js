import dynamic from 'next/dynamic';
import RootLayout from './app/layout'; // Adjust the path based on your folder structure

// Dynamically import and render the RootLayout
const DynamicRootLayout = dynamic(() => import('./app/layout'), {
  ssr: false, // Disable server-side rendering for this component
});

function App({ Component, pageProps }) {
  return (
    <DynamicRootLayout>
      <Component {...pageProps} />
    </DynamicRootLayout>
  );
}

export default RootApp;
