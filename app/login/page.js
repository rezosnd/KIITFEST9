// "use client";

// import { useState } from 'react';

// export default function LoginPage() {
//   const [email, setEmail] = useState('');
//   const [otp, setOtp] = useState('');
//   const [isRunning, setIsRunning] = useState(false);
//   const [showGhost, setShowGhost] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const [isInvalid, setIsInvalid] = useState(false);
//   const [statusMessage, setStatusMessage] = useState('Enter your email and OTP to continue.');

//   const EXPECTED_OTP = '123456';
//   const PAC_SPEED = 2000; // ms
//   const GHOST_RUN_TIME = 2300; // ms after ghost enters (matches reference delay + glide)

//   const runAnimation = () => {
//     setIsRunning(true);
//     setShowGhost(false);
//     setSuccess(false);
//     setIsInvalid(false);
//     setStatusMessage('Verifying...');
//     setTimeout(() => setShowGhost(true), PAC_SPEED);
//   };

//   const finishAnimation = (isMatch) => {
//     setTimeout(() => {
//       setIsRunning(false);
//       setSuccess(isMatch);
//       setIsInvalid(!isMatch);
//       setStatusMessage(isMatch ? 'Access granted — game on!' : 'Wrong OTP — try again.');
//       setTimeout(() => setShowGhost(false), 500);
//     }, PAC_SPEED + GHOST_RUN_TIME);
//   };

//   const handleVerify = (e) => {
//     e.preventDefault();
//     if (isRunning) return;
//     runAnimation();
//     const isMatch = otp.trim() === EXPECTED_OTP;
//     finishAnimation(isMatch);
//   };

//   const handleSendOtp = () => {
//     if (isRunning) return;
//     setOtp('');
//     setShowGhost(false);
//     setSuccess(false);
//     setIsInvalid(false);
//     setStatusMessage('OTP sent! Enter it to play.');
//   };

//   return (
//     <div className="login-shell">
//       <div className="login-card">
//         <h1 className="login-title">Arcade Login</h1>
//         <form className="login-form" onSubmit={handleVerify}>
//           <label htmlFor="email">Email</label>
//           <input
//             id="email"
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="player@kiitfest.com"
//             required
//           />

//           <label htmlFor="otp">OTP</label>
//           <div
//             className={`scene-wrapper ${isRunning ? 'is-running' : ''} ${showGhost ? 'show-ghost' : ''} ${success ? 'is-success' : ''}`}
//           >
//             <input
//               id="otp"
//               type="text"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value)}
//               placeholder="123456"
//               required
//               disabled={isRunning}
//               className={isInvalid ? 'invalid' : ''}
//             />
//             <div className="input-cover" aria-hidden />
//             <div className={`pac-wrapper ${isRunning ? 'is-running' : ''}`} aria-hidden>
//               <div className="pacman" />
//             </div>
//             <div
//               className={`ghost-wrapper ${showGhost ? 'is-live' : ''} ${success ? 'is-success' : ''}`}
//               aria-hidden
//             >
//               <div className={`ghost ${success ? 'runaway' : ''}`} />
//             </div>
//           </div>

//           <div className="login-actions">
//             <button type="button" onClick={handleSendOtp}>Send OTP</button>
//             <button type="submit" disabled={isRunning}>Verify &amp; Play</button>
//           </div>
//         </form>

//         <div className={`login-status ${success ? 'success' : ''} ${isInvalid ? 'error' : ''}`}>
//           {statusMessage}
//         </div>
//       </div>
//     </div>
//   );
// }

'use client'

import { useState } from 'react'
import Image from 'next/image'

const styles = `
  .login-shell {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Courier New', Courier, monospace;
    background: linear-gradient(180deg, #000000 0%, #0a0c14 100%);
  }
  .login-card {
    width: min(480px, 94vw);
    background: #0d0d0d;
    border: 4px solid #C8860A;
    box-shadow: 0 0 0 3px #7A3BFF, 0 0 32px rgba(122,59,255,0.5);
    overflow: hidden;
  }
  .login-logo {
    padding: 24px 24px 0;
    text-align: center;
    background: linear-gradient(180deg, #1a2540 0%, #111827 100%);
  }
  .login-title {
    margin: 0;
    padding: 18px 24px;
    background: linear-gradient(90deg, #CC2200, #FF3300, #CC2200);
    border-bottom: 3px solid #FFEF12;
    color: #FFEF12;
    font-size: clamp(17px, 3.8vw, 24px);
    letter-spacing: 6px;
    text-align: center;
    text-shadow: 0 0 10px #FFEF12;
    text-transform: uppercase;
  }
  .login-form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 32px 32px 24px;
    background: linear-gradient(180deg, #1a2540 0%, #111827 100%);
    border-bottom: 3px solid #C8860A;
  }
  .login-form label {
    font-size: 12px;
    letter-spacing: 3px;
    color: #3CFFF3;
    text-shadow: 0 0 6px #3CFFF3;
    text-transform: uppercase;
  }
  .login-form input {
    width: 100%;
    box-sizing: border-box;
    background: #1a1a2e;
    border: 2px solid #C8860A;
    border-bottom: 3px solid #FFEF12;
    color: #FFEF12;
    font-family: 'Courier New', Courier, monospace;
    font-size: 15px;
    letter-spacing: 2px;
    padding: 12px 16px;
    outline: none;
    box-shadow: inset 0 2px 6px rgba(0,0,0,0.8);
  }
  .login-form input::placeholder { color: rgba(255,239,18,0.35); }
  .login-form input:focus { border-color: #3CFFF3; }
  .login-form input.invalid { border-color: #FF2E88; }
  .login-actions { display: flex; gap: 12px; margin-top: 10px; }
  .login-actions button {
    flex: 1;
    padding: 14px 12px;
    font-family: 'Courier New', Courier, monospace;
    font-size: 13px;
    font-weight: bold;
    letter-spacing: 3px;
    text-transform: uppercase;
    cursor: pointer;
    border: 3px solid #FFEF12;
    background: #CC2200;
    color: #FFEF12;
    box-shadow: 0 0 0 2px #7A3BFF;
    transition: background 0.15s, color 0.15s;
  }
  .login-actions button:hover:not(:disabled) { background: #FFEF12; color: #171717; }
  .login-actions button:disabled { opacity: 0.45; cursor: not-allowed; }
  .login-status {
    padding: 14px 24px;
    background: #0a0a0a;
    border-top: 3px solid #C8860A;
    font-size: 12px;
    letter-spacing: 3px;
    text-align: center;
    color: #FFEF12;
    text-transform: uppercase;
    min-height: 52px;
  }
  .login-status.success { color: #3CFFF3; text-shadow: 0 0 8px #3CFFF3; }
  .login-status.error { color: #FF2E88; text-shadow: 0 0 8px #FF2E88; }

  .alert-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }
  .alert-box {
    background: #0d0d0d;
    border: 4px solid #C8860A;
    box-shadow: 0 0 0 3px #7A3BFF, 0 0 32px rgba(122,59,255,0.5);
    min-width: min(320px, 90vw);
    text-align: center;
  }
  .alert-title {
    padding: 16px 24px;
    background: linear-gradient(90deg, #CC2200, #FF3300, #CC2200);
    border-bottom: 3px solid #FFEF12;
    color: #FFEF12;
    font-size: 18px;
    letter-spacing: 4px;
    text-shadow: 0 0 10px #FFEF12;
    text-transform: uppercase;
  }
  .alert-content {
    padding: 24px;
    background: linear-gradient(180deg, #1a2540 0%, #111827 100%);
    border-bottom: 3px solid #C8860A;
    color: #3CFFF3;
    font-size: 14px;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-shadow: 0 0 6px #3CFFF3;
  }
  .alert-button {
    width: 100%;
    padding: 16px;
    font-family: 'Courier New', Courier, monospace;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 4px;
    text-transform: uppercase;
    cursor: pointer;
    border: none;
    border-top: 3px solid #FFEF12;
    background: #CC2200;
    color: #FFEF12;
    box-shadow: 0 0 0 2px #7A3BFF;
    transition: background 0.15s, color 0.15s;
  }
  .alert-button:hover { background: #FFEF12; color: #171717; }
`

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')
  const [isRunning, setIsRunning] = useState(false)
  const [showGhost, setShowGhost] = useState(false)
  const [success, setSuccess] = useState(false)
  const [isInvalid, setIsInvalid] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [statusMessage, setStatusMessage] = useState(
    'Enter your email and OTP to continue.',
  )

  const EXPECTED_OTP = '123456'
  const PAC_SPEED = 2000
  const GHOST_RUN_TIME = 2300

  const runAnimation = () => {
    setIsRunning(true)
    setShowGhost(false)
    setSuccess(false)
    setIsInvalid(false)
    setStatusMessage('Verifying...')
    setTimeout(() => setShowGhost(true), PAC_SPEED)
  }

  const finishAnimation = (isMatch) => {
    setTimeout(() => {
      setIsRunning(false)
      setSuccess(isMatch)
      setIsInvalid(!isMatch)
      setStatusMessage(
        isMatch ? 'Access granted — game on!' : 'Wrong OTP — try again.',
      )
      setTimeout(() => setShowGhost(false), 500)
    }, PAC_SPEED + GHOST_RUN_TIME)
  }

  const handleVerify = (e) => {
    e.preventDefault()
    if (isRunning) return
    runAnimation()
    const isMatch = otp.trim() === EXPECTED_OTP
    finishAnimation(isMatch)
  }

  const handleSendOtp = () => {
    if (isRunning) return
    setOtp('')
    setShowGhost(false)
    setSuccess(false)
    setIsInvalid(false)
    setStatusMessage('OTP sent! Enter it to play.')
    setShowAlert(true)
  }

  return (
    <>
      <style>{styles}</style>
      <div className="login-shell">
        <div className="login-card">
          <div className="login-logo">
            <Image
              src="/assets/kiitfest-main-logo.png"
              alt="KIITFEST"
              width={200}
              height={80}
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
          <h1 className="login-title">Arcade Login</h1>
          <form className="login-form" onSubmit={handleVerify}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="player@kiitfest.com"
              required
            />

            <label htmlFor="otp">OTP</label>
            <div
              className={`scene-wrapper ${isRunning ? 'is-running' : ''} ${showGhost ? 'show-ghost' : ''} ${success ? 'is-success' : ''}`}
            >
              <input
                id="otp"
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="123456"
                required
                disabled={isRunning}
                className={isInvalid ? 'invalid' : ''}
              />
              <div className="input-cover" aria-hidden />
              <div
                className={`pac-wrapper ${isRunning ? 'is-running' : ''}`}
                aria-hidden
              >
                <div className="pacman" />
              </div>
              <div
                className={`ghost-wrapper ${showGhost ? 'is-live' : ''} ${success ? 'is-success' : ''}`}
                aria-hidden
              >
                <div className={`ghost ${success ? 'runaway' : ''}`} />
              </div>
            </div>

            <div className="login-actions">
              <button type="button" onClick={handleSendOtp}>
                Send OTP
              </button>
              <button type="submit" disabled={isRunning}>
                Verify & Play
              </button>
            </div>
          </form>

          <div
            className={`login-status ${success ? 'success' : ''} ${isInvalid ? 'error' : ''}`}
          >
            {statusMessage}
          </div>
        </div>
      </div>

      {showAlert && (
        <div className="alert-overlay" onClick={() => setShowAlert(false)}>
          <div className="alert-box" onClick={(e) => e.stopPropagation()}>
            <div className="alert-title">OTP SENT</div>
            <div className="alert-content">Check your inbox for the code!</div>
            <button
              className="alert-button"
              onClick={() => setShowAlert(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  )
}
