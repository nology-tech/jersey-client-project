import React from 'react'


import './ThemeSettings.scss'

const ThemeSettings = () => {
   const handleApply = (e) => {
      e.preventDefault()
   }

   return (
      <div className="theme-settings">
         <h3 className="theme-settings__header">Theme Settings</h3>
         <p className="theme-settings__message">At Lujam, we’re aware that we all have different tastes so please feel free to customise the portal using some of our themes.</p>
         <form action="" className="theme-settings__form">
            <h4 className="theme-settings__form--header">Theme</h4>
            <div className="theme-settings__form--radio">
               <label htmlFor="light">Light</label>
               <input type="radio" id="light" name="fav_language" value="HTML" />
               <label htmlFor="dark">Dark</label>
               <input type="radio" id="dark" name="fav_language" value="CSS" />
            </div>
            <button onClick={handleApply} className="theme-settings__form--button">Apply</button>
         </form>
      </div>
   )
}

export default ThemeSettings
