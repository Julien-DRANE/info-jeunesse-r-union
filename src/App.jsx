import React from 'react';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';

const Layout = () => {
  return (
    <>
      <Header />
      <main className="flex-shrink-0">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: '/article/:id',
                element: <ArticlePage />,
            }
        ]
    }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
