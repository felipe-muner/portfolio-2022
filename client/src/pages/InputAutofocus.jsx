import { useState } from 'react'


const FocusableInput = (props) => {
  const { shouldFocus } = props;
  const [isAutofocus, setIsAutofocus] = useState(shouldFocus)
  return <input autoFocus={isAutofocus} />;
};



export default function InputAutofocus() {
  return (
    <div>
      <FocusableInput shouldFocus={true} />
      <form>
        {/* <input autoFocus id="test-autofocus" /> */}
      </form>
    </div>
  )
}
