import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Blog from './components/Blog/Blog.jsx'
import BlogPostDetail from './components/Blog/BlogPostDetail.jsx' // Import the new details view

const Home = lazy(() => import('./components/Home/Home.jsx'))
const Services = lazy(() => import('./components/Services/Services.jsx'))
const About = lazy(() => import('./components/About/About.jsx'))
const Contact = lazy(() => import('./components/Contact/Contact.jsx'))

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={
        <Suspense fallback={<div className="p-8 text-center">Loading...</div>}><Home /></Suspense>
      } />
      <Route path='/services' element={
        <Suspense fallback={<div className="p-8 text-center">Loading...</div>}><Services /></Suspense>
      } />
      <Route path='/about' element={
        <Suspense fallback={<div className="p-8 text-center">Loading...</div>}><About /></Suspense>
      } />
      <Route path='/contact' element={
        <Suspense fallback={<div className="p-8 text-center">Loading...</div>}><Contact /></Suspense>
      } />
      
      {/* Blog Routes */}
      <Route path='/blog' element={<Blog />} />
      {/* Dynamic route using parameter mapping */}
      <Route path='/blog/:slug' element={<BlogPostDetail />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)