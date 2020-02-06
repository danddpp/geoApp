import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './Pages/Login';

import Mapa from './Pages/Map'

//import Maps from './pages/map';

//componente Routes
const Routes = () => (
  //elemento browserRouter especifica que as rotas estão sendo
  //utilizadas atraves de um browser, pois o react-rputer-dom
  //fornece elementos para consumo de rotas por outros dispositivos
  //que não um browser.
  //Elemento Switch vai habilitar o uso de apenas uma rota por vez
  // a propriedade exact informa ao router para acessar uma rota
  //cujo path seja exatamente o path da URL. 
  <BrowserRouter>
      <Switch>
         <Route exact path="/" component={Login}/>
         <Route path="/map" component={Mapa}/>      
      </Switch>
  </BrowserRouter>
);

export default Routes;