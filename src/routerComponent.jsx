import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Container from './components/Container';
import RoutesHandler from './routes';
import { useEffect } from 'react';


const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null; // This component does not render anything
  };

const RouterComponent = () => {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                {RoutesHandler.map((item, index) => (
                    <Route
                        key={index}
                        path={item.path}
                        element={<Container>{item.component}</Container>} />
                ))}
            </Routes>
        </Router>
    )
}

export default RouterComponent