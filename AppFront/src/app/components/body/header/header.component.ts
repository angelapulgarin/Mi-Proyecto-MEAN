import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {



  constructor( ) {

    /*!
     * Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
     * Copyright 2011-2023 The Bootstrap Authors
     * Licensed under the Creative Commons Attribution 3.0 Unported License.
     */
    
    (() => {
      'use strict'
    
      const getStoredTheme = () => localStorage.getItem('theme')
      const setStoredTheme = (theme: any | null) => localStorage.setItem('theme', theme)
    
      const getPreferredTheme = () => {
        const storedTheme = getStoredTheme()
        if (storedTheme) {
          return storedTheme
        }
    
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      }
    
      const setTheme = (theme: any | null) => {
        if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
          document.documentElement.setAttribute('data-bs-theme', 'dark')
        } else {
          document.documentElement.setAttribute('data-bs-theme', theme)
        }
      }
    
      setTheme(getPreferredTheme())
    
      const showActiveTheme = (theme: any, focus = false) => {
        const themeSwitcher:any = document.querySelector('#bd-theme')
    
        if (!themeSwitcher) {
          return
        }
    
        const themeSwitcherText:any = document.querySelector('#bd-theme-text')
        const activeThemeIcon:any = document.querySelector('.theme-icon-active use')
        const btnToActive:any = document.querySelector(`[data-bs-theme-value="${theme}"]`)
        const svgOfActiveBtn = btnToActive.querySelector('svg use').getAttribute('href')
    
        document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
          element.classList.remove('active')
          element.setAttribute('aria-pressed', 'false')
        })
    
        btnToActive.classList.add('active')
        btnToActive.setAttribute('aria-pressed', 'true')
        activeThemeIcon.setAttribute('href', svgOfActiveBtn)
        const themeSwitcherLabel = `${themeSwitcherText.textContent} (${btnToActive.dataset.bsThemeValue})`
        themeSwitcher.setAttribute('aria-label', themeSwitcherLabel)
    
          
        if (focus) {
          themeSwitcher.focus()
        }
      }
    
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        const storedTheme = getStoredTheme()
        if (storedTheme !== 'light' && storedTheme !== 'dark') {
          setTheme(getPreferredTheme())
        }
      })
    
      window.addEventListener('DOMContentLoaded', () => {
        showActiveTheme(getPreferredTheme())
    
        document.querySelectorAll('[data-bs-theme-value]')
          .forEach(toggle => {
            toggle.addEventListener('click', () => {
              const theme = toggle.getAttribute('data-bs-theme-value')
              setStoredTheme(theme)
              setTheme(theme)
              showActiveTheme(theme, true)
            })
          })
      })
    })()
    
      
    }










  userService = inject(UsersService)



  home() {
    document.getElementById("home-inicio")?.scrollIntoView({behavior:"smooth"});
  };


  servicios() {
    document.getElementById("servicios-inicio")?.scrollIntoView({behavior:"smooth"});
  };


  contactanos(){
    document.getElementById("contacto-imagen")?.scrollIntoView({behavior:"smooth"});
  };


  // registro(){
  //   document.getElementById("registro-inicio")?.scrollIntoView({behavior:"smooth"});
  // };


  // login(){
  //   document.getElementById("login-inicio")?.scrollIntoView({behavior:"smooth"});
  // };
  









  
}
