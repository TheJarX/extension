import React, { ReactElement } from "react"
import { Provider } from "react-redux"
import { HashRouter, Route, Switch } from "react-router-dom"
import { Store } from "webext-redux"
import BrowserTabContainer from "../components/BrowserTab/BrowserTabContainer"
import Snackbar from "../components/Snackbar/Snackbar"
import Ledger from "./Ledger/Ledger"
import TabbedOnboardingRoot from "./Onboarding/Tabbed/Root"

import TabNotFound from "./TabNotFound"

/**
 * Entry point for UI shown in browser tabs.
 */
export default function Tab({ store }: { store: Store }): ReactElement {
  return (
    <>
      <Provider store={store}>
        {/* HashRouter seems the only choice supporting safe page reloads. */}
        <BrowserTabContainer>
          <HashRouter>
            <Switch>
              <Route path="/onboarding">
                <TabbedOnboardingRoot />
              </Route>
              {/* Old Ledger import */}
              <Route path="/ledger" exact>
                <Ledger />
              </Route>
              <Route>
                <TabNotFound />
              </Route>
            </Switch>
          </HashRouter>
        </BrowserTabContainer>
        <Snackbar />
      </Provider>
      <>
        <style jsx global>
          {`
            body,
            #tally-root {
              height: 100%;
            }
          `}
        </style>
      </>
    </>
  )
}
