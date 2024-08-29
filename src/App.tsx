import { RouterProvider } from 'react-router-dom'
import router from './router/router.tsx'
import useAuthChecked from './hooks/useAuthChecked.ts';

export default function App() {
  useAuthChecked();
  
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  );
}
