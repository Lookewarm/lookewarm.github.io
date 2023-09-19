// Import React and Components

// Import Styling
import '../scss/project.scss'
import '../scss/preroll.scss'

// Import our Components
import { Slate, Timer } from 'components/mantle'

// Import our assets


/**
 * Slate: Preroll
 *
 * @returns {React.FunctionComponentElement} React.FunctionComponentElement
 */
export default function PrerollSlate() {
  return (
    <Slate id="preroll">


      <div className="clock-container d-flex position-absolute">
        <span>Hello Chatroom</span>
      </div>
    </Slate>
  )
}
