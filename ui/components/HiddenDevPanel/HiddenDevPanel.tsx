import React, { ReactElement } from "react"
import { useHistory } from "react-router-dom"
import SharedButton from "../Shared/SharedButton"

export default function HiddenDevPanel(): ReactElement {
  const history = useHistory()

  return (
    <div>
      <h3>Developer Panel</h3>
      <div className="buttons_wrap standard_width_padded">
        <SharedButton
          type="primary"
          size="medium"
          label="Enter Onboarding"
          icon="arrow_right"
          iconSize="large"
          onClick={() => {
            history.push("/onboarding/0")
          }}
        />
        <SharedButton
          type="secondary"
          size="medium"
          label="Verify Recovery Seed"
          onClick={() => {
            window.localStorage.setItem("hasSavedSeed", "true")
            window.location.reload()
          }}
          icon="arrow_right"
          iconSize="large"
        />
        <SharedButton
          type="secondary"
          size="medium"
          label="Unverify Recovery Seed"
          onClick={() => {
            window.localStorage.removeItem("hasSavedSeed")
            window.location.reload()
          }}
          icon="arrow_right"
          iconSize="large"
        />
      </div>
      <style jsx>{`
        h3 {
          border-bottom: 1px solid var(--hunter-green);
          padding-bottom: 10px;
          padding-left: 26px;
        }
        .buttons_wrap {
          margin: 0 auto;
          height: 140px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
      `}</style>
    </div>
  )
}
