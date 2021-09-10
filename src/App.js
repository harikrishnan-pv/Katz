import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Classes1 from './pages/classes'
import Home from './pages/home';
import Bookings from './pages/bookings';
import Contact from './pages/contact';
import Gallery from './pages/gallery';
import Katz2 from './pages/katz2';
import Products from './pages/products';
import Layout from './components/Layout';
import { createTheme, ThemeProvider } from '@material-ui/core';
import { red } from '@material-ui/core/colors';


const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary:{
      main:'#000000',
    },
    secondary: red,
    
  }
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Layout>
          <Switch>
            <Route path="/">
              <Home/>
            </Route>
            <Route path="/classes">
              <Classes1 />
            </Route>
            <Route path="/bookings">
              <Bookings />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/gallery">
              <Gallery />
            </Route>
            <Route path="/katz2">
              <Katz2 />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>

  );
}

export default App;
