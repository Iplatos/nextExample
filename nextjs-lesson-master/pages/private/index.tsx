import {LoginNavigate} from "hoc/LoginNavigate";
import {getLayout} from "components/Layout/BaseLayout/BaseLayout";

const Private  = () => {
  return (
    <LoginNavigate>
      <div>im private</div>
    </LoginNavigate>
  )
}
Private.getLayout = getLayout
export default Private