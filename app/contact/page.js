// 'use client'

// import { useEffect, useRef } from 'react'
// import 'leaflet/dist/leaflet.css'
// import '../../styles/contact.css'

// export default function Contact() {
//   const mapRef = useRef(null)
//   const mapInstanceRef = useRef(null)

//   useEffect(() => {
//     if (mapInstanceRef.current) return

//     import('leaflet').then((L) => {
//       const Lf = L.default

//       const map = Lf.map(mapRef.current, {
//         center: [20.357, 85.8178],
//         zoom: 17,
//         zoomControl: false,
//         attributionControl: false,
//       })

//       Lf.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         maxZoom: 19,
//         tileSize: 256,
//       }).addTo(map)

//       // Custom arcade zoom control
//       const ZoomControl = Lf.Control.extend({
//         onAdd() {
//           const div = Lf.DomUtil.create('div', 'arcade-zoom-ctrl')
//           div.innerHTML = `
//             <button class="arcade-zoom-btn" id="az-in">+</button>
//             <div class="arcade-zoom-divider"></div>
//             <button class="arcade-zoom-btn" id="az-out">−</button>
//           `
//           Lf.DomEvent.disableClickPropagation(div)
//           div.querySelector('#az-in').onclick = () => map.zoomIn()
//           div.querySelector('#az-out').onclick = () => map.zoomOut()
//           return div
//         },
//         onRemove() {},
//       })
//       new ZoomControl({ position: 'topright' }).addTo(map)

//       // Blinking YOU ARE HERE marker
//       const youIcon = Lf.divIcon({
//         className: '',
//         html: `<div class="you-marker">
//           <span class="you-blink">★</span>
//           <div class="you-label">YOU ARE HERE</div>
//         </div>`,
//         iconSize: [0, 0],
//         iconAnchor: [0, 0],
//       })
//       Lf.marker([20.357, 85.8178], { icon: youIcon }).addTo(map)

//       mapInstanceRef.current = map
//     })
//   }, [])

//   return (
//     <main className="contact-section">
//       <div className="contact-container">
//         <div className="contact-header">
//           <h1>CONTACT HQ</h1>
//           <p className="subtitle">&gt;&gt; KIIT CAMPUS MAP &lt;&lt;</p>
//           <p className="tagline">★ INSERT COIN TO EXPLORE ★</p>
//         </div>

//         {/* Side-by-side: cards LEFT, map RIGHT */}
//         <div className="contact-body">
//           <div className="contact-info-grid">
//             <div className="info-card">
//               <h3>LOCATION</h3>
//               <p>
//                 KIIT UNIVERSITY
//                 <br />
//                 BHUBANESWAR
//                 <br />
//                 ODISHA - 751024
//               </p>
//             </div>
//             <div className="info-card">
//               <h3>PHONE</h3>
//               <p>
//                 +91-674-2508080
//                 <br />
//                 +91-674-2508000
//               </p>
//             </div>
//             <div className="info-card">
//               <h3>EMAIL</h3>
//               <p>
//                 INFO@KIIT.AC.IN
//                 <br />
//                 CONTACT@KIIT.AC.IN
//               </p>
//             </div>
//             <div className="info-card">
//               <h3>HOURS</h3>
//               <p>
//                 MON-FRI: 9AM-6PM
//                 <br />
//                 SAT: 10AM-4PM
//               </p>
//             </div>
//           </div>

//           <div className="map-wrapper">
//             <div className="map-scanlines" />
//             <div className="map-color-overlay" />
//             <div className="map-corner map-corner--tl" />
//             <div className="map-corner map-corner--tr" />
//             <div className="map-corner map-corner--bl" />
//             <div className="map-corner map-corner--br" />
//             <div ref={mapRef} style={{ width: '100%', height: '100%' }} />
//           </div>
//         </div>

//         <div className="status-bar">
//           LEVEL: CAMPUS EXPLORER | SCORE: UNLIMITED | STATUS: READY
//         </div>
//       </div>
//     </main>
//   )
// }
'use client'

import { useEffect, useRef } from 'react'
import 'leaflet/dist/leaflet.css'
import '../../styles/contact.css'

export default function Contact() {
  const mapRef = useRef(null)
  const mapInstanceRef = useRef(null)

  useEffect(() => {
    if (mapInstanceRef.current) return

    import('leaflet').then((L) => {
      const Lf = L.default

      const map = Lf.map(mapRef.current, {
        center: [20.357, 85.8178],
        zoom: 17,
        zoomControl: false,
        attributionControl: false,
      })

      Lf.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        tileSize: 256,
      }).addTo(map)

      // Custom arcade zoom control
      const ZoomControl = Lf.Control.extend({
        onAdd() {
          const div = Lf.DomUtil.create('div', 'arcade-zoom-ctrl')
          div.innerHTML = `
            <button class="arcade-zoom-btn" id="az-in">+</button>
            <div class="arcade-zoom-divider"></div>
            <button class="arcade-zoom-btn" id="az-out">−</button>
          `
          Lf.DomEvent.disableClickPropagation(div)
          div.querySelector('#az-in').onclick = () => map.zoomIn()
          div.querySelector('#az-out').onclick = () => map.zoomOut()
          return div
        },
        onRemove() {},
      })
      new ZoomControl({ position: 'topright' }).addTo(map)

      // Blinking YOU ARE HERE marker
      const youIcon = Lf.divIcon({
        className: '',
        html: `<div class="you-marker">
          <span class="you-blink">★</span>
          <div class="you-label">YOU ARE HERE</div>
        </div>`,
        iconSize: [0, 0],
        iconAnchor: [0, 0],
      })
      Lf.marker([20.357, 85.8178], { icon: youIcon }).addTo(map)

      mapInstanceRef.current = map
    })
  }, [])

  return (
    <main className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h1>CONTACT HQ</h1>
          <p className="subtitle">&gt;&gt; KIIT CAMPUS MAP &lt;&lt;</p>
          <p className="tagline">★ INSERT COIN TO EXPLORE ★</p>
        </div>

        {/* Side-by-side: cards LEFT, map RIGHT */}
        <div className="contact-body">
          <div className="contact-info-grid">
            <div className="info-card">
              <h3>LOCATION</h3>
              <p>
                KIIT UNIVERSITY
                <br />
                BHUBANESWAR
                <br />
                ODISHA - 751024
              </p>
            </div>
            <div className="info-card">
              <h3>EMAIL</h3>
              <p>
                INFO@KIIT.AC.IN
                <br />
                CONTACT@KIIT.AC.IN
              </p>
            </div>
            <a
              className="info-card"
              href="https://docs.google.com/forms/d/e/1FAIpQLScF5YsUuXntMBSSZm4fDK4nX_0ad-n1h9Vwot86B1Ygxfpe8A/viewform"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', cursor: 'pointer' }}
            >
              <h3>GENERAL QUERY</h3>
              <p>GOT A QUESTION? DROP IT HERE ↗</p>
            </a>
            <a
              className="info-card"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdZwZg0byMb0GaXAfh6fJcZ8pGQOjZvgnnkYA_dKH7JUo-sxA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', cursor: 'pointer' }}
            >
              <h3>PAYMENT FAILURE</h3>
              <p>FLAG YOUR PAYMENT ISSUE HERE ↗</p>
            </a>
          </div>

          <div className="map-wrapper">
            <div className="map-scanlines" />
            <div className="map-color-overlay" />
            <div className="map-corner map-corner--tl" />
            <div className="map-corner map-corner--tr" />
            <div className="map-corner map-corner--bl" />
            <div className="map-corner map-corner--br" />
            <div ref={mapRef} style={{ width: '100%', height: '100%' }} />
          </div>
        </div>

        <div className="status-bar">
          LEVEL: CAMPUS EXPLORER | SCORE: UNLIMITED | STATUS: READY
        </div>
      </div>
    </main>
  )
}
