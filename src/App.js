import React, { Suspense, lazy } from 'react';
import { Offline, Online } from "react-detect-offline";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import Loading from './components/Loading';
// import { MainProvider } from './context/MainContext';
import OfflineContent from './components/OfflineContent';

const MainPage = lazy(() => import('./pages/MainPage'))
const ErrorPage = lazy(() => import('./pages/ErrorPage'))
const NotFound = lazy(() => import('./pages/NotFound'))

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <ErrorBoundary FallbackComponent={ErrorPage}>
          {/* <MainProvider> */}
            <Offline>
              <OfflineContent />
            </Offline>
            <Online>
              <Switch>
                <Route exact path={["/", "/main"]} component={MainPage} />
                <Route component={NotFound} />
              </Switch>
            </Online>
          {/* </MainProvider> */}
        </ErrorBoundary>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
