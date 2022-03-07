import { Route, Routes } from "react-router-dom";

import PrivateRoute from "./privateRoute";
import PubliceRoute from "./publicRoute";
import { Home } from "../home/index";
import { Shop } from "../shop/index";
import { Feature } from "../feature/index";
import { Blog } from "../blog/index";
import { About } from "../about/index";
import { Contact } from "../contact/index";
import { LoginForm, Singin } from "../user"

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={ 
                        <PrivateRoute> 
                            <Home />
                        </PrivateRoute> 
                    } 
                />
                <Route path="/shop" element={ 
                        <PrivateRoute> 
                            <Shop />
                        </PrivateRoute> 
                    } 

                 />
                <Route path="/feature" element={ 
                        <PrivateRoute> 
                            <Feature />
                        </PrivateRoute> 
                    } 

                />
                <Route path="/blog" element={ 
                        <PrivateRoute> 
                            <Blog />
                        </PrivateRoute>
                    } 
                />
                <Route path="/about" element={ 
                        <PrivateRoute> 
                            <About />
                        </PrivateRoute>  
                    } 
                />
                <Route path="/contact" element={
                        <PrivateRoute> 
                            <Contact />
                        </PrivateRoute> 
                    } 
                />
                <Route path="/login" element={
                        <PubliceRoute>
                            <LoginForm /> 
                        </PubliceRoute>
                    } 
                />

                <Route path="/sing-in" element={
                        <PubliceRoute>
                            <Singin />
                        </PubliceRoute>
                    } 
                />
            </Routes>
        </>
    );
}
 
export default App;